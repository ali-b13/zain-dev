import { servicesData } from "@/app/lib/data";
import {
  statsData,
  featuresData,
  processData,
} from "@/app/components/servicePage/constant";
import { BackNavigation } from "../../components/servicePage/BackNavigation";
import { HeroSection } from "../../components/servicePage/HeroSection";
import { ServiceFeatures } from "../../components/servicePage/ServiceFeatures";
import { ProcessSection } from "../../components/servicePage/ProcessSection";
import { CTASection } from "../../components/servicePage/CtaSection";
import { SubServices } from "@/app/components/servicePage/SubService";
import { BackgroundShapes } from "@/app/components/servicePage/BackgroundShapes";

export default async function ServicePage({ params }: { params: Promise<{ slug: number }> }) {
  const slug=await params.then(res=>res.slug)
  const service = servicesData.find((s) => s.id == slug);

  if (!service)
    return <div className="text-center py-20 text-xl">الخدمة غير موجودة</div>;

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      <BackgroundShapes />
      <BackNavigation title="جميع الخدمات " link="/" />

      <HeroSection service={service} stats={statsData} />

      <SubServices
        subServices={service.subServices || []}
        serviceTitle={service.title}
      />

      <ServiceFeatures features={featuresData} />
      <ProcessSection process={processData} />
      <CTASection />
    </div>
  );
}
