import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import IsThisYou from "@/components/IsThisYou";
import Problem from "@/components/Problem";
import Framework from "@/components/Framework";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import LatestBlogs from "@/components/LatestBlogs";
import CtaForm from "@/components/CtaForm";
import Footer from "@/components/Footer";
import AnimationsInit from "@/components/AnimationsInit";
import ScrollProgress from "@/components/ScrollProgress";

export default function Home() {
  return (
    <main>
      <AnimationsInit />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <IsThisYou />
      <Problem />
      <Framework />
      <Story />
      <Testimonials />
      <LatestBlogs />
      <CtaForm />
      <Footer />
    </main>
  );
}