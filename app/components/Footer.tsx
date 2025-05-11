// components/Footer.tsx
"use client";

import Link from "next/link";
import WebsiteLogo from "./navbar/Logo";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-tl from-amber-900 to-amber-950 text-amber-50 pt-16 pb-8 mt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-amber-800 pb-12">
          {/* Company Info */}
          <div className="space-y-4 ">
            <WebsiteLogo className="text-white" />
            <p className="text-amber-300 leading-relaxed">
              شركة رائدة في مجال المقاولات والتطوير في المملكة العربية السعودية.
              نقدم التميز في خدمات المقاولات والصيانة والخدمات المتخصصة
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  من نحن
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-amber-300 transition-colors"
                >
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  مشاريعنا
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  المتجر
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  اتصل بنا
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Other Sites */}
          <div className="space-y-4">
            <div className="mb-6">
              <h4 className="text-xl font-bold mb-4">اتصل بنا</h4>
              <p className="text-amber-300">
                المملكة العربية السعودية، المنطقة الشرقية
              </p>
              <a
                href="tel:920010535"
                className="block mt-2 hover:text-amber-300"
              >
                920010535
              </a>
              <a
                href="mailto:info@zaindev.com.sa"
                className="block mt-2 hover:text-amber-300"
              >
                info@zaindev.com.sa
              </a>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4">مواقعنا الأخرى</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-300 transition-colors"
                  >
                    متجر لابيسكا
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-amber-300 transition-colors"
                  >
                    زين لك
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Policies */}
          <div className="space-y-4">
            <h4 className="text-xl font-bold mb-4">الشروط والسياسات</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  سياسة الخصوصية
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  شروط الخدمة
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  سياسة الاسترجاع
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  سياسة الشحن
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-amber-300 transition-colors"
                >
                  اتفاقية المستخدم
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-amber-400">
            © 2025 زين التنموية. جميع الحقوق محفوظة
            <span className="block mt-2">تطوير وتصميم بواسطة علي العمري</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
