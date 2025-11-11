import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Dashboard } from "@/components/Dashboard";
import { Impact } from "@/components/Impact";
import { HowItWorks } from "@/components/HowItWorks";
import { Rental } from "@/components/Rental";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Dashboard />
      <Impact />
      <HowItWorks />
      <Rental />
      <Footer />
    </div>
  );
};

export default Index;
