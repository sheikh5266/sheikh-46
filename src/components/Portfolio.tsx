import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ExternalLink, Play, Github, ArrowRight } from "lucide-react";
import { AnimatedLoader, ParticleBackground } from "@/components/ui/animated-illustrations";

// Portfolio Images
import ecommerceVideoImg from "@/assets/portfolio-ecommerce-video.jpg";
import motionGraphicsImg from "@/assets/portfolio-motion-graphics.jpg";
import restaurantWebImg from "@/assets/portfolio-restaurant-web.jpg";
import socialCampaignImg from "@/assets/portfolio-social-campaign.jpg";
import characterIllustrationsImg from "@/assets/portfolio-character-illustrations.jpg";
import corporateVideoImg from "@/assets/portfolio-corporate-video.jpg";

interface PortfolioProps {
  isHomepage?: boolean;
}

const Portfolio = ({ isHomepage = false }: PortfolioProps) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const filters = ['All', 'Video', 'Motion', 'Illustration', 'Web', 'Ads'];

  const portfolioItems = [
    {
      id: 1,
      title: 'E-commerce Product Videos',
      category: 'Video',
      description: 'Series of product showcase videos for online store',
      image: ecommerceVideoImg,
      tools: ['After Effects', 'Premiere Pro'],
      type: 'video',
      status: 'Case Study — available soon'
    },
    {
      id: 2,
      title: 'Brand Motion Graphics',
      category: 'Motion',
      description: 'Animated logo and brand elements package',
      image: motionGraphicsImg,
      tools: ['After Effects', 'Illustrator'],
      type: 'motion',
      status: 'Case Study — available soon'
    },
    {
      id: 3,
      title: 'Restaurant Website',
      category: 'Web',
      description: 'Modern responsive website with online ordering',
      image: restaurantWebImg,
      tools: ['React', 'Tailwind CSS', 'Node.js'],
      type: 'web',
      liveLink: '#',
      status: 'Live'
    },
    {
      id: 4,
      title: 'Social Media Campaign',
      category: 'Ads',
      description: 'Complete Meta ads campaign with video creatives',
      image: socialCampaignImg,
      tools: ['Meta Ads Manager', 'Premiere Pro'],
      type: 'ads',
      status: 'Case Study — available soon'
    },
    {
      id: 5,
      title: '2D Character Illustrations',
      category: 'Illustration',
      description: 'Flat design character set for mobile app',
      image: characterIllustrationsImg,
      tools: ['Illustrator', 'Figma'],
      type: 'illustration',
      status: 'Case Study — available soon'
    },
    {
      id: 6,
      title: 'Corporate Video Series',
      category: 'Video',
      description: 'Training and promotional videos for tech company',
      image: corporateVideoImg,
      tools: ['Premiere Pro', 'DaVinci Resolve'],
      type: 'video',
      status: 'Case Study — available soon'
    }
  ];

  const filteredItems = activeFilter === 'All' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const displayedItems = isHomepage ? filteredItems.slice(0, 3) : filteredItems;

  const handleFilterChange = (filter: string) => {
    if (filter !== activeFilter) {
      setIsLoading(true);
      setTimeout(() => {
        setActiveFilter(filter);
        setIsLoading(false);
      }, 500);
    }
  };

  return (
    <section id="portfolio" className="section-padding bg-gray-50 relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${10 + Math.random() * 80}%`,
              top: `${10 + Math.random() * 80}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${6 + Math.random() * 3}s`
            }}
          >
            <div className={`w-${4 + Math.floor(Math.random() * 4)} h-${4 + Math.floor(Math.random() * 4)} bg-mint/5 rounded-full`} />
          </div>
        ))}
        
        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-5" viewBox="0 0 100 100">
          <path
            d="M0,50 Q25,30 50,50 T100,50"
            stroke="currentColor"
            strokeWidth="0.5"
            fill="none"
            className="animate-pulse"
          />
          <path
            d="M0,30 Q25,50 50,30 T100,30"
            stroke="currentColor"
            strokeWidth="0.3"
            fill="none"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
        </svg>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal animate-fade-in-up">
            My <span className="gradient-text animate-gradient-shift">Portfolio</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-mint rounded-full mx-auto animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            A showcase of creative projects spanning web development, video editing, motion graphics, and digital marketing.
          </p>
        </div>

        {/* Showreel Card */}
        <div className="mb-12 animate-scale-in" style={{ animationDelay: '0.5s' }}>
          <div className="portfolio-card p-8 bg-gradient-hero text-white text-center card-3d glow-border">
            <div className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-mint rounded-full icon-pulse">
                <Play className="h-8 w-8 text-white icon-bounce" />
              </div>
              <h3 className="text-2xl font-bold animate-fade-in-up">Video & Motion Showreel</h3>
              <p className="text-gray-200 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                A curated selection of my best video editing and motion graphics work
              </p>
              <Button className="btn-hero filter-btn">
                <Play className="mr-2 h-5 w-5 icon-bounce" />
                Watch Showreel (Coming Soon)
              </Button>
            </div>
          </div>
        </div>

        {/* Filter Buttons - Only show on full portfolio page */}
        {!isHomepage && (
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => handleFilterChange(filter)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 filter-btn ${
                  activeFilter === filter
                    ? 'bg-mint text-white shadow-mint glow-border'
                    : 'bg-white text-charcoal hover:bg-mint hover:text-white card-flip'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Loading Animation */}
        {isLoading && (
          <div className="flex justify-center items-center py-20">
            <AnimatedLoader className="text-mint" />
          </div>
        )}

        {/* Portfolio Grid */}
        {!isLoading && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-container">
            {displayedItems.map((item) => (
              <div key={item.id} className="portfolio-card overflow-hidden group card-3d card-flip glow-border">
                {/* Image */}
                <div className="relative aspect-video bg-gray-200 overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-charcoal/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    {item.type === 'video' || item.type === 'motion' ? (
                      <Play className="h-12 w-12 text-white icon-pulse" />
                    ) : item.type === 'web' ? (
                      <ExternalLink className="h-12 w-12 text-white icon-bounce" />
                    ) : (
                      <Github className="h-12 w-12 text-white icon-rotate" />
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="skill-tag text-xs filter-btn">{item.category}</span>
                      <span className={`text-xs px-2 py-1 rounded-full animate-pulse ${
                        item.status === 'Live' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-charcoal group-hover:text-mint transition-colors animate-fade-in-up">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>{item.description}</p>
                  </div>

                  {/* Tools */}
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool, index) => (
                      <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded filter-btn">
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    className="w-full filter-btn"
                    disabled={item.status !== 'Live'}
                  >
                    {item.status === 'Live' ? 'View Project' : 'Coming Soon'}
                    {item.status === 'Live' && <ExternalLink className="ml-2 h-4 w-4 icon-bounce" />}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View All Button for Homepage */}
        {isHomepage && (
          <div className="text-center mt-12 animate-fade-in-up">
            <Button 
              className="btn-hero filter-btn group relative overflow-hidden bg-gradient-to-r from-mint to-mint-light hover:from-mint-dark hover:to-mint transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-mint/25"
              onClick={() => navigate('/portfolio')}
            >
              <span className="relative z-10 flex items-center">
                View My Works
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </Button>
          </div>
        )}

        {/* Call to Action for Full Portfolio Page */}
        {!isHomepage && (
          <div className="text-center mt-16 animate-fade-in-up">
            <p className="text-lg text-gray-600 mb-6">
              Interested in working together? Let's create something amazing.
            </p>
            <Button 
              className="btn-hero filter-btn"
              onClick={() => {
                const element = document.getElementById('contact');
                element?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Start Your Project
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;