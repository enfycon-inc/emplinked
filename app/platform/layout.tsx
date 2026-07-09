import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Platform | Emplinked",
  description: "Explore the ultimate ecosystem for workforce automation. From geo-fenced attendance to automated payroll and complex shift rostering.",
};

export default function PlatformLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
