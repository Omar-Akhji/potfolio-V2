"use server";

import { z } from "zod/v4";
import nodemailer from "nodemailer";

// ── Validation Schema ──
const ContactSchema = z.object({
  fullname: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be under 100 characters"),
  email: z.email("Please enter a valid email address"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be under 2000 characters"),
});

// ── Response Type ──
export interface ContactFormState {
  success: boolean;
  message: string;
  errors?: {
    fullname?: string;
    email?: string;
    message?: string;
  };
}

// ── Server Action ──
export async function sendContactEmail(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  // 1. Parse and validate
  const raw = {
    fullname: formData.get("fullname"),
    email: formData.get("email"),
    message: formData.get("message"),
  };

  const result = ContactSchema.safeParse(raw);

  if (!result.success) {
    const fieldErrors: ContactFormState["errors"] = {};
    for (const issue of result.error.issues) {
      const field = issue.path[0] as keyof typeof fieldErrors;
      if (field) fieldErrors[field] = issue.message;
    }
    return {
      success: false,
      message: "Please fix the errors below.",
      errors: fieldErrors,
    };
  }

  const { fullname, email, message } = result.data;

  // 2. Check SMTP config
  if (
    !process.env.SMTP_HOST ||
    !process.env.SMTP_USER ||
    !process.env.SMTP_PASS
  ) {
    console.error("SMTP environment variables are not configured.");
    return {
      success: false,
      message: "Email service is not configured. Please try again later.",
    };
  }

  // 3. Send email via Nodemailer
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"${fullname}" <${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_TO_EMAIL || process.env.SMTP_USER,
      subject: `Portfolio Contact: ${fullname}`,
      text: `Name: ${fullname}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">New Contact Message</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Name:</td>
              <td style="padding: 8px;">${fullname}</td>
            </tr>
            <tr>
              <td style="padding: 8px; font-weight: bold; color: #555;">Email:</td>
              <td style="padding: 8px;"><a href="mailto:${email}">${email}</a></td>
            </tr>
          </table>
          <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
          <div style="padding: 16px; background: #f9f9f9; border-radius: 8px;">
            <p style="white-space: pre-wrap; color: #333; line-height: 1.6;">${message}</p>
          </div>
        </div>
      `,
    });

    return {
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
