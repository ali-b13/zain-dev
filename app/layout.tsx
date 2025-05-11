import type { Metadata } from "next";
import { Tajawal } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/navbar/NavBar";
import Footer from "./components/Footer";

const tajwalFont = Tajawal({
  subsets: ["arabic"],
  weight: ["400", "500", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "زين التنموية",
  description: "شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية. نقدم التميز في خدمات المقاولات والصيانة والخدمات المتخصصة",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`${tajwalFont.className}  antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
