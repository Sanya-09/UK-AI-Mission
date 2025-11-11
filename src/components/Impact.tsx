import { Users, Building2, Leaf, Shield } from "lucide-react";

const impacts = [
  {
    icon: Users,
    title: "Tourists",
    benefits: [
      "Personalized journeys tailored to preferences",
      "Real-time safety alerts and hazard detection",
      "Multilingual support in local languages",
      "Optimized travel times avoiding crowds",
    ],
    color: "from-gradient-start to-gradient-mid",
  },
  {
    icon: Shield,
    title: "Government Authorities",
    benefits: [
      "Data-driven policy making and planning",
      "Resource optimization at pilgrim sites",
      "Emergency response coordination",
      "Infrastructure improvement insights",
    ],
    color: "from-gradient-mid to-gradient-end",
  },
  {
    icon: Building2,
    title: "Local Businesses",
    benefits: [
      "Increased visibility to tourists",
      "Demand forecasting for inventory",
      "Customer sentiment analysis",
      "Marketing through AI recommendations",
    ],
    color: "from-gradient-end to-accent",
  },
  {
    icon: Leaf,
    title: "Environment",
    benefits: [
      "Reduced carbon footprint via route optimization",
      "Protection of fragile ecosystems",
      "Waste management through crowd control",
      "Sustainable tourism practices",
    ],
    color: "from-accent to-gradient-start",
  },
];

export const Impact = () => {
  return (
    <section id="impact" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            Creating <span className="gradient-text">Lasting Impact</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Transforming tourism for everyone in the Uttarakhand ecosystem
          </p>
        </div>

        {/* Impact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {impacts.map((impact, index) => {
            const Icon = impact.icon;
            return (
              <div
                key={index}
                className="group glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center space-x-4 mb-6">
                  <div
                    className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${impact.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-semibold group-hover:gradient-text transition-colors">
                    {impact.title}
                  </h3>
                </div>

                {/* Benefits List */}
                <ul className="space-y-3">
                  {impact.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground leading-relaxed">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
