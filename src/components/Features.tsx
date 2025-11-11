import { Brain, Users, Shield, TrendingUp, MapPin } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const Features = () => {
  const { t } = useLanguage();

  const features = [
    {
      icon: MapPin,
      titleKey: "features.1.title",
      descKey: "features.1.desc",
      gradient: "from-gradient-start to-gradient-mid",
    },
    {
      icon: Users,
      titleKey: "features.2.title",
      descKey: "features.2.desc",
      gradient: "from-gradient-mid to-gradient-end",
    },
    {
      icon: Shield,
      titleKey: "features.3.title",
      descKey: "features.3.desc",
      gradient: "from-gradient-end to-accent",
    },
    {
      icon: Brain,
      titleKey: "features.4.title",
      descKey: "features.4.desc",
      gradient: "from-accent to-gradient-start",
    },
    {
      icon: TrendingUp,
      titleKey: "features.5.title",
      descKey: "features.5.desc",
      gradient: "from-gradient-start via-gradient-mid to-gradient-end",
    },
  ];

  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("features.title")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("features.subtitle")}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:gradient-text transition-colors">
                  {t(feature.titleKey)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(feature.descKey)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
