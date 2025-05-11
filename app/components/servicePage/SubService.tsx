// components/ServicePage/SubServices.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import LinkButton from "@/app/components/ui/Button";
import { PriceDisplay } from "@/app/components/partials/PriceDisplay";
import { SubService } from "@/app/lib/types/types";

type Props = {
  subServices: SubService[];
  serviceTitle: string;
};

export const SubServices = ({ subServices, serviceTitle }: Props) => (
  <section className="container mx-auto px-4 py-20 relative z-10">
    <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
      خدماتنا المتخصصة
    </h2>
    <p className="text-lg text-amber-800 leading-relaxed mb-8 text-center">
      نقدم مجموعة متكاملة من الخدمات المتخصصة في مجال {serviceTitle} لتلبية
      احتياجات عملائنا بأعلى معايير الجودة
    </p>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {subServices.map((sub, index) => (
        <SubServiceCard key={index} sub={sub} index={index} />
      ))}
    </div>
  </section>
);

const SubServiceCard = ({ sub, index }: { sub: SubService; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200"
  >
    <div className="relative h-48 rounded-t-2xl overflow-hidden">
      <Image src={sub.image} alt={sub.title} fill className="object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{sub.title}</h3>
      {sub.price && <PriceDisplay price={sub.price} />}
      <p className="text-gray-600 mb-6 min-h-16">{sub.description}</p>
      <LinkButton href="/" className="w-full text-center">
        اطلب الخدمة
      </LinkButton>
    </div>
  </motion.div>
);
