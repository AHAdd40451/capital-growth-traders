import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IsThisYou from "@/components/IsThisYou";
import Problem from "@/components/Problem";
import Framework from "@/components/Framework";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import CtaForm from "@/components/CtaForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <IsThisYou />
      <Problem />
      <Framework />
      <Story />
      <Testimonials />
      <CtaForm />
      <Footer />
    </main>
  );
}
