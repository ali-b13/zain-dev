"use client";
import { motion } from "framer-motion";
import LinkButton from "@/app/components/ui/Button";

export const CTASection = () => (
  <section className="text-amber-950 py-20 relative z-10">
    <div className="container mx-auto px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-6">
          مستعد لبدء مشروعك؟
        </h2>
        <p className="text-xl font-semibold text-amber-800 leading-relaxed mb-8">
          تواصل معنا الآن للحصول على استشارة مجانية وتقدير تكاليف المشروع
        </p>
        <LinkButton href="/contact" className="text-amber-900 hover:bg-gray-50">
          اتصل بنا الآن
        </LinkButton>
      </motion.div>
    </div>
  </section>
);
