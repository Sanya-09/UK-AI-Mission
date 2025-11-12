import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mountain, Waves, TreePine, MapPin, ArrowRight, X } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import kedarnathImg from "@/assets/places/kedarnath.jpg";
import badrinathImg from "@/assets/places/badrinath.jpg";
import rishikeshImg from "@/assets/places/rishikesh.jpg";
import nainitalImg from "@/assets/places/nainital.jpg";
import mussoorieImg from "@/assets/places/mussoorie.jpg";
import haridwarImg from "@/assets/places/haridwar.jpg";

const places = [
  {
    titleKey: "places.kedarnath",
    descKey: "places.kedarnath.desc",
    icon: Mountain,
    category: "Pilgrimage",
    color: "from-gradient-start to-gradient-mid",
    image: kedarnathImg,
  },
  {
    titleKey: "places.badrinath",
    descKey: "places.badrinath.desc",
    icon: Mountain,
    category: "Pilgrimage",
    color: "from-gradient-mid to-gradient-end",
    image: badrinathImg,
  },
  {
    titleKey: "places.rishikesh",
    descKey: "places.rishikesh.desc",
    icon: Waves,
    category: "Adventure",
    color: "from-gradient-end to-accent",
    image: rishikeshImg,
  },
  {
    titleKey: "places.nainital",
    descKey: "places.nainital.desc",
    icon: Waves,
    category: "Hill Station",
    color: "from-accent to-gradient-start",
    image: nainitalImg,
  },
  {
    titleKey: "places.mussoorie",
    descKey: "places.mussoorie.desc",
    icon: TreePine,
    category: "Hill Station",
    color: "from-gradient-start to-gradient-end",
    image: mussoorieImg,
  },
  {
    titleKey: "places.haridwar",
    descKey: "places.haridwar.desc",
    icon: Waves,
    category: "Pilgrimage",
    color: "from-gradient-mid to-accent",
    image: haridwarImg,
  },
];

export const PopularPlaces = () => {
  const { t } = useLanguage();
  const [showAllPlaces, setShowAllPlaces] = useState(false);

  return (
    <>
      <Dialog open={showAllPlaces} onOpenChange={setShowAllPlaces}>
        <DialogContent className="max-w-6xl max-h-[90vh] overflow-y-auto">
          <button
            onClick={() => setShowAllPlaces(false)}
            className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
          >
            <X className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </button>
          <div className="pt-8">
            <h2 className="text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">{t("places.title")}</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {places.map((place, index) => {
                const Icon = place.icon;
                return (
                  <Card
                    key={index}
                    className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={place.image}
                        alt={t(place.titleKey)}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                        <Icon className="w-6 h-6 text-white" />
                        <span className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                          {place.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                        {t(place.titleKey)}
                      </h3>
                      <p className="text-sm text-muted-foreground flex items-start">
                        <MapPin className="w-4 h-4 mr-1 mt-0.5 flex-shrink-0" />
                        {t(place.descKey)}
                      </p>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>
        </DialogContent>
      </Dialog>
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

        {/* Places Grid - Show first 6 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto mb-8">
          {places.slice(0, 6).map((place, index) => {
            const Icon = place.icon;
            return (
              <Card
                key={index}
                className="glass-card overflow-hidden hover:scale-105 transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={place.image}
                    alt={t(place.titleKey)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center space-x-2">
                    <Icon className="w-6 h-6 text-white" />
                    <span className="text-xs px-2 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white">
                      {place.category}
                    </span>
                  </div>
                </div>
                <div className="p-4 space-y-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">
                    {t(place.titleKey)}
                  </h3>
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
          <Button 
            size="lg" 
            className="group"
            onClick={() => setShowAllPlaces(true)}
          >
            {t("places.viewall")}
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
    </>
  );
};
