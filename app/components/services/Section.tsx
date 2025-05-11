"use client";
import { servicesData } from "@/app/lib/data";
import LinkButton from "@/app/components/ui/Button";
import { SectionHeader } from "./Header";
import { ServiceCard } from "./Card";

export function ServicesSection() {
  return (
    <section className="relative py-20 flex flex-col justify-center items-center gap-6">
      <div className="max-w-7xl mx-auto px-4">
        <SectionHeader
          title="خدماتنا المتكاملة"
          subtitle="نقدم حلولاً إنشائية متكاملة تلبي كافة متطلبات المشاريع الكبرى"
          titleColor="text-amber-900"
          subtitleColor="text-amber-700"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
      <LinkButton href="/">تصفح جميع الخدمات</LinkButton>
    </section>
  );
}
