import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { Dashboard } from "@/components/Dashboard";
import { Impact } from "@/components/Impact";
import { HowItWorks } from "@/components/HowItWorks";
import { Accommodation } from "@/components/Accommodation";
import { PopularPlaces } from "@/components/PopularPlaces";
import { Rental } from "@/components/Rental";
import { Emergency } from "@/components/Emergency";
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
      <Accommodation />
      <PopularPlaces />
      <Rental />
      <Emergency />
      <Footer />
    </div>
  );
};

export default Index;
