import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Navigation } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const locations = [
  { name: "Kedarnath", lat: 30.7346, lng: 79.0669, category: "Pilgrimage" },
  { name: "Badrinath", lat: 30.7433, lng: 79.4938, category: "Pilgrimage" },
  { name: "Rishikesh", lat: 30.0869, lng: 78.2676, category: "Adventure" },
  { name: "Nainital", lat: 29.3919, lng: 79.4542, category: "Hill Station" },
  { name: "Mussoorie", lat: 30.4598, lng: 78.0644, category: "Hill Station" },
  { name: "Haridwar", lat: 29.9457, lng: 78.1642, category: "Pilgrimage" },
];

export const Maps = () => {
  const { t } = useLanguage();
  const [search, setSearch] = useState("");
  const [selectedLocation, setSelectedLocation] = useState<typeof locations[0] | null>(null);

  const filteredLocations = locations.filter((loc) =>
    loc.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section id="maps" className="py-16 sm:py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("maps.title")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("maps.subtitle")}
          </p>
        </div>

        {/* Map Container */}
        <div className="max-w-6xl mx-auto">
          <Card className="glass-card overflow-hidden">
            {/* Search Bar */}
            <div className="p-4 border-b border-border bg-card/50">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder={t("maps.search")}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className="pl-10 bg-background"
                />
              </div>
            </div>

            {/* Map Display Area */}
            <div className="grid md:grid-cols-3 gap-0">
              {/* Map Visualization */}
              <div className="md:col-span-2 h-[500px] bg-gradient-to-br from-gradient-start/10 via-gradient-mid/10 to-gradient-end/10 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <Navigation className="w-16 h-16 mx-auto text-primary animate-pulse" />
                    <div className="space-y-2">
                      <p className="text-xl font-semibold">Interactive Map</p>
                      <p className="text-sm text-muted-foreground max-w-xs">
                        Full map integration with Google Maps API will display real-time locations and routes
                      </p>
                    </div>
                  </div>
                </div>
                
                {/* Location Markers Overlay */}
                <div className="absolute inset-0 pointer-events-none">
                  {filteredLocations.map((loc, idx) => (
                    <div
                      key={idx}
                      className="absolute"
                      style={{
                        left: `${20 + (idx % 3) * 30}%`,
                        top: `${20 + Math.floor(idx / 3) * 35}%`,
                      }}
                    >
                      <div className="pointer-events-auto cursor-pointer group">
                        <MapPin className="w-8 h-8 text-primary drop-shadow-lg group-hover:scale-125 transition-transform" />
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-card px-2 py-1 rounded text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border border-border">
                          {loc.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Location List */}
              <div className="bg-card/50 p-4 overflow-y-auto max-h-[500px]">
                <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide text-muted-foreground">
                  Popular Locations
                </h3>
                <div className="space-y-2">
                  {filteredLocations.map((loc, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedLocation(loc)}
                      className={`w-full text-left p-3 rounded-lg transition-all hover:bg-primary/10 border ${
                        selectedLocation?.name === loc.name
                          ? "border-primary bg-primary/5"
                          : "border-transparent"
                      }`}
                    >
                      <div className="flex items-start space-x-3">
                        <MapPin className="w-5 h-5 mt-0.5 text-primary flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <p className="font-medium text-sm">{loc.name}</p>
                          <p className="text-xs text-muted-foreground">{loc.category}</p>
                          <p className="text-xs text-muted-foreground mt-1">
                            {loc.lat.toFixed(4)}°N, {loc.lng.toFixed(4)}°E
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
