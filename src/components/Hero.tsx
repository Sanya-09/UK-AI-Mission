import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "@/assets/hero-uttarakhand.jpg";

export const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Uttarakhand Himalayas with AI overlay"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(var(--hero-overlay))/.85] via-[hsl(var(--hero-overlay))/.7] to-background"></div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-gradient-start/20 via-gradient-mid/10 to-gradient-end/20 animate-gradient"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 glass-card px-4 py-2 rounded-full">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="text-sm font-medium">AI Mission Hackathon 2025</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="gradient-text">Empowering Uttarakhand</span>
            <br />
            <span className="text-foreground">Tourism with Intelligence</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Experience personalized Himalayan journeys powered by AI. Real-time
            crowd predictions, visual recognition for safety, and smart insights
            for unforgettable adventures.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Button
              size="lg"
              onClick={() => scrollToSection("demo")}
              className="w-full sm:w-auto bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white hover:opacity-90 transition-opacity text-base sm:text-lg px-8 py-6"
            >
              Explore Demo
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("features")}
              className="w-full sm:w-auto border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors text-base sm:text-lg px-8 py-6"
            >
              <Play className="mr-2 w-5 h-5" />
              See How It Works
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 pt-8 sm:pt-12">
            {[
              { value: "50K+", label: "Tourists Served" },
              { value: "95%", label: "Accuracy Rate" },
              { value: "24/7", label: "AI Assistance" },
              { value: "12+", label: "Languages" },
            ].map((stat, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-6 rounded-xl hover:scale-105 transition-transform"
              >
                <div className="text-2xl sm:text-3xl font-bold gradient-text">
                  {stat.value}
                </div>
                <div className="text-sm sm:text-base text-muted-foreground mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};
