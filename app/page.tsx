// app/page.tsx
// Root page — assembles all section components

import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import StatsBanner from "@/app/components/StatsBanner";
import About from "@/app/components/About";
import Services from "@/app/components/Services";
import WhyUs from "@/app/components/WhyUs";
import Contact from "@/app/components/Contact";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <StatsBanner />
      <About />
      <Services />
      <WhyUs />
      <Contact />
      <Footer />
    </main>
  );
}
