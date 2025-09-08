import { Mail, Phone, Linkedin, Facebook, MessageCircle, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      href: 'https://linkedin.com/in/sheikhmomin',
      label: 'LinkedIn'
    },
    {
      icon: Facebook,
      href: 'https://www.facebook.com/Sheikh.5266',
      label: 'Facebook'
    },
    {
      icon: MessageCircle,
      href: 'https://wa.me/8801540567946',
      label: 'WhatsApp'
    },
    {
      icon: Mail,
      href: 'mailto:sheikhmomin431@gmail.com',
      label: 'Email'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace('#', ''));
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-charcoal text-white">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-3 gap-12">
          {/* About Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Sheikh Momin</h3>
              <p className="text-gray-300 leading-relaxed">
                Multi-disciplinary creative professional delivering conversion-focused web experiences, high-impact ads, and polished video & motion assets for brands.
              </p>
            </div>
            
            <div className="space-y-2">
              <p className="text-sm text-gray-400">Currently studying at</p>
              <p className="font-semibold text-mint">University of Dhaka</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <div className="grid grid-cols-2 gap-3">
              {quickLinks.map((link) => (
                <button
                  key={link.name}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-300 hover:text-mint transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
            
            <div className="space-y-3">
              <h5 className="font-semibold">Services</h5>
              <div className="space-y-2 text-sm text-gray-300">
                <p>Web Development</p>
                <p>Meta Ad Management</p>
                <p>Video Editing</p>
                <p>Motion Graphics</p>
                <p>2D Illustration</p>
                <p>Automation and AI Agent</p>
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get in Touch</h4>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-mint" />
                <a 
                  href="mailto:sheikhmomin431@gmail.com"
                  className="text-gray-300 hover:text-mint transition-colors"
                >
                  sheikhmomin431@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-mint" />
                <a 
                  href="tel:+8801540567946"
                  className="text-gray-300 hover:text-mint transition-colors"
                >
                  +880 1540 567946
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h5 className="font-semibold">Follow Me</h5>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-charcoal-light rounded-lg flex items-center justify-center hover:bg-mint transition-colors group"
                    aria-label={social.label}
                  >
                    <social.icon className="h-5 w-5 text-gray-300 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-charcoal-light py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-300">
              <span>© {currentYear} Sheikh Momin. All rights reserved.</span>
            </div>
            
            <div className="flex space-x-6 text-sm text-gray-400">
              <button className="hover:text-mint transition-colors">Privacy Policy</button>
              <button className="hover:text-mint transition-colors">Terms of Service</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;