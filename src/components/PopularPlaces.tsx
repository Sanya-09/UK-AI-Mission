import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, Waves, TreePine, MapPin, ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const places = [
  {
    titleKey: "places.kedarnath",
    descKey: "places.kedarnath.desc",
    icon: Mountain,
    category: "Pilgrimage",
    color: "from-gradient-start to-gradient-mid",
  },
  {
    titleKey: "places.badrinath",
    descKey: "places.badrinath.desc",
    icon: Mountain,
    category: "Pilgrimage",
    color: "from-gradient-mid to-gradient-end",
  },
  {
    titleKey: "places.rishikesh",
    descKey: "places.rishikesh.desc",
    icon: Waves,
    category: "Adventure",
    color: "from-gradient-end to-accent",
  },
  {
    titleKey: "places.nainital",
    descKey: "places.nainital.desc",
    icon: Waves,
    category: "Hill Station",
    color: "from-accent to-gradient-start",
  },
  {
    titleKey: "places.mussoorie",
    descKey: "places.mussoorie.desc",
    icon: TreePine,
    category: "Hill Station",
    color: "from-gradient-start to-gradient-end",
  },
  {
    titleKey: "places.haridwar",
    descKey: "places.haridwar.desc",
    icon: Waves,
    category: "Pilgrimage",
    color: "from-gradient-mid to-accent",
  },
];

export const PopularPlaces = () => {
  const { t } = useLanguage();

  return (
    <section id="places" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("places.title")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("places.subtitle")}
          </p>
        </div>

        {/* Places Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-8">
          {places.map((place, index) => {
            const Icon = place.icon;
            return (
              <Card
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div
                  className={`w-full h-32 rounded-xl bg-gradient-to-br ${place.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-12 h-12 text-white" />
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {t(place.titleKey)}
                    </h3>
                    <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                      {place.category}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground flex items-start">
                    <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                    {t(place.descKey)}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button size="lg" className="group">
            {t("places.viewall")}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
