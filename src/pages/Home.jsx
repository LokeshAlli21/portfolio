import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, 
  Database, Server, Smartphone, Download, ArrowRight, Star, 
  Calendar, Users, Zap, Sparkles, Rocket, BookOpen, Award,
  ChevronDown, Play, Eye, GitBranch, Globe, Monitor, Layers
} from 'lucide-react';
import { useOutletContext } from 'react-router-dom';

const Home = () => {

   const { handleDownloadResume } = useOutletContext();

  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef(null);

  const titles = [
    'Full Stack Developer',
    'React • Node.js • PostgreSQL',
    'AWS & Cloud Infrastructure',
    'Scalable Web Applications'
  ];

  useEffect(() => {
    setIsVisible(true);
    
    // Typing animation
    let currentTitleIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    
    const typeText = () => {
      const currentTitle = titles[currentTitleIndex];
      
      if (!isDeleting) {
        setTypedText(currentTitle.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        if (currentCharIndex === currentTitle.length) {
          setTimeout(() => { isDeleting = true; }, 2000);
        }
      } else {
        setTypedText(currentTitle.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        }
      }
    };
    
    const typingInterval = setInterval(typeText, isDeleting ? 50 : 150);
    
    // Mouse tracking for parallax effect
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height
        });
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      clearInterval(typingInterval);
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "RERA Insights Platform",
      subtitle: "Real Estate Compliance Revolution",
      description: "A comprehensive platform transforming how real estate projects comply with RERA regulations. Features bilingual UI, real-time tracking, and seamless document management.",
      longDescription: "Built for the real estate industry to streamline RERA compliance with quarterly progress reports, promoter management, and real-time unit tracking. The platform handles complex workflows while maintaining an intuitive user experience.",
      tech: ["React", "Node.js", "PostgreSQL", "Supabase", "Tailwind CSS"],
      features: [
        "Bilingual UI (English + Marathi)",
        "Camera Integration for Documents", 
        "Real-time Unit Finance Tracking",
        "Promoter Dashboard",
        "Quarterly Progress Reports",
        "Document Management System"
      ],
      github: "https://github.com/LokeshAlli21/RERA-INSIGHTS",
      status: "Production Ready",
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=faces,edges",
      color: "from-emerald-500 to-teal-600",
      stats: { commits: "150+", files: "45+", users: "10+" }
    },
    {
      title: "Appwrite Blog Platform",
      subtitle: "Modern Content Management",
      description: "Full-stack blog platform with advanced authentication, rich text editing, and responsive design. Built for scalability and user experience.",
      longDescription: "A feature-rich blogging platform that demonstrates modern web development practices with secure authentication, post management, and clean UI design.",
      tech: ["React", "Appwrite", "Tailwind CSS", "Vercel", "JavaScript"],
      features: [
        "User Authentication & Authorization",
        "Rich Text Editor",
        "Post Management System",
        "Responsive Design",
        "SEO Optimized",
        "Fast Performance"
      ],
      github: "https://github.com/LokeshAlli21/Appwrite-Blog",
      live: "https://appwrite-blog-first-deploy.vercel.app/",
      status: "Live",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop&crop=faces,edges",
      color: "from-blue-500 to-indigo-600",
      stats: { commits: "120+", files: "32+", users: "25+" }
    },
    {
      title: "Online Course Platform",
      subtitle: "Education Technology Solution",
      description: "Udemy-inspired learning platform with video streaming, enrollment system, and payment integration. Empowering online education.",
      longDescription: "A comprehensive e-learning platform that replicates the functionality of major course platforms with video-based learning, user management, and monetization features.",
      tech: ["MERN Stack", "JWT Auth", "Video Streaming", "Payment Gateway"],
      features: [
        "Course Creation & Management",
        "Video Streaming Platform",
        "User Enrollment System",
        "Payment Integration",
        "Progress Tracking",
        "Mobile Responsive"
      ],
      github: "https://github.com/LokeshAlli21/Online-Course-Platform",
      status: "Featured",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop&crop=faces,edges",
      color: "from-cyan-500 to-blue-600",
      stats: { commits: "200+", files: "60+", users: "15+" }
    },
    {
      title: "Book Notes Manager",
      subtitle: "Personal Knowledge System",
      description: "Intelligent book management app with PostgreSQL backend and Open Library API integration. Perfect for avid readers and learners.",
      longDescription: "A sophisticated note-taking application for book enthusiasts, featuring advanced search, categorization, and integration with external book databases.",
      tech: ["Node.js", "Express.js", "PostgreSQL", "REST API", "JavaScript"],
      features: [
        "CRUD Operations",
        "Advanced Rating System",
        "Book Cover Fetching",
        "Search & Filter",
        "Reading Progress Tracking",
        "Export Functionality"
      ],
      github: "https://github.com/LokeshAlli21/Book-Notes",
      status: "Completed",
      image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&h=400&fit=crop&crop=faces,edges",
      color: "from-orange-500 to-red-600",
      stats: { commits: "80+", files: "25+", users: "8+" }
    }
  ];

  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: Monitor,
      skills: [
        "React.js",
        "Redux Toolkit",
        "JavaScript (ES6+)",
        "HTML5",
        "CSS3",
        "Tailwind CSS",
        "Bootstrap",
        "Vite",
        "Axios",
      ],
      color: "from-blue-500 to-cyan-500"
  },
    backend: {
      title: "Backend Development", 
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "JWT Authentication", "File Handling", "Middleware"],
      color: "from-slate-500 to-gray-600"
    },
    database: {
      title: "Database Management",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Data Modeling", "Query Optimization"],
      color: "from-indigo-500 to-cyan-600"
    },
    tools: {
      title: "Tools & DevOps",
      icon: Zap,
      skills: ["Git & GitHub", "Vercel", "AWS - EC2 & RDS", "NGINX", "PM2", "Postman", "VS Code", "Android Studio"],
      color: "from-orange-500 to-red-500"
    },
    languages: {
      title: "Programming Languages",
      icon: Code,
      skills: ["JavaScript", "Python", "Java", "C++", "C", "SQL"],
      color: "from-emerald-500 to-teal-600"
    }
  };

  const stats = [
    { label: "Projects Completed", value: "10+", icon: Code, color: "text-blue-400" },
    { label: "Months of Experience", value: "6+", icon: Calendar, color: "text-emerald-400" },
    { label: "Technologies Mastered", value: "15+", icon: Zap, color: "text-cyan-400" },
    { label: "GitHub Repositories", value: "20+", icon: Github, color: "text-orange-400" }
  ];

  const achievements = [
    {
      title: "Full Stack Expertise",
      description: "Mastered MERN stack with production-ready applications",
      icon: Rocket,
      color: "text-blue-400"
    },
    {
      title: "Open Source Contributor",
      description: "Active contributor with 20+ public repositories",
      icon: GitBranch,
      color: "text-cyan-400"
    },
    {
      title: "Bilingual Development",
      description: "Created multilingual applications for diverse user bases",
      icon: Globe,
      color: "text-indigo-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden pt-8">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 30}px, ${mousePosition.y * 30}px)`
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 25}px, ${-mousePosition.y * 25}px)`
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-indigo-600 to-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"></div>
        
        {/* Enhanced Floating Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              backgroundColor: ['#3B82F6', '#06B6D4', '#8B5CF6', '#10B981'][Math.floor(Math.random() * 4)],
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 6}s`
            }}
          ></div>
        ))}
      </div>

      <style jsx="true">{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>

      {/* Enhanced Hero Section */}
      <section ref={heroRef} id="about" className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Enhanced Profile Image */}
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 p-1 shadow-2xl transform hover:scale-105 transition-all duration-500 hover:shadow-blue-500/25">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden ring-4 ring-white/10">
                <img 
                  src="https://avatars.githubusercontent.com/u/88704626?v=4" 
                  alt="Lokesh Alli"
                  className="w-full h-full object-cover rounded-full hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
            
            {/* Enhanced Name and Title */}
            <h1 className="text-6xl sm:text-8xl font-bold mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent drop-shadow-2xl">
                Lokesh Alli
              </span>
            </h1>
            
            <div className="h-20 flex items-center justify-center">
              <p className="text-2xl sm:text-3xl text-gray-300 font-medium">
                {typedText}
                <span className="animate-pulse text-blue-400">|</span>
              </p>
            </div>
            
            <p className="text-xl text-gray-400 max-w-4xl mx-auto mb-10 leading-relaxed font-light">
              Full Stack Developer specializing in modern web applications using <span className="text-blue-400 font-semibold">React</span>, <span className="text-green-400 font-semibold">Node.js</span>, and <span className="text-cyan-400 font-semibold">PostgreSQL</span>. 
              I craft scalable solutions that transform complex ideas into intuitive digital experiences with clean code and performance-driven architecture.
            </p>
          </div>

          {/* Enhanced Contact Info */}
          <div className="flex flex-wrap justify-center gap-8 mb-10">
            <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg hover:bg-white/5">
              <MapPin className="w-6 h-6 text-blue-400" />
              <span className="text-lg">Solapur, Maharashtra</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg hover:bg-white/5">
              <Mail className="w-6 h-6 text-blue-400" />
              <a href="mailto:lokeshalli1807@gmail.com" className="hover:text-blue-400 transition-colors text-lg">
                lokeshalli1807@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-gray-300 hover:text-blue-400 transition-all duration-300 p-3 rounded-lg hover:bg-white/5">
              <Phone className="w-6 h-6 text-blue-400" />
              <span className="text-lg">+91 84858 68884</span>
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex flex-wrap justify-center gap-6 mb-16">
            <a 
              href="https://github.com/LokeshAlli21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25 text-lg"
            >
              <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              View GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/lokesh1807" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border-2 border-blue-400 hover:bg-blue-400 hover:text-slate-900 px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-blue-500/25 text-lg"
            >
              <Linkedin className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
            <button onClick={handleDownloadResume} className="group border-2 border-gray-400 hover:bg-gray-400 hover:text-slate-900 px-10 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-gray-500/25 text-lg">
              <Download className="w-6 h-6 group-hover:bounce transition-transform" />
              Resume
            </button>
          </div>

          {/* Enhanced Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color} group-hover:scale-125 transition-all duration-300`} />
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="flex justify-center">
            <div className="flex flex-col items-center animate-bounce">
              <ChevronDown className="w-8 h-8 text-blue-400 mb-1" />
              {/* <div className="w-px h-12 bg-gradient-to-b from-blue-400 to-transparent"></div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Skills Section */}
      <section id="skills" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive skill set spanning modern web technologies, from frontend frameworks to backend systems and database management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data]) => (
              <div key={category} className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${data.color} shadow-lg`}>
                    <data.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{data.title}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {data.skills.map((skill, index) => (
                    <span key={index} className="px-4 py-2 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-all duration-300 hover:scale-105 font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Projects Section */}
      <section id="projects" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Featured projects demonstrating end-to-end development capabilities, from responsive frontend interfaces to robust backend systems and database optimization.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10">
            {projects.map((project, index) => (
              <div key={index} className="group rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl overflow-hidden">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className={`px-4 py-2 text-xs rounded-full font-medium ${
                      project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                      project.status === 'Featured' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                      project.status === 'Production Ready' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                      'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  {/* Project Header */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium mb-3">{project.subtitle}</p>
                    <p className="text-gray-300 leading-relaxed">{project.description}</p>
                  </div>
                  
                  {/* Stats */}
                  <div className="flex gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                      <GitBranch className="w-4 h-4 text-blue-400" />
                      <span className="font-medium">{project.stats.commits}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Code className="w-4 h-4 text-blue-400" />
                      <span className="font-medium">{project.stats.files}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-blue-400" />
                      <span className="font-medium">{project.stats.users}</span>
                    </div>
                  </div>
                  
                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-3 py-1 text-xs bg-slate-700 text-gray-300 rounded-lg font-medium">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Key Features */}
                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-blue-400 mb-3">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-2">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                          <Star className="w-4 h-4 text-blue-400 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-blue-400 hover:bg-blue-400 hover:text-slate-900 text-blue-400 rounded-lg transition-all duration-300 transform hover:scale-105 font-medium"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Achievements Section */}
      <section id="achievements" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Key Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Milestones that showcase my commitment to excellence and innovation in software development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl">
                <div className="flex items-center gap-6">
                  <div className="p-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                    <achievement.icon className={`w-8 h-8 text-white group-hover:scale-110 transition-transform`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Education Section */}
      <section id="education" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education Journey
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Strong academic foundation in computer engineering with practical experience in modern development practices.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Bachelor of Technology - Computer Engineering</h3>
                    <p className="text-blue-400 text-lg font-medium">AGPIT Solapur (DBATU)</p>
                  </div>
                </div>
                <span className="text-blue-400 font-semibold text-lg">2022 - 2025</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Acquired advanced knowledge in computer science fundamentals, software engineering principles, and modern development methodologies. 
                Developing essential skills in teamwork, communication, and project management.
              </p>
            </div>
            
            <div className="group p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-6">
                  <div className="p-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-500 shadow-lg">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">Diploma - Computer Engineering</h3>
                    <p className="text-emerald-400 text-lg font-medium">SES Polytechnic (MSBTE)</p>
                  </div>
                </div>
                <span className="text-emerald-400 font-semibold text-lg">2019 - 2022</span>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Gained comprehensive knowledge in computer fundamentals, mobile app development using Java, and mastered multiple programming languages including C, C++, Java, and Python. 
                Built strong foundation in database management and software development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Languages & Soft Skills */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Languages */}
            <div>
              <h2 className="text-4xl font-bold mb-12">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Languages
                </span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { lang: "Telugu", level: "Native", proficiency: 100, color: "from-orange-500 to-red-500" },
                  { lang: "English", level: "Proficient", proficiency: 90, color: "from-blue-500 to-indigo-500" },
                  { lang: "Hindi", level: "Proficient", proficiency: 85, color: "from-green-500 to-emerald-500" },
                  { lang: "Marathi", level: "Bilingual", proficiency: 95, color: "from-purple-500 to-pink-500" }
                ].map((item, index) => (
                  <div key={index} className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-xl font-semibold text-white">{item.lang}</div>
                      <div className="text-sm text-blue-400 font-medium">{item.level}</div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 transform group-hover:scale-x-105`}
                        style={{ width: `${item.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h2 className="text-4xl font-bold mb-12">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Soft Skills
                </span>
              </h2>
              
              <div className="space-y-6">
                {[
                  { skill: "Problem Solving", level: 95, icon: Zap, color: "from-yellow-500 to-orange-500" },
                  { skill: "Team Collaboration", level: 90, icon: Users, color: "from-blue-500 to-cyan-500" },
                  { skill: "Communication", level: 88, icon: Mail, color: "from-green-500 to-emerald-500" },
                  { skill: "Quick Learning", level: 92, icon: BookOpen, color: "from-purple-500 to-indigo-500" },
                  { skill: "Project Management", level: 85, icon: Calendar, color: "from-pink-500 to-rose-500" },
                  { skill: "Leadership", level: 80, icon: Star, color: "from-indigo-500 to-purple-500" }
                ].map((item, index) => (
                  <div key={index} className="group p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color} shadow-lg`}>
                        <item.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-white font-semibold text-lg">{item.skill}</span>
                        {/* <span className="text-sm text-gray-400 font-medium">{item.level}%</span> */}
                      </div>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-3 overflow-hidden">
                      <div 
                        className={`bg-gradient-to-r ${item.color} h-3 rounded-full transition-all duration-1000 transform group-hover:scale-x-105`}
                        style={{ width: `${item.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced What Drives Me Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                What Drives Me
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              The core values and principles that guide my approach to software development and professional growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="group p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-center">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Rocket className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Innovation</h3>
                <p className="text-gray-400 leading-relaxed">
                  Constantly exploring new technologies and methodologies to build cutting-edge solutions that make a real difference in people's lives.
                </p>
              </div>
            </div>
            
            <div className="group p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-center">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Collaboration</h3>
                <p className="text-gray-400 leading-relaxed">
                  Thriving in team environments where diverse perspectives come together to create exceptional products and meaningful experiences.
                </p>
              </div>
            </div>
            
            <div className="group p-10 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl text-center">
              <div className="mb-8">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-purple-500 to-indigo-500 flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500">
                  <Sparkles className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Excellence</h3>
                <p className="text-gray-400 leading-relaxed">
                  Committed to delivering high-quality code and user experiences that exceed expectations and drive long-term business success.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="relative p-12 rounded-3xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/10 backdrop-blur-sm border border-indigo-500/20 shadow-2xl overflow-hidden">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-cyan-600/5"></div>
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
              <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-r from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
            </div>
            
            <div className="relative text-center">
              <div className="mb-8">
                <div className="w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center shadow-2xl animate-pulse">
                  <Sparkles className="w-12 h-12 text-white" />
                </div>
                <h2 className="text-5xl font-bold mb-6">
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Let's Build Something Amazing Together
                  </span>
                </h2>
                <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                  Ready to bring your ideas to life with cutting-edge web technologies and innovative solutions. 
                  Let's create something extraordinary that makes a lasting impact on your business and users.
                </p>
              </div>
              
              <div className="flex flex-wrap justify-center gap-6 mb-12">
                <a 
                  href="mailto:lokeshalli1807@gmail.com"
                  className="group bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-indigo-500/25 text-lg"
                >
                  <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  Get In Touch
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </a>
                
                <a 
                  href="https://github.com/LokeshAlli21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group border-2 border-indigo-400 hover:bg-indigo-400 hover:text-slate-900 px-10 py-5 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-3 shadow-2xl hover:shadow-indigo-500/25 text-lg"
                >
                  <Github className="w-6 h-6 group-hover:rotate-12 transition-transform" />
                  View My Work
                </a>
              </div>
              
              <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-blue-400 mb-2">24/7</div>
                  <div className="text-sm text-gray-400 font-medium">Available</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-emerald-400 mb-2">Fast</div>
                  <div className="text-sm text-gray-400 font-medium">Response</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">Quality</div>
                  <div className="text-sm text-gray-400 font-medium">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )

}

export default Home;