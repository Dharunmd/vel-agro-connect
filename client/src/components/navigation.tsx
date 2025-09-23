import { useState, useEffect } from "react";
import { Sprout, Menu, Globe, ChevronDown } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md shadow-sm z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2" data-testid="logo">
            <Sprout className="text-primary text-2xl" />
            <span className="text-xl font-bold text-foreground">Vel AgroConnect</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('crops')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-crops"
            >
              Crops
            </button>
            <button 
              onClick={() => scrollToSection('farmers')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-farmers"
            >
              Farmers
            </button>
            <button 
              onClick={() => scrollToSection('exporters')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-exporters"
            >
              Exporters
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-foreground hover:text-primary transition-colors"
              data-testid="nav-contact"
            >
              Contact
            </button>
          </div>
          
          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button 
              className="flex items-center space-x-1 px-3 py-1 rounded-md bg-muted hover:bg-accent transition-colors"
              data-testid="language-toggle"
            >
              <Globe className="w-4 h-4" />
              <span className="text-sm">EN</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            
            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-md text-foreground hover:bg-muted"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="mobile-menu-toggle"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-border" data-testid="mobile-menu">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
                data-testid="mobile-nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('crops')} 
                className="text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
                data-testid="mobile-nav-crops"
              >
                Crops
              </button>
              <button 
                onClick={() => scrollToSection('farmers')} 
                className="text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
                data-testid="mobile-nav-farmers"
              >
                Farmers
              </button>
              <button 
                onClick={() => scrollToSection('exporters')} 
                className="text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
                data-testid="mobile-nav-exporters"
              >
                Exporters
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="text-left px-4 py-2 text-foreground hover:bg-muted transition-colors"
                data-testid="mobile-nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
