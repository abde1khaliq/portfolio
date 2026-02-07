import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import { Provider } from "@/components/ui/provider";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: "300",
});

export const metadata: Metadata = {
  title: "Ahmed Abdelkhaliq",
  description:
    "Full-stack web developer from Egypt. Passionate about building scalable apps, open-source projects like FastAuth, and blending functionality with clean design.",
  keywords: [
    "Ahmed Abdelkhaliq",
    "Full-stack developer",
    "FastAPI",
    "Next.js",
    "React",
    "FastAuth",
    "Open-source",
    "Portfolio",
  ],
  authors: [{ name: "Ahmed Abdelkhaliq" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${roboto.className} antialiased`}>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
