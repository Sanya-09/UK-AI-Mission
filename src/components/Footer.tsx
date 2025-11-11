import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export const Footer = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you soon.");
    setEmail("");
    setName("");
    setMessage("");
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* About Section */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-gradient-start via-gradient-mid to-gradient-end flex items-center justify-center">
                <span className="text-white font-bold text-xl">ST</span>
              </div>
              <span className="text-xl font-bold gradient-text">SmartTour AI</span>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering Uttarakhand tourism with AI-driven intelligence. Personalized journeys,
              crowd predictions, and smart insights for unforgettable Himalayan adventures.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@smarttourai.gov.in</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+91 1800 180 1234</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Dehradun, Uttarakhand</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {["Features", "Dashboard", "Impact", "Rentals", "Privacy Policy", "Terms of Service"].map(
                (link, index) => (
                  <li key={index}>
                    <button className="text-muted-foreground hover:text-primary transition-colors">
                      {link}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Form */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="bg-background border-border"
              />
              <Input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-background border-border"
              />
              <Textarea
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                className="bg-background border-border resize-none"
                rows={3}
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-gradient-start via-gradient-mid to-gradient-end text-white hover:opacity-90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              Powered by AI Mission Uttarakhand | SmartTour AI 2025
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {[
                { icon: Github, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-9 h-9 rounded-lg bg-secondary hover:bg-gradient-to-br hover:from-gradient-start hover:to-gradient-mid flex items-center justify-center transition-all hover:scale-110 group"
                  >
                    <Icon className="w-4 h-4 text-muted-foreground group-hover:text-white transition-colors" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
