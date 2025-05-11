"use client";
import { motion } from "framer-motion";

type ProcessStepProps = {
  step: {
    title: string;
    description: string;
  };
  index: number;
};

export const ProcessStep = ({ step, index }: ProcessStepProps) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    className="bg-gray-50 p-8 rounded-2xl shadow-lg border-l-4 border-amber-600 relative overflow-hidden"
  >
    <div className="absolute top-0 right-0 text-9xl font-bold text-amber-900/5 z-0">
      {index + 1}
    </div>
    <div className="relative z-10">
      <h3 className="text-xl font-bold text-amber-900 mb-4">{step.title}</h3>
      <p className="text-gray-700 font-semibold leading-relaxed">
        {step.description}
      </p>
    </div>
  </motion.div>
);
