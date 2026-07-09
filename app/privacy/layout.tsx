import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Emplinked",
  description: "Read our privacy policy. Emplinked is committed to protecting your organizational data with military-grade security.",
};

export default function PrivacyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
