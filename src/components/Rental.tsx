import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Car, Bike, Users, MapPin, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const rentalServices = [
  {
    titleKey: "rental.scooty",
    descKey: "rental.scooty.desc",
    icon: Bike,
    price: "₹400-600/day",
    providers: [
      { name: "Himalayan Wheels", location: "Rishikesh", contact: "+91 98765 43210" },
      { name: "Mountain Riders", location: "Dehradun", contact: "+91 98765 43211" },
    ],
    color: "from-gradient-start to-gradient-mid",
  },
  {
    titleKey: "rental.bike",
    descKey: "rental.bike.desc",
    icon: Bike,
    price: "₹800-1500/day",
    providers: [
      { name: "Royal Enfield Hub", location: "Haridwar", contact: "+91 98765 43212" },
      { name: "Adventure Bikes", location: "Nainital", contact: "+91 98765 43213" },
    ],
    color: "from-gradient-mid to-gradient-end",
  },
  {
    titleKey: "rental.car",
    descKey: "rental.car.desc",
    icon: Car,
    price: "₹2000-4000/day",
    providers: [
      { name: "Uttarakhand Cabs", location: "Dehradun", contact: "+91 98765 43214" },
      { name: "Hill Station Cars", location: "Mussoorie", contact: "+91 98765 43215" },
    ],
    color: "from-gradient-end to-accent",
  },
  {
    titleKey: "rental.taxi",
    descKey: "rental.taxi.desc",
    icon: Users,
    price: "₹15-20/km",
    providers: [
      { name: "Safe Travel Taxi", location: "Multiple Locations", contact: "+91 98765 43216" },
      { name: "Family Cab Service", location: "All Major Cities", contact: "+91 98765 43217" },
    ],
    color: "from-accent to-gradient-start",
  },
];

export const Rental = () => {
  const { t } = useLanguage();

  return (
    <section id="rental" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("rental.title")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("rental.subtitle")}
          </p>
        </div>

        {/* Rental Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {rentalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card
                key={index}
                className="glass-card p-6 sm:p-8 hover:scale-105 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}
                    >
                      <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-semibold">{t(service.titleKey)}</h3>
                      <p className="text-xs text-muted-foreground">{t(service.descKey)}</p>
                      <p className="text-primary font-medium mt-1">{service.price}</p>
                    </div>
                  </div>
                </div>

                {/* Providers */}
                <div className="space-y-4">
                  {service.providers.map((provider, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-colors"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="font-semibold">{provider.name}</h4>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-primary text-primary hover:bg-primary hover:text-white"
                        >
                          <Phone className="w-4 h-4 mr-1" />
                          Call
                        </Button>
                      </div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4 mr-1" />
                        {provider.location}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">{provider.contact}</p>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Info Box */}
        <div className="glass-card p-6 sm:p-8 rounded-2xl max-w-4xl mx-auto text-center">
          <h3 className="text-xl sm:text-2xl font-semibold mb-3">
            {t("rental.special")}
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">{t("rental.special1")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">{t("rental.special2")}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
              <span className="text-sm">{t("rental.special3")}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
