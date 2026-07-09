import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Emplinked",
  description: "Get in touch with the Emplinked team. We are here to help you modernize your workforce management operations.",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
