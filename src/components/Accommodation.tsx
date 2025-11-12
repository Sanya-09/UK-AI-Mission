import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Hotel, Home, Building2, MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const accommodations = [
  {
    titleKey: "accommodation.hotels",
    descKey: "accommodation.hotels.desc",
    icon: Hotel,
    providers: [
      { name: "The Pavilion Rishikesh", location: "Rishikesh", rating: "4.8/5", price: "₹3,500/night" },
      { name: "JW Marriott Mussoorie", location: "Mussoorie", rating: "4.9/5", price: "₹8,500/night" },
    ],
    color: "from-gradient-start to-gradient-mid",
  },
  {
    titleKey: "accommodation.guesthouses",
    descKey: "accommodation.guesthouses.desc",
    icon: Home,
    providers: [
      { name: "Alpine Guest House", location: "Nainital", rating: "4.5/5", price: "₹1,200/night" },
      { name: "Mountain View Lodge", location: "Auli", rating: "4.6/5", price: "₹1,800/night" },
    ],
    color: "from-gradient-mid to-gradient-end",
  },
  {
    titleKey: "accommodation.homestays",
    descKey: "accommodation.homestays.desc",
    icon: Home,
    providers: [
      { name: "Pahadi Homestay", location: "Kanatal", rating: "4.7/5", price: "₹900/night" },
      { name: "Village Experience", location: "Munsiyari", rating: "4.6/5", price: "₹800/night" },
    ],
    color: "from-gradient-end to-accent",
  },
  {
    titleKey: "accommodation.booking",
    descKey: "accommodation.booking.desc",
    icon: Building2,
    providers: [
      { name: "Booking.com", location: "Compare 500+ properties", rating: "Trusted", price: "Best deals" },
      { name: "MakeMyTrip", location: "Local & International", rating: "Verified", price: "Discounts available" },
    ],
    color: "from-accent to-gradient-start",
  },
];

export const Accommodation = () => {
  const { t } = useLanguage();

  return (
    <section id="accommodation" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("accommodation.title")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("accommodation.subtitle")}
          </p>
        </div>

        {/* Accommodation Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {accommodations.map((accommodation, index) => {
            const Icon = accommodation.icon;
            return (
              <Card
                key={index}
                className="glass-card p-6 sm:p-8 hover:scale-105 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${accommodation.color} flex items-center justify-center`}
                  >
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold">{t(accommodation.titleKey)}</h3>
                    <p className="text-xs text-muted-foreground">{t(accommodation.descKey)}</p>
                  </div>
                </div>

                {/* Providers */}
                <div className="space-y-4">
                  {accommodation.providers.map((provider, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-semibold">{provider.name}</h4>
                          <div className="flex items-center text-sm text-muted-foreground mt-1">
                            <MapPin className="w-4 h-4 mr-1" />
                            {provider.location}
                          </div>
                        </div>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          <ExternalLink className="w-4 h-4 mr-1" />
                          {t("accommodation.view")}
                        </Button>
                      </div>
                      <div className="flex items-center justify-between text-sm mt-2">
                        <span className="text-muted-foreground">★ {provider.rating}</span>
                        <span className="font-medium text-primary">{provider.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
