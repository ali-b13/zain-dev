"use client";
import { motion } from "framer-motion";
import { Service } from "@/app/lib/types/types"; // Define your types
import { ServiceImage } from "@/app/components/partials/ServiceImage";
import { StatCard } from "@/app/components/partials/StatCard";
import { JSX } from "react";

type Props = {
  service: Service;
  stats: Array<{ icon: JSX.Element; title: string; value: string }>;
};

export const HeroSection = ({ service, stats }: Props) => (
  <section className="container mx-auto px-4 py-12 relative z-10">
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden border border-gray-100">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {service.title}
            </h1>
            <p className="text-lg lg:text-xl text-amber-800 leading-relaxed mb-8">
              {service.description}
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <StatCard key={index} stat={stat} index={index} />
              ))}
            </div>
          </motion.div>
        </div>
        <ServiceImage image={service.image} title={service.title} />
      </div>
    </div>
  </section>
);
