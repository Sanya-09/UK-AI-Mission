import { Users, Building2, Leaf, Shield } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Impact = () => {
  const { t } = useLanguage();

  const impacts = [
    {
      icon: Users,
      titleKey: "impact.1.title",
      descKey: "impact.1.desc",
      color: "from-gradient-start to-gradient-mid",
    },
    {
      icon: Shield,
      titleKey: "impact.2.title",
      descKey: "impact.2.desc",
      color: "from-gradient-mid to-gradient-end",
    },
    {
      icon: Building2,
      titleKey: "impact.3.title",
      descKey: "impact.3.desc",
      color: "from-gradient-end to-accent",
    },
    {
      icon: Leaf,
      titleKey: "impact.4.title",
      descKey: "impact.4.desc",
      color: "from-accent to-gradient-start",
    },
  ];

  return (
    <section id="impact" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            {t("impact.title")}
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("impact.subtitle")}
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="group glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${impact.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold group-hover:gradient-text transition-colors">
                    {t(impact.titleKey)}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {t(impact.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
