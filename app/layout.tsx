import type { Metadata } from "next";
import "./globals.css";

//components
export const metadata: Metadata = {
  title: "Joris Loit",
  description: "Portfolio Joris Loit",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <html>{children}</html>;
}
