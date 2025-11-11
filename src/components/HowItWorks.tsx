import { Database, Cpu, Lightbulb } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const HowItWorks = () => {
  const { t } = useLanguage();

  const steps = [
    {
      icon: Database,
      titleKey: "howitworks.step1",
      descKey: "howitworks.step1.desc",
      number: "01",
    },
    {
      icon: Cpu,
      titleKey: "howitworks.step2",
      descKey: "howitworks.step2.desc",
      number: "02",
    },
    {
      icon: Lightbulb,
      titleKey: "howitworks.step3",
      descKey: "howitworks.step3.desc",
      number: "03",
    },
  ];

  return (
    <section className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("howitworks.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("howitworks.subtitle")}
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative">
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-[60px] top-[120px] w-0.5 h-24 bg-gradient-to-b from-gradient-mid to-gradient-end"></div>
                )}

                {/* Step Card */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-12 sm:mb-16 group">
                  {/* Icon Circle */}
                  <div className="relative flex-shrink-0">
                    <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg">
                      <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                    </div>
                    {/* Number Badge */}
                    <div className="absolute -top-2 -right-2 w-10 h-10 rounded-full bg-background border-2 border-primary flex items-center justify-center">
                      <span className="text-sm font-bold gradient-text">{step.number}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="text-2xl sm:text-3xl font-semibold mb-3 group-hover:gradient-text transition-colors">
                      {t(step.titleKey)}
                    </h3>
                    <p className="text-muted-foreground text-base sm:text-lg leading-relaxed max-w-2xl">
                      {t(step.descKey)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tech Stack */}
        <div className="mt-16 sm:mt-20 text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-8">{t("howitworks.tech")}</h3>
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 lg:gap-12">
            {[
              { name: "Python", color: "text-[#3776AB]" },
              { name: "Flask", color: "text-foreground" },
              { name: "TensorFlow", color: "text-[#FF6F00]" },
              { name: "Hugging Face", color: "text-[#FFD21E]" },
              { name: "Next.js", color: "text-foreground" },
              { name: "AWS", color: "text-[#FF9900]" },
            ].map((tech, index) => (
              <div
                key={index}
                className="glass-card px-6 py-3 rounded-xl hover:scale-110 transition-transform"
              >
                <span className={`text-lg sm:text-xl font-semibold ${tech.color}`}>
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
