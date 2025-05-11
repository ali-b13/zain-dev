"use client";
import { motion } from "framer-motion";

type Props = {
  title: string;
  subtitle: string;
  titleColor?: string;
  subtitleColor?: string;
};

export const SectionHeader = ({
  title,
  subtitle,
  titleColor = "text-gray-900",
  subtitleColor = "text-gray-600",
}: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "0px 0px -100px 0px" }}
    transition={{ duration: 0.6 }}
    className="text-center mb-16"
  >
    <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${titleColor}`}>
      {title}
    </h2>
    <p className={`text-lg max-w-2xl mx-auto ${subtitleColor}`}>{subtitle}</p>
  </motion.div>
);
