"use client";
import { motion } from "framer-motion";
import Image from "next/image";

type ServiceImageProps = {
  image: string;
  title: string;
};

export const ServiceImage = ({ image, title }: ServiceImageProps) => (
  <motion.div
    className="md:w-1/2 relative"
    initial={{ opacity: 0, x: 10 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <motion.div
      className="absolute top-0 left-0 w-full h-full z-0 rotate-12"
      initial={{ opacity: 0.7, x: -30, y: -20 }}
      whileHover={{ rotate: 10, x: -10, y: -10 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <div className="w-full h-full bg-amber-600/30 rounded-lg shadow-xl" />
    </motion.div>

    <div className="h-full flex items-center justify-center p-8 relative z-10">
      <motion.div
        className="relative w-full h-64 md:h-96 shadow-lg rounded-lg overflow-hidden border-8 border-white bg-white"
        whileHover={{ scale: 1.0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image src={image} alt={title} fill className="object-cover" priority />
      </motion.div>
    </div>
  </motion.div>
);
