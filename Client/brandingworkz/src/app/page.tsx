"use client";

import AboutUs from "./components/Mainpage/AboutUs";
import Hero from "./components/Mainpage/Hero";
import Services from "./components/Mainpage/Services";
import { motion } from "framer-motion";
import Team from "./components/Mainpage/Team";
import TestimonialMarquee from "./components/Mainpage/Testinomials";

const FadeInSection = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }} // Fade-in from bottom
      whileInView={{ opacity: 1, y: 0 }} // Animate when in viewport
      transition={{ duration: 0.6, ease: "easeOut" }} // Smooth effect
      viewport={{ once: false, amount: 0.2 }} // Trigger when 20% visible
      className="w-full"
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  return (
    <div className=" min-h-screen">
      <FadeInSection>
        <Hero />
      </FadeInSection>

      <FadeInSection>
        <AboutUs />
      </FadeInSection>

      <FadeInSection>
        <Services />
      </FadeInSection>
      <FadeInSection>
        <Team />
      </FadeInSection>
      <FadeInSection>
        <TestimonialMarquee />
      </FadeInSection>
    </div>
  );
}
