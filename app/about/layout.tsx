import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Emplinked",
  description: "Learn about Emplinked's mission to revolutionize workforce management with intelligent, automated HR and attendance solutions.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
