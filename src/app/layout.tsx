import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppBtn from "@/components/WhatsAppBtn";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const notoSansSC = Noto_Sans_SC({
  variable: "--font-noto-sans-sc",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "中山欧得宝家庭用品有限公司 - 高端日化与家清产品智造专家",
  description: "全球领先的日化 OEM/ODM 源头工厂",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="zh-CN"
      className={`${plusJakartaSans.variable} ${notoSansSC.variable} font-sans antialiased overflow-x-hidden`}
    >
      <body className="text-brand-dark min-h-screen flex flex-col relative">
        <Header />
        <main className="flex-1 flex flex-col">
          {children}
        </main>
        <Footer />
        <WhatsAppBtn />
      </body>
    </html>
  );
}
