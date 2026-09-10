import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gattupalli Eswar - Portfolio",
  description: "Portfolio of Gattupalli Eswar: computer vision, operations, and leadership.",
  icons: { icon: "favicon.svg", shortcut: "favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
