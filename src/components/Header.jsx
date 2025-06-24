import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Home, User, Code, Award, BookOpen, 
  MessageCircle, Github, Linkedin, Mail, Download,
  Sparkles, Zap, Monitor, Database, Server, Globe
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);

      // Track active section based on scroll position
      const sections = ['about', 'skills', 'projects', 'achievements', 'education', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Initial check
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'about', label: 'About', icon: User, color: 'text-blue-400' },
    { id: 'skills', label: 'Skills', icon: Zap, color: 'text-cyan-400' },
    { id: 'projects', label: 'Projects', icon: Code, color: 'text-indigo-400' },
    { id: 'achievements', label: 'Achievements', icon: Award, color: 'text-emerald-400' },
    { id: 'education', label: 'Education', icon: BookOpen, color: 'text-orange-400' },
    { id: 'contact', label: 'Contact', icon: MessageCircle, color: 'text-pink-400' }
  ];

  const socialLinks = [
    { 
      icon: Github, 
      href: 'https://github.com/LokeshAlli21', 
      label: 'GitHub',
      color: 'hover:text-purple-400 hover:bg-purple-400/10'
    },
    { 
      icon: Linkedin, 
      href: 'https://www.linkedin.com/in/lokesh1807', 
      label: 'LinkedIn',
      color: 'hover:text-blue-400 hover:bg-blue-400/10'
    },
    { 
      icon: Mail, 
      href: 'mailto:lokeshalli1807@gmail.com', 
      label: 'Email',
      color: 'hover:text-emerald-400 hover:bg-emerald-400/10'
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = sectionId === 'about' ? 100 : sectionId === 'contact' ? 50 : 0;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      {/* Header */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/95 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-500/10' 
          : 'bg-transparent'
      }`}>
        {/* Subtle background gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/5 via-transparent to-cyan-900/5 pointer-events-none"></div>
        
        <div className="max-w-8`xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between h-20">
            {/* Enhanced Logo */}
            <div className="flex items-center gap-4 group cursor-pointer" onClick={() => scrollToSection('about')}>
              <div className="relative">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-500 flex items-center justify-center shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300 group-hover:scale-110">
                  <Sparkles className="w-6 h-6 text-white group-hover:rotate-12 transition-transform duration-300" />
                </div>
                {/* Subtle glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-400 to-cyan-400 opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
              </div>
              <div className="hidden sm:block whitespace-nowrap">
                <span className="text-2xl font-bold">
                  <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-cyan-300 transition-all duration-300">
                    Lokesh Alli
                  </span>
                </span>
                <div className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                  Full Stack Developer
                </div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-2">
              {navItems.map((item, index) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`group relative flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeSection === item.id
                      ? 'text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 shadow-lg shadow-blue-500/10'
                      : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                  }`}
                >
                  <item.icon className={`w-4 h-4 transition-all duration-300 ${
                    activeSection === item.id ? item.color : 'group-hover:' + item.color
                  }`} />
                  <span className="relative">
                    {item.label}
                    {activeSection === item.id && (
                      <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full"></div>
                    )}
                  </span>
                  {/* Hover indicator */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-r from-blue-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`}></div>
                </button>
              ))}
            </nav>

            {/* Enhanced Desktop Action Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group p-3 text-gray-400 transition-all duration-300 rounded-xl border border-transparent hover:border-white/10 ${social.color} transform hover:scale-110`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              ))}
              
              <div className="w-px h-8 bg-gradient-to-b from-transparent via-white/20 to-transparent mx-2"></div>
              
              <button className="group relative flex items-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 overflow-hidden">
                {/* Button background animation */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <Download className="w-4 h-4 group-hover:animate-bounce relative z-10" />
                <span className="relative z-10">Resume</span>
              </button>
            </div>

            {/* Enhanced Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 text-gray-300 hover:text-white transition-all duration-300 rounded-xl hover:bg-white/5 border border-transparent hover:border-white/10 group"
            >
              <div className="relative w-6 h-6">
                <Menu className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-0 rotate-180' : 'opacity-100 rotate-0'} group-hover:text-blue-400`} />
                <X className={`w-6 h-6 absolute transition-all duration-300 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-180'} group-hover:text-blue-400`} />
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible' 
            : 'max-h-0 opacity-0 invisible overflow-hidden'
        }`}>
          <div className="bg-slate-900/98 backdrop-blur-xl border-t border-white/10 shadow-2xl">
            {/* Mobile menu background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10 pointer-events-none"></div>
            
            <div className="px-6 py-8 space-y-6 relative">
              {/* Mobile Navigation */}
              <nav className="space-y-3">
                <div className="text-xs text-gray-400 font-semibold tracking-wider uppercase mb-4 px-2">
                  Navigation
                </div>
                {navItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`group w-full flex items-center gap-4 px-4 py-4 rounded-xl text-left transition-all duration-300 transform hover:scale-105 ${
                      activeSection === item.id
                        ? 'text-white bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 shadow-lg'
                        : 'text-gray-300 hover:text-white hover:bg-white/5 border border-transparent hover:border-white/10'
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500/20 to-cyan-500/20">
                      <item.icon className={`w-5 h-5 transition-colors duration-300 ${
                        activeSection === item.id ? item.color : 'group-hover:' + item.color
                      }`} />
                    </div>
                    <span className="font-medium text-lg">{item.label}</span>
                    {activeSection === item.id && (
                      <div className="ml-auto w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400"></div>
                    )}
                  </button>
                ))}
              </nav>

              {/* Mobile Social Links */}
              <div className="space-y-4">
                <div className="text-xs text-gray-400 font-semibold tracking-wider uppercase px-2">
                  Connect
                </div>
                <div className="flex items-center justify-center gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group p-4 transition-all duration-300 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm ${social.color} transform hover:scale-110 shadow-lg`}
                      aria-label={social.label}
                    >
                      <social.icon className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Mobile Resume Button */}
              <div className="pt-4 border-t border-white/10">
                <button className="group w-full flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-6 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25 text-lg overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download className="w-6 h-6 group-hover:animate-bounce relative z-10" />
                  <span className="relative z-10">Download Resume</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer with gradient overlay */}
      <div className="h-20 bg-gradient-to-b from-transparent to-slate-900/5"></div>
    </>
  );
};

export default Header;