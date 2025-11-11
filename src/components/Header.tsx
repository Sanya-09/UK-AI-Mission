import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Globe, Wifi, WifiOff, Car } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useLanguage } from "@/contexts/LanguageContext";

export const Header = () => {
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const { language, setLanguage, t } = useLanguage();
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);
    
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    const timer = setInterval(() => setCurrentTime(new Date()), 1000);

    // Apply theme
    document.documentElement.classList.toggle("dark", theme === "dark");

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
      clearInterval(timer);
    };
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end flex items-center justify-center">
              <span className="text-white font-bold text-xl">ST</span>
            </div>
            <span className="text-xl font-bold gradient-text hidden sm:inline">
              SmartTour AI
            </span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            <Button
              variant="ghost"
              onClick={() => scrollToSection("demo")}
              className="text-sm lg:text-base"
            >
              {t("nav.demo")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("features")}
              className="text-sm lg:text-base"
            >
              {t("nav.features")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("impact")}
              className="text-sm lg:text-base"
            >
              {t("nav.impact")}
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("rental")}
              className="text-sm lg:text-base"
            >
              <Car className="w-4 h-4 mr-2" />
              {t("nav.rentals")}
            </Button>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            {/* Time & Status */}
            <div className="hidden lg:flex items-center space-x-3 text-sm">
              <span className="text-muted-foreground">
                {currentTime.toLocaleTimeString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
              <div className="flex items-center space-x-1">
                {isOnline ? (
                  <Wifi className="w-4 h-4 text-primary" />
                ) : (
                  <WifiOff className="w-4 h-4 text-destructive" />
                )}
                <span className={isOnline ? "text-primary" : "text-destructive"}>
                  {isOnline ? t("status.online") : t("status.offline")}
                </span>
              </div>
            </div>

            {/* Language Selector */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[100px] sm:w-[120px] border-border">
                <Globe className="w-4 h-4 mr-2" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en">English</SelectItem>
                <SelectItem value="hi">हिन्दी</SelectItem>
                <SelectItem value="gu">ગુજરાતી</SelectItem>
                <SelectItem value="ku">कुमाऊँनी</SelectItem>
                <SelectItem value="ga">गढ़वाली</SelectItem>
              </SelectContent>
            </Select>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={toggleTheme}
              className="border-border"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};
