import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Emplinked",
  description: "Discover tailored workforce management solutions for enterprise, manufacturing, healthcare, and distributed field teams.",
};

export default function SolutionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
