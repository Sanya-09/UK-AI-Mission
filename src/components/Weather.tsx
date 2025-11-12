import { Card } from "@/components/ui/card";
import { Cloud, CloudRain, Sun, Wind, Droplets, Eye } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const weatherData = [
  {
    location: "Dehradun",
    temp: 24,
    condition: "Sunny",
    icon: Sun,
    humidity: 65,
    wind: 12,
    visibility: 10,
  },
  {
    location: "Mussoorie",
    temp: 18,
    condition: "Cloudy",
    icon: Cloud,
    humidity: 75,
    wind: 15,
    visibility: 8,
  },
  {
    location: "Nainital",
    temp: 16,
    condition: "Rainy",
    icon: CloudRain,
    humidity: 85,
    wind: 18,
    visibility: 6,
  },
  {
    location: "Rishikesh",
    temp: 26,
    condition: "Sunny",
    icon: Sun,
    humidity: 60,
    wind: 10,
    visibility: 12,
  },
];

const forecast = [
  { day: "Mon", temp: 22, icon: Sun },
  { day: "Tue", temp: 20, icon: Cloud },
  { day: "Wed", temp: 18, icon: CloudRain },
  { day: "Thu", temp: 21, icon: Cloud },
  { day: "Fri", temp: 24, icon: Sun },
  { day: "Sat", temp: 23, icon: Sun },
  { day: "Sun", temp: 19, icon: CloudRain },
];

export const Weather = () => {
  const { t } = useLanguage();

  return (
    <section id="weather" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">{t("weather.title")}</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            {t("weather.subtitle")}
          </p>
        </div>

        {/* Current Weather Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          {weatherData.map((weather, index) => {
            const Icon = weather.icon;
            return (
              <Card
                key={index}
                className="glass-card p-6 hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold">{weather.location}</h3>
                    <p className="text-sm text-muted-foreground">{weather.condition}</p>
                  </div>
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <div className="text-4xl font-bold mb-4">{weather.temp}°C</div>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Droplets className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{t("weather.humidity")}</span>
                    </div>
                    <span className="font-medium">{weather.humidity}%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Wind className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{t("weather.wind")}</span>
                    </div>
                    <span className="font-medium">{weather.wind} km/h</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Eye className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{t("weather.visibility")}</span>
                    </div>
                    <span className="font-medium">{weather.visibility} km</span>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* 7-Day Forecast */}
        <Card className="glass-card p-6 sm:p-8 max-w-4xl mx-auto">
          <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">
            7-Day Forecast - Dehradun
          </h3>
          <div className="grid grid-cols-7 gap-4">
            {forecast.map((day, index) => {
              const Icon = day.icon;
              return (
                <div
                  key={index}
                  className="text-center space-y-2 p-3 rounded-lg hover:bg-primary/5 transition-colors"
                >
                  <p className="text-sm font-medium text-muted-foreground">{day.day}</p>
                  <Icon className="w-8 h-8 mx-auto text-primary" />
                  <p className="text-lg font-bold">{day.temp}°</p>
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};
