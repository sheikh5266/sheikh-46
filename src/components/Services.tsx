import { Button } from "@/components/ui/button";
import { 
  Globe, 
  Target, 
  Video, 
  Palette, 
  ArrowRight,
  CheckCircle,
  BarChart3,
  Smartphone
} from "lucide-react";
import { MarketingIcon, CreativeIcon } from "@/components/ui/flat-illustrations";

const Services = () => {
  const services = [
    {
      icon: Target,
      title: 'Meta Ad Management & Digital Marketing',
      description: 'Campaign setup, creatives for ads, targeting & optimization, reporting.',
      process: ['Audit', 'Strategy', 'Creative Production', 'Launch', 'Optimize'],
      deliverables: ['Ad creatives', 'Audience setups', 'Weekly reports'],
      accent: 'bg-red-500'
    },
    {
      icon: Globe,
      title: 'Web Development (Domains & Hosting)',
      description: 'Single-page sites, portfolio sites, business sites, domain registration, hosting setup.',
      process: ['Planning', 'Design', 'Development', 'Testing', 'Deploy'],
      deliverables: ['Live site', 'Domain setup', 'Hosting configuration', 'SEO & Analytics'],
      accent: 'bg-blue-500'
    },
    {
      icon: Video,
      title: 'Professional Video Editing & Motion Graphics',
      description: 'Social short-form edits, long-form edits, corporate videos, motion graphics.',
      process: ['Brief', 'Script/Storyboard', 'Edit', 'Motion Graphics', 'Final Cut'],
      deliverables: ['Final edits (MP4)', 'GIF previews', 'Source project'],
      accent: 'bg-purple-500'
    },
    {
      icon: Palette,
      title: '2D Flat Illustration & Storyboarding',
      description: 'Storyboard creation, script for short ads/videos, 2D flat illustrations.',
      process: ['Concept', 'Sketches', 'Digital Art', 'Revisions', 'Final Files'],
      deliverables: ['Storyboards (PDF)', 'Scripts (doc)', 'Illustrations (PNG, SVG)'],
      accent: 'bg-green-500'
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="section-padding bg-white relative overflow-hidden">
      {/* Animated Gradient Waves Background */}
      <div className="absolute inset-0 gradient-waves opacity-5"></div>
      
      {/* Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        <MarketingIcon className="absolute top-20 left-10 w-24 h-24 opacity-4 animate-float icon-pulse" style={{ animationDelay: '1s' }} />
        <CreativeIcon className="absolute bottom-32 right-16 w-20 h-20 opacity-5 animate-float icon-rotate" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/3 right-1/4 w-4 h-4 bg-mint/10 rounded-full animate-pulse icon-bounce" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/2 left-1/3 w-3 h-3 bg-mint-light/15 rounded-full animate-pulse icon-pulse" style={{ animationDelay: '4s' }} />
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-mint/10 rounded-full animate-float"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Enhanced Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal animate-fade-in-up">
            My <span className="gradient-text animate-gradient-shift">Services</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-mint rounded-full mx-auto animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            From strategy to final cut — I handle the full pipeline: concept, design, development and delivery.
          </p>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16 stagger-container">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="portfolio-card p-8 group animate-scale-in card-3d transition-all duration-300 hover:shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-6">
                {/* Enhanced Header */}
                <div className="flex items-start space-x-4">
                  <div className="bg-gradient-mint p-4 rounded-xl transition-all duration-300 group-hover:scale-110">
                    <service.icon className="h-6 w-6 text-white icon-pulse" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-charcoal group-hover:text-mint transition-colors duration-300 animate-fade-in-left">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mt-2 group-hover:text-gray-700 transition-colors duration-300">{service.description}</p>
                  </div>
                </div>

                {/* Enhanced Process Steps */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-charcoal animate-fade-in-up">Process:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.process.map((step, stepIndex) => (
                      <span 
                        key={stepIndex} 
                        className="skill-tag text-xs transition-all duration-300"
                        style={{ animationDelay: `${stepIndex * 0.1}s` }}
                      >
                        {stepIndex + 1}. {step}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Enhanced Deliverables */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-charcoal animate-fade-in-up">Deliverables:</h4>
                  <div className="space-y-2">
                    {service.deliverables.map((deliverable, delIndex) => (
                      <div key={delIndex} className="flex items-center space-x-2 animate-fade-in-right" style={{ animationDelay: `${delIndex * 0.1}s` }}>
                        <CheckCircle className="h-4 w-4 text-mint flex-shrink-0 icon-pulse animate-breathe" />
                        <span className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors duration-300">{deliverable}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Enhanced CTA */}
                <Button 
                  className="btn-hero w-full btn-ripple filter-btn"
                  onClick={() => scrollToSection('contact')}
                >
                  Request This Service
                  <ArrowRight className="ml-2 h-4 w-4 icon-bounce" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center stagger-container">
          <div className="space-y-2 animate-scale-in card-3d" style={{ animationDelay: '0.1s' }}>
            <div className="text-3xl font-bold text-charcoal animate-pulse-glow hover:animate-bounce-in transition-all duration-300 cursor-default icon-pulse">50+</div>
            <div className="text-sm text-gray-600">Projects Completed</div>
          </div>
          <div className="space-y-2 animate-scale-in card-3d" style={{ animationDelay: '0.2s' }}>
            <div className="text-3xl font-bold text-charcoal animate-pulse-glow hover:animate-bounce-in transition-all duration-300 cursor-default icon-pulse">30+</div>
            <div className="text-sm text-gray-600">Happy Clients</div>
          </div>
          <div className="space-y-2 animate-scale-in card-3d" style={{ animationDelay: '0.3s' }}>
            <div className="text-3xl font-bold text-charcoal animate-pulse-glow hover:animate-bounce-in transition-all duration-300 cursor-default icon-pulse">24h</div>
            <div className="text-sm text-gray-600">Avg Response Time</div>
          </div>
          <div className="space-y-2 animate-scale-in card-3d" style={{ animationDelay: '0.4s' }}>
            <div className="text-3xl font-bold text-charcoal animate-pulse-glow hover:animate-bounce-in transition-all duration-300 cursor-default icon-pulse">99%</div>
            <div className="text-sm text-gray-600">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;