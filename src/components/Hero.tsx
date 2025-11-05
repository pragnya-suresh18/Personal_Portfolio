import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto animate-fade-in-up pt-20">
          {/* Greeting */}
          <p className="text-lg text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Hello, I'm
          </p>
          
          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 hero-text animate-fade-in" style={{ animationDelay: '0.4s', lineHeight: '1.15', paddingBottom: '0.05em' }}>
            Pragnya Suresh
          </h1>
          <br></br>
          
          {/* Professional Titles */}
          <div className="flex flex-wrap justify-center gap-3 mb-8 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            {['Software & ML Engineer', 'Distributed Systems', 'AI Specialist'].map((title, index) => (
              <span key={index} className="tech-tag">
                {title}
              </span>
            ))}
          </div>
          
          {/* Description */}
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in" style={{ animationDelay: '0.8s' }}>
            I'm a Software and ML Engineer currently pursuing my MS in Computer Science at USC. I specialize in building systems that blend software engineering, distributed systems, and AI—whether that's scalable microservices, intelligent APIs, or end-to-end ML pipelines. My goal is to craft reliable, high-performing systems that make AI practical at scale.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button 
              size="lg" 
              className="glow-effect hover:scale-105 transition-transform"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="hover:scale-105 transition-transform"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Github className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Linkedin className="h-6 w-6" />
            </Button>
            <Button variant="ghost" size="icon" className="hover:text-primary hover:scale-110 transition-all">
              <Mail className="h-6 w-6" />
            </Button>
          </div>
          
          {/* Scroll Indicator */}
          <button 
            onClick={() => scrollToSection('about')}
            className="animate-bounce hover:text-primary transition-colors animate-fade-in"
            style={{ animationDelay: '1.4s' }}
          >
            <ArrowDown className="h-6 w-6 mx-auto" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;