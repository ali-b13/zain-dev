"use client";
import { motion } from "framer-motion";
import { JSX } from "react";

type StatCardProps = {
  stat: {
    icon: JSX.Element;
    title: string;
    value: string;
  };
  index: number;
};

export const StatCard = ({ stat, index }: StatCardProps) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: index * 0.1 }}
    className="bg-white backdrop-blur-sm p-4 rounded-lg flex items-center gap-3 border border-gray-200 hover:border-blue-200 transition-colors"
  >
    <div className="text-amber-600">{stat.icon}</div>
    <div>
      <div className="text-xl font-bold text-gray-900">{stat.value}</div>
      <div className="text-sm text-gray-600">{stat.title}</div>
    </div>
  </motion.div>
);
