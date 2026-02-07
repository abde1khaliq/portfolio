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
  title: "Ahmed Abdelkhaliq | Full-stack Developer Portfolio",
  description:
    "Ahmed Abdelkhaliq (Abdelkhaliq), a 17-year-old full-stack web developer from Egypt. Creator of FastAuth and Reppy. Passionate about scalable apps, open-source frameworks, and blending clean design with developer delight.",
  keywords: [
    "Ahmed Abdelkhaliq",
    "Ahmed Mohamed Ahmed Abdelkhaliq",
    "Abdelkhaliq",
    "Full-stack developer",
    "Frontend developer",
    "Backend developer",
    "FastAPI",
    "Django REST Framework",
    "Django",
    "Next.js",
    "React",
    "TypeScript",
    "Python",
    "Open-source",
    "Portfolio",
    "FastAuth",
    "Reppy",
    "Developer tools",
    "Scalable apps",
    "Egyptian developer",
    "GitHub projects",
    "Web development",
    "Mobile apps",
    "Desktop apps",
    "Software architect",
    "Open-source contributor",
    "Chakra UI",
    "Tailwind CSS",
    "Bun runtime",
    "Vercel deployment",
    "SEO portfolio",
    "Personal branding",
    "Tech stack",
    "Coding passion",
    "Building solutions",
    "Developer experience",
    "Clean design",
    "Modern UI",
  ],
  authors: [{ name: "Ahmed Abdelkhaliq" }],
  openGraph: {
    title: "Ahmed Abdelkhaliq | Full-stack Developer Portfolio",
    description:
      "Portfolio of Ahmed Abdelkhaliq (Abdelkhaliq), showcasing projects and skills in Backend and Frontend Development",
    url: "https://abdelkhaliq.vercel.app",
    siteName: "Ahmed Abdelkhaliq Portfolio",
    images: [
      {
        url: "https://i.postimg.cc/90rKSbFt/me.jpg",
        width: 1200,
        height: 630,
        alt: "Ahmed Abdelkhaliq Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ahmed Abdelkhaliq | Full-stack Developer Portfolio",
    description:
      "17-year-old full-stack developer from Egypt. Passionate about scalable apps and open-source frameworks.",
    images: ["https://i.postimg.cc/90rKSbFt/me.jpg"],
  },
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
