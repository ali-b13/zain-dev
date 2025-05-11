// components/Services/ServiceCard.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Service } from "@/app/lib/types/types";

type Props = {
  service: Service;
  index: number;
};

export const ServiceCard = ({ service, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className="group relative cursor-pointer"
  >
    <div className="absolute inset-0 bg-gradient-to-br from-amber-100 to-amber-50 rounded-2xl transform group-hover:rotate-1 transition-transform duration-300 -z-10" />
    <Link href={`/services/${service.id}`}>
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl transition-all border border-amber-100 group-hover:border-amber-200 h-full overflow-hidden">
        <ServiceImage image={service.image} title={service.title} />
        <ServiceContent service={service} />
      </div>
    </Link>
  </motion.div>
);

const ServiceImage = ({ image, title }: { image: string; title: string }) => (
  <motion.div
    className="relative h-48 w-full"
    whileHover={{ scale: 1.05 }}
    transition={{ type: "spring", stiffness: 300 }}
  >
    <Image
      src={image}
      alt={title}
      fill
      className="object-fill"
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
    />
  </motion.div>
);

const ServiceContent = ({ service }: { service: Service }) => (
  <div className="p-6">
    <div className="mb-4 text-amber-700 group-hover:text-amber-800 transition-colors">
      {service.icon}
    </div>
    <h3 className="text-xl font-bold text-amber-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
      {service.title}
    </h3>
    <p className="text-gray-600 leading-relaxed">{service.description}</p>
  </div>
);
