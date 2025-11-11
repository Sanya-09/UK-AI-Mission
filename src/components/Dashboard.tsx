import { Card } from "@/components/ui/card";
import { BarChart, LineChart, Activity, Users, MapPin, TrendingUp } from "lucide-react";

export const Dashboard = () => {
  return (
    <section id="demo" className="py-16 sm:py-24 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Live <span className="gradient-text">Intelligence Dashboard</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Real-time analytics and insights for smarter tourism management
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="max-w-7xl mx-auto">
          {/* Top Stats Row */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {[
              { icon: Users, label: "Active Tourists", value: "12,453", change: "+12%" },
              { icon: MapPin, label: "Popular Sites", value: "8", change: "Kedarnath" },
              { icon: Activity, label: "Avg. Sentiment", value: "92%", change: "Positive" },
              { icon: TrendingUp, label: "Predictions", value: "48hr", change: "Accurate" },
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <Card
                  key={index}
                  className="p-4 sm:p-6 glass-card hover:scale-105 transition-transform"
                >
                  <div className="flex items-start justify-between mb-3">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    <span className="text-xs sm:text-sm text-primary font-medium">
                      {stat.change}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text">
                    {stat.value}
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Main Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Tourist Density Heatmap */}
            <Card className="p-6 sm:p-8 glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold">Tourist Density Heatmap</h3>
                <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="space-y-4">
                {[
                  { location: "Kedarnath Temple", density: 85, color: "bg-destructive" },
                  { location: "Badrinath Temple", density: 72, color: "bg-accent" },
                  { location: "Valley of Flowers", density: 45, color: "bg-primary" },
                  { location: "Rishikesh Ghat", density: 60, color: "bg-gradient-mid" },
                ].map((site, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{site.location}</span>
                      <span className="text-muted-foreground">{site.density}% capacity</span>
                    </div>
                    <div className="w-full bg-secondary rounded-full h-2.5 overflow-hidden">
                      <div
                        className={`${site.color} h-full rounded-full transition-all duration-500`}
                        style={{ width: `${site.density}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Crowd Prediction Chart */}
            <Card className="p-6 sm:p-8 glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold">48hr Crowd Prediction</h3>
                <LineChart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="h-64 flex items-end justify-between space-x-2">
                {[65, 72, 85, 78, 90, 95, 88, 70, 55, 48, 40, 35].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 bg-gradient-to-t from-gradient-start via-gradient-mid to-gradient-end rounded-t-lg opacity-80 hover:opacity-100 transition-opacity"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
              <div className="flex justify-between mt-4 text-xs sm:text-sm text-muted-foreground">
                <span>Today</span>
                <span>Tomorrow</span>
                <span>Day 3</span>
              </div>
            </Card>

            {/* Sentiment Analysis */}
            <Card className="p-6 sm:p-8 glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold">Sentiment Analysis</h3>
                <Activity className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="flex items-center justify-center h-48">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="currentColor"
                      strokeWidth="16"
                      fill="transparent"
                      className="text-secondary"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="url(#gradient)"
                      strokeWidth="16"
                      fill="transparent"
                      strokeDasharray="502"
                      strokeDashoffset="50"
                      className="transition-all duration-1000"
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="hsl(var(--gradient-start))" />
                        <stop offset="50%" stopColor="hsl(var(--gradient-mid))" />
                        <stop offset="100%" stopColor="hsl(var(--gradient-end))" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-4xl font-bold gradient-text">92%</span>
                    <span className="text-sm text-muted-foreground mt-1">Positive</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Recent Alerts */}
            <Card className="p-6 sm:p-8 glass-card">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl sm:text-2xl font-semibold">Recent Alerts</h3>
                <BarChart className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </div>
              <div className="space-y-4">
                {[
                  { type: "info", message: "Weather forecast: Clear skies expected", time: "2m ago" },
                  { type: "warning", message: "High footfall predicted at Badrinath", time: "15m ago" },
                  { type: "success", message: "New heritage site added to platform", time: "1h ago" },
                  { type: "info", message: "Multilingual support updated", time: "3h ago" },
                ].map((alert, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors"
                  >
                    <div
                      className={`w-2 h-2 rounded-full mt-2 ${
                        alert.type === "warning"
                          ? "bg-accent"
                          : alert.type === "success"
                          ? "bg-primary"
                          : "bg-muted-foreground"
                      }`}
                    ></div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium">{alert.message}</p>
                      <p className="text-xs text-muted-foreground mt-1">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
