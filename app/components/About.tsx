"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { BarChart, Briefcase, ShieldCheck, Users } from "lucide-react";
import bgWaves from "@/public/waves_new.jpg";

const About = () => {
  return (
    <section className="container mx-auto px-4 py-20 relative z-10">
      <Image
        src={bgWaves}
        alt="خلفية"
        fill
        className="object-center  -z-10"
        priority
        quality={75}
      />
      <div className="flex flex-col md:flex-row gap-12 items-center">
        {/* Text Content - Left Side */}
        <div className="md:w-1/2 md:pr-8 order-1 md:order-1">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-amber-900 mb-6">
              عن زين التنموية
            </h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              شركة زين التنموية هي شركة رائدة في مجال المقاولات والتطوير في
              المملكة العربية السعودية. نحن نفخر بتقديم خدمات عالية الجودة وحلول
              مبتكرة لعملائنا، مع التركيز على الاستدامة والتميز في كل مشروع.
              بفضل فريقنا المتخصص وخبرتنا الواسعة، نلتزم بتطبيق أحدث التقنيات
              والمواد المستدامة لضمان تحقيق نتائج فعالة ومستدامة. كما نحرص على
              بناء شراكات قوية مع عملائنا وموردينا لضمان تنفيذ المشاريع بكفاءة
              عالية، مما يسهم في دعم رؤية المملكة 2030 وتعزيز التنمية العمرانية
              والاقتصادية.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center gap-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <Briefcase className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-800">
                    خبرة واسعة
                  </h3>
                  <p className="text-gray-600">
                    أكثر من 15 عاماً من الخبرة في مجال المقاولات والتطوير
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <Users className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-800">
                    فريق محترف
                  </h3>
                  <p className="text-gray-600">
                    نخبة من المهندسين والفنيين المؤهلين لتنفيذ مشاريعكم
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <BarChart className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-800">
                    مشاريع متنوعة
                  </h3>
                  <p className="text-gray-600">
                    تنفيذ مئات المشاريع السكنية والتجارية بنجاح
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-gold-100 p-3 rounded-lg">
                  <ShieldCheck className="w-8 h-8 text-amber-600" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-amber-800">
                    جودة عالية
                  </h3>
                  <p className="text-gray-600">
                    نلتزم بأعلى معايير الجودة في جميع مشاريعنا
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Image with Animated Box - Right Side */}
        <div className="md:w-fit relative order-2 md:order-2">
          <div className="md:w-full relative order-2 md:order-2">
            {/* Main Image Container */}
            <div className="relative z-10 rounded-xl overflow-hidden shadow-xl border-8 border-white">
              <Image
                src="https://img.freepik.com/free-photo/about-as-service-contact-information-concept_53876-138509.jpg"
                alt="عن زين التنموية"
                width={600}
                height={800}
                className="object-cover w-full h-full"
              />
            </div>

            {/* 3D Effect Box */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full z-0"
              initial={{ opacity: 0.8, rotate: 12, x: -16, y: -16 }}
              whileHover={{ rotate: 15, x: -20, y: -20 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="w-full h-full bg-amber-600 rounded-xl shadow-lg" />
            </motion.div>

            {/* Secondary Box */}
            <motion.div
              className="absolute top-0 left-0 w-full h-full z-[-1]"
              initial={{ opacity: 0.4, rotate: 6, x: -8, y: -8 }}
              whileHover={{ rotate: 10, x: -12, y: -12 }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div className="w-full h-full bg-amber-400 rounded-xl" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
