import React, { useEffect, useState } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, Heart, 
  ArrowUp, Code, Coffee, Sparkles, Star, 
  ExternalLink, Calendar, Globe
} from 'lucide-react';

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const isScrolled = window.scrollY > 150;
        setScrolled(isScrolled);
        };

        window.addEventListener('scroll', handleScroll);
        
        // Initial check
        handleScroll();
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

  React.useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/LokeshAlli21',
      icon: Github,
      color: 'hover:text-gray-300 text-gray-400',
      bgColor: 'hover:bg-gray-600/20'
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/lokesh1807',
      icon: Linkedin,
      color: 'hover:text-blue-400 text-blue-500',
      bgColor: 'hover:bg-blue-600/20'
    },
    {
      name: 'Email',
      url: 'mailto:lokeshalli1807@gmail.com',
      icon: Mail,
      color: 'hover:text-red-400 text-red-500',
      bgColor: 'hover:bg-red-600/20'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  const techStack = [
    'React.js', 'Node.js', 'PostgreSQL', 'Express.js', 'Tailwind CSS', 'JavaScript'
  ];

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 to-black border-t border-gray-800/50 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-gradient-to-r from-cyan-600/10 to-indigo-600/10 rounded-full blur-3xl"></div>
        
        {/* Floating Particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-10 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: ['#3B82F6', '#06B6D4', '#8B5CF6'][Math.floor(Math.random() * 3)],
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      <div className={`relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {/* Main Footer Content */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="mb-8">
                <h3 className="text-4xl font-bold mb-4">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                    Lokesh Alli
                  </span>
                </h3>
                <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                  Full Stack Developer passionate about creating innovative solutions that make a difference. 
                  Let's build something amazing together.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                  <MapPin className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>Solapur, Maharashtra, India</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                  <Mail className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <a href="mailto:lokeshalli1807@gmail.com" className="hover:text-blue-400 transition-colors">
                    lokeshalli1807@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group">
                  <Phone className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
                  <span>+91 84858 68884</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group p-3 rounded-xl bg-white/5 border  border-white/10 ${social.bgColor} ${social.color} transition-all duration-300 transform hover:scale-110 hover:shadow-lg`}
                  >
                    <social.icon className="w-6 h-6 transition-transform group-hover:rotate-12" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
                <Globe className="w-5 h-5 text-blue-400" />
                Quick Links
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <ArrowUp className="w-4 h-4 rotate-45 opacity-0 group-hover:opacity-100 transition-all transform -translate-x-2 group-hover:translate-x-0" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 className="text-xl font-semibold text-white mb-8 flex items-center gap-2">
                <Code className="w-5 h-5 text-blue-400" />
                Tech Stack
              </h4>
              <div className="space-y-3">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-gray-400 hover:text-blue-400 transition-colors group"
                  >
                    <Star className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">{tech}</span>
                  </div>
                ))}
              </div>

              {/* Fun Stats */}
              <div className="mt-8 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">Fun Fact</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Coffee className="w-4 h-4 text-orange-400" />
                  <span className="text-sm">Powered by countless cups of coffee ☕</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              
              {/* Copyright */}
              <div className="flex items-center gap-2 text-gray-400">
                <span>&copy; {currentYear} Lokesh Alli. Made with</span>
                <Heart className="w-4 h-4 text-red-400 animate-pulse" />
                <span>in India</span>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 hover:from-blue-600/30 hover:to-cyan-600/30 border border-blue-500/30 text-blue-400 hover:text-white rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                <span className="text-sm font-medium">Back to Top</span>
              </button>
            </div>

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-800/30">
              <div className="text-center">
                <p className="text-gray-500 text-sm flex items-center justify-center gap-2 flex-wrap">
                  <Calendar className="w-4 h-4" />
                  <span>Last updated: June {currentYear}</span>
                  <span className="hidden sm:inline">•</span>
                  <ExternalLink className="w-4 h-4" />
                  <span>Open for opportunities</span>
                  <span className="hidden sm:inline">•</span>
                  <Code className="w-4 h-4" />
                  <span>Built with React & Tailwind CSS</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Floating Button (Alternative) */}
      <button
        onClick={scrollToTop}
        className={`${scrolled ? 'fixed' : 'hidden'} cursor-pointer bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-full shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-110 z-50 group`}
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 " />
      </button>
    </footer>
  );
};

export default Footer;