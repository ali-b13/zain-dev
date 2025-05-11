// components/IntroSection.tsx
"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  CheckCircle,
  Award,
  HardHat,
  ClipboardCheck,
  UserCheck,
} from "lucide-react";
import Image from "next/image";
import heroImage from "@/public/hero-img.jpg";
import bgWaves from "@/public/waves_new.jpg";
import { SectionHeader } from "@/app/components/services/Header";
import { StatCard } from "@/app/components/partials/StatCard";
import LinkButton from "./ui/Button";
import { JSX } from "react";

interface AchievmentsProps {
  icon: JSX.Element;
  title: string;
  value: string;
}
export function IntroSection() {
  const achievements: AchievmentsProps[] = [
    {
      icon: <Briefcase className="w-6 h-6" />,
      title: "سنوات خبرة",
      value: "15+",
    },
    { icon: <Award className="w-6 h-6" />, title: "مشروع منجز", value: "500+" },
    { icon: <Users className="w-6 h-6" />, title: "شريك نجاح", value: "50+" },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "رضا العملاء",
      value: "100%",
    },
  ];

  return (
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden relative">
          <BackgroundWaves />

          <div className="flex flex-col md:flex-row relative z-10">
            {/* Text Content */}
            <div className="md:w-1/2 p-8 md:p-12 lg:p-16">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <SectionHeader
                  title="زين التنموية"
                  subtitle="الشريك الأمثل لمشاريع المستقبل"
                  titleColor="text-amber-900"
                  subtitleColor="text-amber-700"
                />

                <p className="text-base text-gray-600 mb-8 leading-relaxed">
                  شركة رائدة في مجال المقاولات والتطوير في المملكة العربية
                  السعودية. نقدم التميز في خدمات المقاولات والصيانة والخدمات
                  المتخصصة
                </p>

                <AchievementsGrid achievements={achievements} />
                <CTAButtons />
              </motion.div>
            </div>

            <HeroImageSection />
          </div>

          <FeaturesRibbon />
        </div>
      </div>
    </section>
  );
}

const BackgroundWaves = () => (
  <Image
    src={bgWaves}
    alt="خلفية"
    fill
    className="object-center -z-10"
    priority
    quality={75}
  />
);

const AchievementsGrid = ({
  achievements,
}: {
  achievements: AchievmentsProps[];
}) => (
  <div className="grid grid-cols-2 gap-4 mb-8">
    {achievements.map((item, index: number) => (
      <StatCard key={index} stat={item} index={index} />
    ))}
  </div>
);

const CTAButtons = () => (
  <div className="flex flex-row gap-4">
    <LinkButton
      href="/projects"
      variant="solid"
      hasWave
      className="bg-amber-700 text-white hover:bg-amber-800"
    >
      مشاريعنا
    </LinkButton>

    <LinkButton
      href="/contact-us"
      variant="outline"
      className="border-amber-700 text-amber-700 hover:bg-amber-50/50"
    >
      تواصل معنا
    </LinkButton>
  </div>
);

const HeroImageSection = () => (
  <motion.div
    className="md:w-1/2 relative backdrop-blur-sm overflow-hidden"
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
  >
    <motion.div
      className="absolute right-1/2 w-2/3 bg-[#813d13]/90 min-h-[150%] -z-10 origin-bottom"
      initial={{ rotate: -15, skewX: 10, translateY: -50 }}
      whileHover={{ rotate: -5, skewX: 5, translateY: -40 }}
      transition={{ type: "spring", stiffness: 200, damping: 10 }}
    />

    <div className="absolute inset-0 pattern-dots pattern-amber-100 pattern-opacity-15 pattern-size-4" />
    <div className="h-full flex items-center justify-center p-8">
      <motion.div
        className="relative w-full h-64 md:h-96 shadow-xl rounded-lg overflow-hidden"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Image
          src={heroImage}
          alt="فريق زين التنموية"
          fill
          className="object-cover z-50"
        />
      </motion.div>
    </div>
  </motion.div>
);

const FeaturesRibbon = () => (
  <div className="grid md:grid-cols-3 gap-4 p-8 backdrop-blur-sm border-t border-amber-100 relative z-10">
    <FeatureRibbonItem
      icon={<HardHat className="w-8 h-8 text-amber-700" />}
      title="خبرة 15+ عام"
      description="تراكمت عبر آلاف المشاريع"
    />
    <FeatureRibbonItem
      icon={<ClipboardCheck className="w-8 h-8 text-amber-700" />}
      title="ضمان الجودة"
      description="معايير عالمية"
    />
    <FeatureRibbonItem
      icon={<UserCheck className="w-8 h-8 text-amber-700" />}
      title="فريق الخبراء"
      description="كادر مؤهل"
    />
  </div>
);

const FeatureRibbonItem = ({
  icon,
  title,
  description,
}: {
  icon: JSX.Element;
  title: string;
  description: string;
}) => (
  <div className="flex items-center gap-4 p-4 bg-white/50 rounded-xl backdrop-blur-sm">
    {icon}
    <div>
      <h3 className="font-bold text-amber-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  </div>
);
