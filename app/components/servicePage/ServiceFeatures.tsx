"use client";
import { motion } from "framer-motion";
import { CheckCircle, Clock, Users, Award } from "lucide-react";

type Feature = {
  icon: string;
  title: string;
  description: string;
};

type Props = {
  features: Feature[];
};

export const ServiceFeatures = ({ features }: Props) => (
  <section className="container mx-auto px-4 py-20 relative z-10">
    <div className="bg-gradient-to-br from-navy-50 to-white rounded-3xl p-12">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          مزايا الخدمة
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-amber-800 max-w-2xl mx-auto"
        >
          تميز خدماتنا بمجموعة من المزايا الفريدة التي تضمن نجاح مشروعك
        </motion.p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <FeatureCard key={index} feature={feature} index={index} />
        ))}
      </div>
    </div>
  </section>
);

const FeatureCard = ({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.1 }}
    className="group relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
  >
    <div className="relative z-10">
      <div className="w-14 h-14 bg-amber-50 rounded-xl flex items-center justify-center mb-6">
        {feature.icon === "quality" && (
          <CheckCircle className="w-7 h-7 text-amber-600" />
        )}
        {feature.icon === "time" && (
          <Clock className="w-7 h-7 text-amber-600" />
        )}
        {feature.icon === "experience" && (
          <Users className="w-7 h-7 text-amber-600" />
        )}
        {feature.icon === "innovation" && (
          <Award className="w-7 h-7 text-amber-600" />
        )}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
      <p className="text-gray-600 leading-relaxed text-[15px]">
        {feature.description}
      </p>
    </div>
  </motion.div>
);
