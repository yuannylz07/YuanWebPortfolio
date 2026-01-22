import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TypeWriter } from '@/components/TypeWriter';
import profilePhoto from '@/assets/Yuanpic.png';

const roles = ['Web Developer', 'IT Student'];

const socialLinks = [
  { icon: Github, href: 'https://github.com/yuannylz07', label: 'GitHub' },
  { icon: Linkedin, href: 'https://www.linkedin.com/in/yuan-nylz-porcopio-853073298/', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:dreiroque07@gmail.com', label: 'Email' },
];

export function HeroSection() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-10 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-primary font-medium animate-fade-up">
                👋 Hello, I'm
              </p>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-tight animate-fade-up animation-delay-200">
                <span className="text-foreground">Yuan Nylz</span>
                <br />
                <span className="gradient-text">Porcopio</span>
              </h1>

              <div className="text-xl sm:text-2xl text-muted-foreground animate-fade-up animation-delay-400">
                <TypeWriter words={roles} className="text-primary font-semibold" />
              </div>

              <p className="text-lg text-muted-foreground max-w-lg animate-fade-up animation-delay-600">
                Passionate about building intuitive and responsive web applications.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 pt-4 animate-fade-up animation-delay-800">
                <Button variant="hero" onClick={() => handleNavClick('#projects')}>
                  View Projects
                </Button>
                <Button variant="heroOutline" onClick={() => handleNavClick('#contact')}>
                  Contact Me
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-6 animate-fade-up animation-delay-800">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-secondary/50 text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative animate-scale-in">
              {/* Hexagon frame with glow */}
              <div className="relative">
                <div className="absolute inset-0 hexagon-frame bg-primary/30 blur-xl animate-pulse-glow" style={{ transform: 'scale(1.1)' }} />
                <div className="relative hexagon-frame overflow-hidden w-64 h-72 sm:w-80 sm:h-[22rem] lg:w-96 lg:h-[26rem] bg-gradient-to-br from-primary/20 to-accent/20">
                  <img
                    src={profilePhoto}
                    alt="Yuan Nylz Porcopio"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative border */}
                <div className="absolute inset-0 hexagon-frame border-2 border-primary/50" style={{ transform: 'scale(1.05)' }} />
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -left-4 p-3 bg-card rounded-lg shadow-lg border border-border animate-float">
                <span className="text-2xl">⚛️</span>
              </div>
              <div className="absolute -bottom-4 -right-4 p-3 bg-card rounded-lg shadow-lg border border-border animate-float animation-delay-400">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block">
          <button
            onClick={() => handleNavClick('#about')}
            className="p-2 rounded-full bg-secondary/50 text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
}
