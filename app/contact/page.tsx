import type { Metadata } from "next";
import ContactContent from "../../components/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Omar Akhji. Send a message for freelance work, collaboration, or job opportunities in web development.",
  openGraph: {
    title: "Contact | Omar Akhji",
    description:
      "Get in touch with Omar Akhji for freelance work, collaboration, or job opportunities.",
  },
};

export default function ContactPage() {
  return <ContactContent />;
}
