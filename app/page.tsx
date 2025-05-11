import About from "./components/About";
import { IntroSection } from "./components/IntroSection";
import { ServicesSection } from "./components/services/Section";

export default function Home() {
  return (
    <>
      <IntroSection />
      <ServicesSection />
      <About />
    </>
  );
}
