import type { Metadata } from "next";
import { Geist, Geist_Mono, Inknut_Antiqua } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inknutAntiqua = Inknut_Antiqua({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inknut-antiqua'
})

export const metadata: Metadata = {
  title: "Prospera - Asesoria financiera",
  description: "Asesoria financiera para empresas y particulares",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inknutAntiqua.variable} antialiased bg-[#F5ECE3] px-24`}
      >
        {children}
      </body>
    </html>
  );
}
