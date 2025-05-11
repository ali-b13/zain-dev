"use client";
import { motion } from "framer-motion";
import { ProcessStep } from "@/app/components/partials/ProcessStep";

type ProcessStep = {
  title: string;
  description: string;
};

type Props = {
  process: ProcessStep[];
};

export const ProcessSection = ({ process }: Props) => (
  <section className="bg-white py-20 relative z-10">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
        مراحل تنفيذ المشروع
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {process.map((step, index) => (
          <ProcessStep key={index} step={step} index={index} />
        ))}
      </div>
    </div>
  </section>
);
