import { useState } from "react";
import emailjs from '@emailjs/browser';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Linkedin, 
  Facebook,
  MapPin,
  Clock,
  Send
} from "lucide-react";
import { AnimatedHand, SuccessAnimation, ParticleBackground } from "@/components/ui/animated-illustrations";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        project_type: formData.projectType,
        budget: formData.budget,
        message: formData.message,
        to_name: 'Sheikh Momin',
      };

      await emailjs.send(
        'service_lup1knh', // Service ID
        'template_s7x0rat', // Template ID
        templateParams,
        'dTxNCIlH7ITAWvMPq' // Public Key
      );

      toast.success('Message sent successfully! I\'ll get back to you soon.');
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        projectType: '',
        budget: '',
        message: ''
      });
      
      // Hide success animation after 3 seconds
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send message. Please try again or contact me directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactMethods = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sheikhmomin431@gmail.com',
      href: 'mailto:sheikhmomin431@gmail.com',
      description: 'Send me an email anytime'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+880 1540 567946',
      href: 'tel:+8801540567946',
      description: 'Call for urgent projects'
    },
    {
      icon: MessageCircle,
      label: 'WhatsApp',
      value: 'Quick Chat',
      href: 'https://wa.me/8801540567946',
      description: 'Instant messaging'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'Professional Network',
      href: 'https://linkedin.com/in/sheikhmomin',
      description: 'Connect professionally'
    },
    {
      icon: Facebook,
      label: 'Facebook',
      value: 'Social Profile',
      href: 'https://www.facebook.com/Sheikh.5266',
      description: 'Follow my updates'
    }
  ];

  const projectTypes = [
    'Web Development',
    'Meta Ad Management',
    'Video Editing',
    'Motion Graphics',
    '2D Illustration',
    'Complete Package',
    'Other'
  ];

  return (
    <section id="contact" className="section-padding bg-white relative overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Soft animated gradients */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-96 h-96 bg-mint rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-mint-light rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-charcoal animate-fade-in-up">
            Let's <span className="gradient-text animate-gradient-shift">Connect</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-mint rounded-full mx-auto animate-scale-in"></div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            Ready to bring your project to life? Let's discuss how I can help you achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Animated Hand */}
            <div className="flex justify-center lg:justify-start mb-8">
              <AnimatedHand className="w-32 h-32" />
            </div>
            
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-charcoal animate-fade-in-up">Get in Touch</h3>
              <p className="text-gray-600 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                Whether you need a conversion-focused website, eye-catching video content, or a complete digital marketing strategy, I'm here to help. Let's turn your vision into reality.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4 stagger-container">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-card p-6 flex items-center space-x-4 group card-3d card-flip glow-border"
                >
                  <div className="bg-gradient-mint p-3 rounded-lg group-hover:scale-110 transition-transform">
                    <method.icon className="h-5 w-5 text-white icon-pulse" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-charcoal group-hover:text-mint transition-colors">
                      {method.label}
                    </h4>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                    <p className="text-mint font-medium">{method.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Additional Info */}
            <div className="space-y-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-mint icon-bounce" />
                <span className="text-gray-600">Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-mint icon-pulse" />
                <span className="text-gray-600">Typically replies within 24 hours</span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="portfolio-card p-8 card-3d glow-border relative">
            {/* Success Animation Overlay */}
            {showSuccess && (
              <div className="absolute inset-0 bg-white/95 flex items-center justify-center z-50 rounded-xl">
                <div className="text-center">
                  <SuccessAnimation className="mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-green-600 mb-2">Message Sent!</h3>
                  <p className="text-gray-600">Thank you for reaching out. I'll get back to you soon!</p>
                </div>
              </div>
            )}
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-charcoal animate-fade-in-up">Send Message</h3>
                <p className="text-gray-600 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>Fill out the form below and I'll get back to you soon.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-field">
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Full Name *
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your full name"
                    required
                    className="w-full form-input filter-btn"
                  />
                </div>
                <div className="form-field">
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Email Address *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full form-input filter-btn"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="form-field">
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent filter-btn"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>
                <div className="form-field">
                  <label className="block text-sm font-medium text-charcoal mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full p-3 border border-border rounded-lg focus:ring-2 focus:ring-mint focus:border-transparent filter-btn"
                  >
                    <option value="">Select budget range</option>
                    <option value="under-500">Under $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                    <option value="5000-plus">$5,000+</option>
                  </select>
                </div>
              </div>

              <div className="form-field">
                <label className="block text-sm font-medium text-charcoal mb-2">
                  Project Details *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                  required
                  rows={6}
                  className="w-full form-input filter-btn"
                />
              </div>

              <Button type="submit" className="btn-hero w-full filter-btn" disabled={isSubmitting}>
                <Send className="mr-2 h-5 w-5 icon-bounce" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>

              <p className="text-sm text-gray-500 text-center">
                Your information will not be shared with third parties.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;