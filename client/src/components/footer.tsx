import { Sprout, Facebook, Twitter, Instagram, Linkedin, Heart } from "lucide-react";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const quickLinks = [
    { label: "Home", section: "home" },
    { label: "Browse Crops", section: "crops" },
    { label: "For Farmers", section: "farmers" },
    { label: "For Exporters", section: "exporters" },
    { label: "Contact", section: "contact" }
  ];

  const supportLinks = [
    { label: "Help Center", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Documentation", href: "#" },
    { label: "FAQ", href: "#" }
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <footer className="bg-foreground text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4" data-testid="footer-logo">
              <Sprout className="text-primary text-2xl" />
              <span className="text-xl font-bold">Vel AgroConnect</span>
            </div>
            <p className="text-white/80 mb-4 leading-relaxed" data-testid="footer-description">
              Connecting farmers with global buyers for fair trade, sustainable agriculture, and profitable partnerships worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href} 
                  className="text-white/60 hover:text-primary transition-colors"
                  data-testid={`social-${social.label.toLowerCase()}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="quick-links-title">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button 
                    onClick={() => scrollToSection(link.section)}
                    className="text-white/80 hover:text-primary transition-colors text-left"
                    data-testid={`footer-link-${link.section}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4" data-testid="support-title">Support</h4>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href} 
                    className="text-white/80 hover:text-primary transition-colors"
                    data-testid={`support-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60" data-testid="footer-copyright">
            © 2025 Vel AgroConnect. All rights reserved. | Connecting agriculture with global opportunities.
          </p>
          <p className="text-muted-foreground text-sm mt-2" data-testid="text-footer-credit">
            Developed & Designed with <Heart className="inline w-4 h-4 text-red-500 mx-1" /> by{" "}
            <a 
              href="https://github.com/dharunmd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:text-primary/80 transition-colors"
              data-testid="link-footer-author"
            >
              Dharun M
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}