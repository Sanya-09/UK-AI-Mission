import { Brain, Users, Shield, TrendingUp, MapPin } from "lucide-react";

const features = [
  {
    icon: MapPin,
    title: "Personalized Himalayan Journeys",
    description:
      "AI-curated itineraries based on preferences, weather, crowd levels, and accessibility. Discover hidden gems tailored just for you.",
    gradient: "from-gradient-start to-gradient-mid",
  },
  {
    icon: Users,
    title: "Tourist Flow & Pilgrim Prediction",
    description:
      "Real-time crowd forecasting at key sites like Kedarnath, Badrinath. Plan visits during optimal times for a peaceful experience.",
    gradient: "from-gradient-mid to-gradient-end",
  },
  {
    icon: Shield,
    title: "Visual Recognition for Safety",
    description:
      "Identify medicinal plants, detect wildlife, and flag hazards using computer vision. Travel safer in the Himalayas.",
    gradient: "from-gradient-end to-accent",
  },
  {
    icon: Brain,
    title: "Multilingual AI Chatbot",
    description:
      "Get instant support in Hindi, Kumaoni, Garhwali, and more. Cultural insights, local tips, and 24/7 assistance in your language.",
    gradient: "from-accent to-gradient-start",
  },
  {
    icon: TrendingUp,
    title: "Sentiment & Feedback Analysis",
    description:
      "Understand traveler emotions through reviews. Help improve services and highlight what matters most to visitors.",
    gradient: "from-gradient-start via-gradient-mid to-gradient-end",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4">
            <span className="gradient-text">Powered by AI</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground">
            Five intelligent services transforming Uttarakhand tourism
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass-card p-6 sm:p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl sm:text-2xl font-semibold mb-3 group-hover:gradient-text transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
