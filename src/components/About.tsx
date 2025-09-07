import { Button } from "@/components/ui/button";
import { Download, Award, Users, Clock } from "lucide-react";
import { DesignIcon, VideoIcon, CodeIcon } from "@/components/ui/flat-illustrations";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  
  const skills = [
    { name: 'Web Development', level: 95 },
    { name: 'Meta Ad Management', level: 90 },
    { name: 'Video Editing', level: 95 },
    { name: 'Graphic Design', level: 88 },
    { name: '2D Illustration', level: 85 },
    { name: 'Motion Graphics', level: 90 },
  ];

  const journey = [
    {
      title: 'Sales Lead',
      company: 'E-commerce Company',
      description: 'Led sales operations and gained valuable business insights',
      icon: Users
    },
    {
      title: 'Graphic Designer',
      company: 'E-commerce Company',
      description: 'Transitioned to creative role, developing visual design skills',
      icon: Award
    },
    {
      title: 'Professional Video Editor',
      company: 'Current Role',
      description: 'Specialized in professional video editing and motion graphics',
      icon: Clock
    }
  ];

  return (
    <section id="about" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Enhanced Background Illustrations */}
      <div className="absolute inset-0 pointer-events-none">
        <DesignIcon className="absolute top-16 right-10 w-20 h-20 opacity-8 animate-float animate-breathe" />
        <VideoIcon className="absolute bottom-20 left-10 w-16 h-16 opacity-10 animate-float animate-swing" style={{ animationDelay: '2s' }} />
        <CodeIcon className="absolute top-1/2 right-1/4 w-12 h-12 opacity-8 animate-float animate-pulse-glow" style={{ animationDelay: '1s' }} />
        
        {/* Additional Floating Elements */}
        <div className="absolute top-32 left-1/4 w-8 h-8 bg-mint/5 rounded-full animate-particle-drift"></div>
        <div className="absolute bottom-40 right-1/3 w-6 h-6 bg-primary/5 rounded-full animate-particle-drift" style={{ animationDelay: '4s' }}></div>
        <div className="absolute top-2/3 left-20 w-4 h-4 bg-mint-light/10 rounded-full animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 stagger-item animate-fade-in-left">
              <h2 className="text-4xl lg:text-5xl font-bold text-charcoal animate-gradient-shift">
                About <span className="gradient-text animate-breathe">Me</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-mint rounded-full animate-scale-in"></div>
            </div>

            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p className="stagger-item animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Currently studying at <strong className="text-primary animate-pulse">University of Dhaka</strong>, I bring a unique blend of business acumen and creative expertise to every project.
              </p>
              <p className="stagger-item animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                My journey began in sales leadership at an e-commerce company, where I developed a deep understanding of conversion-focused strategies. I then transitioned to graphic design within the same company, discovering my passion for visual storytelling.
              </p>
              <p className="stagger-item animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                Today, I work as a <strong className="text-primary animate-pulse">professional video editor</strong> while offering remote services in web development, digital marketing, and Meta ad management. This diverse background allows me to create solutions that not only look great but also drive real business results.
              </p>
            </div>

            <div className="stagger-item animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button 
                className="btn-hero transition-all duration-300"
                onClick={() => navigate('/resume')}
              >
                <Download className="mr-2 h-5 w-5 animate-float" />
                View Resume
              </Button>
            </div>
          </div>

          {/* Right Content - Skills & Journey */}
          <div className="space-y-12">
            {/* Skills */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-charcoal">Skills & Expertise</h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2 stagger-item animate-fade-in-right" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-charcoal animate-breathe">{skill.name}</span>
                      <span className="text-sm text-gray-500 animate-pulse">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-mint h-2 rounded-full transition-all duration-2000 ease-out animate-gradient-shift hover:animate-pulse-glow"
                        style={{ 
                          width: `${skill.level}%`,
                          animationDelay: `${index * 0.2}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Career Journey */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-charcoal">Career Journey</h3>
              <div className="space-y-4">
                {journey.map((item, index) => (
                  <div key={index} className="portfolio-card p-6 stagger-item animate-scale-in hover:animate-pulse-glow transition-all duration-300 group" style={{ animationDelay: `${index * 0.2}s` }}>
                    <div className="flex items-start space-x-4">
                      <div className="bg-gradient-mint p-3 rounded-lg animate-breathe group-hover:animate-bounce-in transition-all duration-300">
                        <item.icon className="h-5 w-5 text-white animate-float" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-charcoal group-hover:text-primary transition-colors duration-300 animate-fade-in-left">{item.title}</h4>
                        <p className="text-mint font-medium animate-pulse">{item.company}</p>
                        <p className="text-gray-600 text-sm mt-1 group-hover:text-gray-700 transition-colors duration-300">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;