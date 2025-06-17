import React, { useState, useEffect, useRef } from 'react';
import { 
  Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, 
  Database, Server, Smartphone, Download, ArrowRight, Star, 
  Calendar, Users, Zap, Sparkles, Rocket, BookOpen, Award,
  ChevronDown, Play, Eye, GitBranch, Globe
} from 'lucide-react';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [typedText, setTypedText] = useState('');
  const heroRef = useRef(null);

  const titles = [
    'Full Stack Developer',
    'MERN Stack Expert', 
    'Real Estate Tech Specialist',
    'Problem Solver'
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
      image: "/api/placeholder/600/400",
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
      image: "/api/placeholder/600/400",
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
      image: "/api/placeholder/600/400",
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
      image: "/api/placeholder/600/400",
      color: "from-orange-500 to-red-600",
      stats: { commits: "80+", files: "25+", users: "8+" }
    }
  ];

  const skills = {
    frontend: {
      title: "Frontend Development",
      icon: Code,
      skills: ["React.js", "Redux Toolkit", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Vite"],
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
      skills: ["PostgreSQL", "MongoDB", "Supabase", "Data Modeling", "Query Optimization"],
      color: "from-indigo-500 to-cyan-600"
    },
    tools: {
      title: "Tools & DevOps",
      icon: Zap,
      skills: ["Git", "GitHub", "Vercel", "EC2", "NGINX", "Postman", "VS Code", "ESLint"],
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
    { label: "Years Experience", value: "2+", icon: Calendar, color: "text-emerald-400" },
    { label: "Technologies Mastered", value: "15+", icon: Zap, color: "text-cyan-400" },
    { label: "GitHub Repositories", value: "20+", icon: Github, color: "text-orange-400" }
  ];

  const achievements = [
    {
      title: "Real Estate Tech Innovation",
      description: "Developed RERA compliance platform used by multiple promoters",
      icon: Award,
      color: "text-emerald-400"
    },
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        ></div>
        <div 
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"
          style={{
            transform: `translate(${-mousePosition.x * 15}px, ${-mousePosition.y * 15}px)`
          }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        
        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          ></div>
        ))}
      </div>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className={`max-w-6xl mx-auto text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {/* Profile Image */}
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-indigo-600 p-1 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://avatars.githubusercontent.com/u/88704626?v=4" 
                  alt="Lokesh Alli"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
            
            {/* Name and Title */}
            <h1 className="text-5xl sm:text-7xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
                Lokesh Alli
              </span>
            </h1>
            
            <div className="h-16 flex items-center justify-center">
              <p className="text-xl sm:text-2xl text-gray-300">
                {typedText}
                <span className="animate-pulse">|</span>
              </p>
            </div>
            
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8 leading-relaxed">
              Passionate Full Stack Developer from Solapur, specializing in <span className="text-blue-400">MERN stack</span> and <span className="text-cyan-400">real estate technology</span>. 
              I build scalable applications that solve real-world problems, with expertise in creating seamless user experiences and robust backend systems.
            </p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>Solapur, Maharashtra</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Mail className="w-5 h-5 text-blue-400" />
              <a href="mailto:lokeshalli1807@gmail.com" className="hover:text-blue-400 transition-colors">
                lokeshalli1807@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+91 84858 68884</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="https://github.com/LokeshAlli21" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              View GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/lokesh1807" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group border border-blue-400 hover:bg-blue-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
            >
              <Linkedin className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              LinkedIn
            </a>
            <button className="group border border-gray-400 hover:bg-gray-400 hover:text-slate-900 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg">
              <Download className="w-5 h-5 group-hover:bounce transition-transform" />
              Resume
            </button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <stat.icon className={`w-8 h-8 mx-auto mb-3 ${stat.color} group-hover:scale-110 transition-transform`} />
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center">
            <ChevronDown className="w-8 h-8 text-blue-400 animate-bounce" />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Technical Expertise
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Comprehensive skill set spanning modern web technologies, from frontend frameworks to backend systems and database management.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(skills).map(([category, data]) => (
              <div key={category} className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-2 rounded-lg bg-gradient-to-r ${data.color}`}>
                    <data.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{data.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {data.skills.map((skill, index) => (
                    <span key={index} className="px-3 py-1 text-sm bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:bg-blue-500/30 transition-colors">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A showcase of innovative solutions built with modern technologies, demonstrating expertise in full-stack development and real-world problem solving.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                {/* Project Header */}
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors mb-1">
                      {project.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium">{project.subtitle}</p>
                  </div>
                  <span className={`px-3 py-1 text-xs rounded-full ${
                    project.status === 'Live' ? 'bg-green-500/20 text-green-400 border border-green-500/30' :
                    project.status === 'Featured' ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30' :
                    project.status === 'Production Ready' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' :
                    'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                  }`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 mb-4">{project.description}</p>
                
                {/* Stats */}
                <div className="flex gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-1">
                    <GitBranch className="w-4 h-4" />
                    {project.stats.commits}
                  </div>
                  <div className="flex items-center gap-1">
                    <Code className="w-4 h-4" />
                    {project.stats.files}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    {project.stats.users}
                  </div>
                </div>
                
                {/* Technologies */}
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs bg-slate-700 text-gray-300 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1">
                    {project.features.slice(0, 4).map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                        <Star className="w-3 h-3 text-blue-400 flex-shrink-0" />
                        {feature}
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
                    className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                  >
                    <Github className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                    Code
                  </a>
                  {project.live && (
                    <a 
                      href={project.live} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link"
                    >
                      <ExternalLink className="w-4 h-4 group-hover/link:rotate-12 transition-transform" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Key Achievements
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Milestones that showcase my commitment to excellence and innovation in software development.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="flex items-center gap-4">
                  <achievement.icon className={`w-8 h-8 ${achievement.color} group-hover:scale-110 transition-transform`} />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">{achievement.title}</h3>
                    <p className="text-gray-400 text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Education Journey
              </span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Strong academic foundation in computer engineering with practical experience in modern development practices.
            </p>
          </div>
          
          <div className="space-y-8">
            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Bachelor of Technology - Computer Engineering</h3>
                    <p className="text-gray-300">AGPIT Solapur (DBATU)</p>
                  </div>
                </div>
                <span className="text-blue-400 font-semibold">2022 - Present</span>
              </div>
              <p className="text-gray-400 text-sm">
                Acquiring advanced knowledge in computer science fundamentals, software engineering principles, and modern development methodologies. 
                Developing essential skills in teamwork, communication, and project management.
              </p>
            </div>
            
            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-4">
                  <BookOpen className="w-8 h-8 text-blue-400" />
                  <div>
                    <h3 className="text-xl font-bold text-white">Diploma - Computer Engineering</h3>
                    <p className="text-gray-300">SES Polytechnic (MSBTE)</p>
                  </div>
                </div>
                <span className="text-blue-400 font-semibold">2019 - 2022</span>
              </div>
              <p className="text-gray-400 text-sm">
                Gained comprehensive knowledge in computer fundamentals, mobile app development using Java, and mastered multiple programming languages including C, C++, Java, and Python. 
                Built strong foundation in database management and software development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Languages & Soft Skills */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Languages */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Languages
                </span>
              </h2>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { lang: "Telugu", level: "Native", proficiency: 100 },
                  { lang: "English", level: "Proficient", proficiency: 90 },
                  { lang: "Hindi", level: "Proficient", proficiency: 85 },
                  { lang: "Marathi", level: "Bilingual", proficiency: 95 }
                ].map((item, index) => (
                  <div key={index} className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-lg font-semibold text-white">{item.lang}</div>
                      <div className="text-sm text-blue-400">{item.level}</div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-cyan-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${item.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h2 className="text-3xl font-bold mb-8">
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Soft Skills
                </span>
              </h2>
              
              <div className="space-y-4">
                {[
                  { skill: "Problem Solving", level: 95, icon: Zap },
                  { skill: "Team Collaboration", level: 90, icon: Users },
                  { skill: "Communication", level: 88, icon: Mail },
                  { skill: "Quick Learning", level: 92, icon: BookOpen },
                  { skill: "Project Management", level: 85, icon: Calendar },
                  { skill: "Leadership", level: 80, icon: Star }
                ].map((item, index) => (
                  <div key={index} className="group p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-2">
                      <item.icon className="w-5 h-5 text-blue-400" />
                      <div className="flex-1 flex items-center justify-between">
                        <span className="text-white font-medium">{item.skill}</span>
                        <span className="text-sm text-gray-400">{item.level}%</span>
                      </div>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-indigo-500 to-cyan-600 h-2 rounded-full transition-all duration-1000"
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

      {/* Testimonials/Future Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              What Drives Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Rocket className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
              <p className="text-gray-400 text-sm">
                Constantly exploring new technologies and methodologies to build cutting-edge solutions that make a real difference.
              </p>
            </div>
            
            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Collaboration</h3>
              <p className="text-gray-400 text-sm">
                Thriving in team environments where diverse perspectives come together to create exceptional products and experiences.
              </p>
            </div>
            
            <div className="group p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
              <Sparkles className="w-12 h-12 text-blue-400 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
              <p className="text-gray-400 text-sm">
                Committed to delivering high-quality code and user experiences that exceed expectations and drive business success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-8 rounded-2xl bg-gradient-to-r from-indigo-500/10 via-cyan-500/10 to-indigo-500/10 backdrop-blur-sm border border-indigo-500/20">
            <Sparkles className="w-16 h-16 text-blue-400 mx-auto mb-6 animate-pulse" />
            <h2 className="text-4xl font-bold mb-6">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Let's Build Something Amazing Together
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Ready to bring your ideas to life with cutting-edge web technologies and innovative solutions. 
              Let's create something extraordinary that makes a lasting impact.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <a 
                href="mailto:lokeshalli1807@gmail.com"
                className="group bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-700 hover:to-cyan-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Mail className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href="https://github.com/LokeshAlli21"
                target="_blank"
                rel="noopener noreferrer"
                className="group border border-indigo-400 hover:bg-indigo-400 hover:text-slate-900 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center gap-2 shadow-lg"
              >
                <Github className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                View My Work
              </a>
            </div>
            
            <div className="flex justify-center gap-6 text-gray-400">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">24/7</div>
                <div className="text-sm">Available</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">Fast</div>
                <div className="text-sm">Response</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400">Quality</div>
                <div className="text-sm">Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                Lokesh Alli
              </h3>
              <p className="text-gray-400">Full Stack Developer • Problem Solver • Tech Enthusiast</p>
            </div>
            
            <div className="flex gap-4">
              <a 
                href="https://github.com/LokeshAlli21" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-indigo-400/50"
              >
                <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="https://www.linkedin.com/in/lokesh1807" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-indigo-400/50"
              >
                <Linkedin className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
              <a 
                href="mailto:lokeshalli1807@gmail.com"
                className="p-3 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-indigo-400/50"
              >
                <Mail className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
              </a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-gray-500">
            <p>&copy; 2024 Lokesh Alli. Crafted with ❤️ and lots of ☕</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;