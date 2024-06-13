import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "@/styles/globals.css";
import { cn } from "@/lib/utils";

const inter = Sora({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OnHack",
  description: "OnChain Summer Buildathon. A 3- Weeks Hack Builders Fellowship Program",
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("min-h-screen overflow-x-hidden", inter.className)}>{children}</body>
    </html>
  );
}
