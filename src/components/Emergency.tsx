import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Ambulance, AlertTriangle, Mountain } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const emergencyServices = [
  {
    titleKey: "emergency.medical",
    descKey: "emergency.medical.desc",
    numberKey: "emergency.medical.number",
    icon: Ambulance,
    color: "from-red-500 to-red-600",
  },
  {
    titleKey: "emergency.police",
    descKey: "emergency.police.desc",
    numberKey: "emergency.police.number",
    icon: Shield,
    color: "from-blue-500 to-blue-600",
  },
  {
    titleKey: "emergency.tourist",
    descKey: "emergency.tourist.desc",
    numberKey: "emergency.tourist.number",
    icon: Phone,
    color: "from-gradient-start to-gradient-mid",
  },
  {
    titleKey: "emergency.disaster",
    descKey: "emergency.disaster.desc",
    numberKey: "emergency.disaster.number",
    icon: AlertTriangle,
    color: "from-orange-500 to-orange-600",
  },
];

export const Emergency = () => {
  const { t } = useLanguage();

  const handleCall = (number: string) => {
    window.location.href = `tel:${number}`;
  };

  return (
    <section id="emergency" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("emergency.title")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("emergency.subtitle")}
          </p>
        </div>

        {/* Emergency Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {emergencyServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-4`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{t(service.titleKey)}</h3>
                <p className="text-xs text-muted-foreground mb-4">{t(service.descKey)}</p>
                <Button
                  size="lg"
                  className="w-full font-bold text-lg"
                  onClick={() => handleCall(t(service.numberKey))}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t(service.numberKey)}
                </Button>
              </Card>
            );
          })}
        </div>

        {/* High Altitude Care Info */}
        <Card className="glass-card p-6 sm:p-8 max-w-5xl mx-auto">
          <div className="flex items-center space-x-4 mb-6">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gradient-start to-gradient-mid flex items-center justify-center">
              <Mountain className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold">{t("emergency.altitude")}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="flex items-start space-x-3 p-4 rounded-lg bg-background/50"
              >
                <div className="w-2 h-2 rounded-full bg-primary mt-2"></div>
                <p className="text-sm text-muted-foreground">
                  {t(`emergency.altitude${num}`)}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
