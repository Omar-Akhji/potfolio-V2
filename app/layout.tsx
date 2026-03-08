import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import { Sidebar } from "../components/Sidebar";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { resumeData } from "../data/resumeData";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Resume | John Doe",
  description: "Professional CV and Resume",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("font-sans", inter.variable, poppins.variable)}
    >
      <body className="bg-bg text-text relative min-h-screen font-sans leading-[1.6] antialiased">
        <main className="mx-3 my-4 mb-18.75 min-w-64.75 sm:mt-15 sm:mb-25 xl:mx-auto xl:flex xl:max-w-300 xl:items-stretch xl:justify-center xl:gap-6">
          <Sidebar
            initials={resumeData.personal.initials}
            name={resumeData.personal.name}
            title={resumeData.personal.title}
            contact={resumeData.personal.contact}
            skills={resumeData.personal.skills}
            languages={resumeData.personal.languages}
          />
          <div className="relative lg:mx-auto lg:w-max xl:mx-0 xl:w-3/4 xl:min-w-3/4">
            <Navbar />
            {children}
            <Footer />
          </div>
        </main>
      </body>
    </html>
  );
}
