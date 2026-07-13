import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://emplinked.com"),
  title: "Emplinked - The Intelligent Workforce Operating System",
  description: "Automate attendance, payroll, shift scheduling, and HR operations with the ultimate cloud-native workforce platform.",
  openGraph: {
    title: "Emplinked - The Intelligent Workforce Operating System",
    description: "Automate attendance, payroll, shift scheduling, and HR operations with the ultimate cloud-native workforce platform.",
    url: "https://emplinked.com",
    siteName: "Emplinked",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Emplinked - The Intelligent Workforce Operating System",
    description: "Automate attendance, payroll, shift scheduling, and HR operations with the ultimate cloud-native workforce platform.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${plusJakarta.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 font-sans transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
