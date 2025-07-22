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
      "title": "Appwrite Blog Application",
      "subtitle": "Full-Stack Blog Platform",
      "description": "Built a full-stack blog platform with Appwrite backend, user authentication, and responsive frontend using Tailwind CSS.",
      "longDescription": "Developed a feature-rich blog application with secure authentication and database management powered by Appwrite. Integrated a clean and responsive user interface built with React.js and Tailwind CSS. Implemented core features like post creation, editing, deletion, and protected routes for an enhanced user experience. Deployed and maintained on Vercel for optimized accessibility and performance.",
      "tech": ["React.js", "Appwrite", "Tailwind CSS", "Vercel", "JavaScript", "Redux" , "React Router"],
      "features": [
        "User Authentication & Authorization with Appwrite",
        "Post Creation, Editing, Updation and Deletion",
        "Protected Routes with Access Control",
        "Responsive Frontend with Tailwind CSS",
        "Optimized Deployment on Vercel",
        "Clean UI and Seamless User Experience"
      ],
      "github": "https://github.com/LokeshAlli21/Appwrite-Blog",
      "live": "https://appwrite-blog-first-deploy.vercel.app/",
      "status": "Live",
      "image": "project-images/mega-blog.png",
      "color": "from-blue-500 to-indigo-600",
      "stats": { "commits": "10+", "files": "30+", "users": "1" },
      "date": "Oct 2024"
    },
    {
      "title": "Book Notes Manager",
      "subtitle": "Personal Book Management System",
      "description": "Book note management app with PostgreSQL backend and Open Library API integration. Designed for readers to manage notes with ratings and cover images.",
      "longDescription": "Developed a full-stack book notes management system using PostgreSQL for data storage and RESTful APIs built with Node.js and Express.js. Features include CRUD operations, book rating system with CSS-based star UI, and Open Library API integration for fetching book covers. Focused on delivering a user-friendly interface and seamless data handling.",
      "tech": ["Node.js", "Express.js", "PostgreSQL", "REST API", "JavaScript", "Open Library API"],
      "features": [
        "Full CRUD Operations with Express.js",
        "PostgreSQL Data Storage",
        "Book Cover Fetching from Open Library API",
        "Interactive Rating System with CSS",
        "Search & Filter Books",
        "User-Friendly API Design"
      ],
      "github": "https://github.com/LokeshAlli21/Book-Notes",
      "status": "Completed",
      "image": "project-images/book-notes.png",
      "color": "from-orange-500 to-red-600",
      "stats": { "commits": "20+", "files": "10+", "users": "1" },
      "date": "Apr 2024"
    },
    {
      "title": "Online Course Platform",
      "subtitle": "EdTech Platform | College Project",
      "description": "Team project built with React.js and Appwrite for managing online courses with multi-role user access, video streaming, and authentication.",
      "longDescription": "A collaborative college project designed to replicate major e-learning platforms. Developed using React.js with Appwrite services, this platform supports three user roles — Student, Educator, and Admin — each with distinct operations and dashboards. Key features include authentication, course management, enrollment system, and role-based access. Built with a focus on usability, scalability, and team collaboration.",
      "tech": ["React.js", "Appwrite", "Tailwind CSS", "JavaScript", "Role-Based Access Control"],
      "features": [
        "Multi-Role User System (Student, Educator, Admin)",
        "Authentication & Authorization with Appwrite",
        "Course Creation & Enrollment",
        "Video Streaming Support",
        "Role-Based Access & Operations",
        "Responsive UI with Tailwind CSS"
      ],
      "github": "https://github.com/Shripad21/Online_Course_Platform",
      "status": "Featured",
      "image": "project-images/online-course-platform.png",
      "color": "from-cyan-500 to-blue-600",
      "stats": { "commits": "20+", "files": "25+", "users": "2+" },
      "date": "June 2025",
      "projectType": "College Group Project"
    },
    {
  "title": "Pixabay Clone",
  "subtitle": "Image Search App | College Project",
  "description": "React.js-based image search app using Pixabay REST API with modern state management through React Hooks and Context API.",
  "longDescription": "A college project built with React.js, replicating Pixabay's image search functionality. Integrated with the Pixabay REST API for dynamic image retrieval. Utilized React Hooks and Context API for efficient state management. The app features real-time search, image fetching, and a responsive user interface designed for optimal user experience.",
  "tech": ["React.js", "JavaScript", "REST API", "React Hooks", "Context API"],
  "features": [
    "Image Search Functionality",
    "Pixabay REST API Integration",
    "State Management with React Hooks & Context API",
    "Dynamic Image Rendering",
    "Responsive UI Design"
  ],
  "github": "https://github.com/Shripad21/Pixabay",
  "status": "Completed",
  "image": "project-images/pixabay-clone.png",
  "color": "from-purple-500 to-pink-500",
  "stats": { "commits": "3+", "files": "25+", "users": "2+" },
  "date": "April 2024",
  "projectType": "College Group Project"
},
{
  "title": "Kids Learning App",
  "subtitle": "Educational Android App | College Project | Diploma",
  "description": "Android-based learning app for kids with interactive modules and engaging UI, built using Java and XML in Android Studio.",
  "longDescription": "A college group project aimed at developing a simple yet engaging Android application for kids' learning. Built using Java and XML in Android Studio, the app features a variety of interactive learning modules designed to enhance children's active engagement. Focused on user-friendly design and educational value.",
  "tech": ["Android Studio", "Java", "XML", "Android SDK"],
  "features": [
    "Attractive User Interface for Kids",
    "Multiple Learning Modules",
    "Interactive UI Elements",
    "Simple Navigation for Better Engagement",
    "Offline Support (Optional)"
  ],
  "github": "https://github.com/LokeshAlli21/Kids-Learning-App",
  "status": "Completed",
  "image": "project-images/kids-learning-app.jpg",
  "color": "from-yellow-400 to-orange-500",
  "stats": { "commits": "3+", "files": "20+", "users": "2+" },
  "date": "March 2022",
  "projectType": "College Group Project"
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
<section id="projects" className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Enhanced Header */}
          <div className="text-center mb-24">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-xl border border-white/10 rounded-full mb-8">
              <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium text-blue-400">Portfolio Highlights</span>
            </div>
            
            <h2 className="text-6xl lg:text-7xl font-black mb-8 tracking-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
                Featured Projects
              </span>
            </h2>
            
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto leading-relaxed font-light">
              Showcasing <span className="text-white font-semibold">full-stack expertise</span> through innovative solutions, 
              from <span className="text-blue-400">modern UIs</span> to <span className="text-purple-400">scalable architectures</span>
            </p>
          </div>
          
          {/* Modern Grid Layout */}
          <div className="grid xl:grid-cols-2 gap-8 lg:gap-12">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="group relative rounded-3xl bg-gradient-to-br from-white/[0.08] to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 overflow-hidden"
                style={{
                  animationDelay: `${index * 200}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700`}></div>
                
                {/* Project Image with Advanced Effects */}
                <div className="relative h-72 lg:h-80 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-110 group-hover:brightness-110"
                  />
                  
                  {/* Floating Status Badge */}
                  <div className="absolute top-6 right-6 z-20">
                    <div className={`relative px-5 py-2 text-sm rounded-2xl font-bold backdrop-blur-xl border transform transition-all duration-500 group-hover:scale-110 ${
                      project.status === 'Live' ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30 shadow-emerald-500/25' :
                      project.status === 'Featured' ? 'bg-blue-500/20 text-blue-300 border-blue-500/30 shadow-blue-500/25' :
                      project.status === 'Production Ready' ? 'bg-violet-500/20 text-violet-300 border-violet-500/30 shadow-violet-500/25' :
                      'bg-cyan-500/20 text-cyan-300 border-cyan-500/30 shadow-cyan-500/25'
                    } shadow-xl`}>
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/10 to-transparent"></div>
                      {project.status}
                    </div>
                  </div>
                  
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 z-10"></div>
                </div>

                <div className="p-8 lg:p-10">
                  {/* Enhanced Project Header */}
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-3xl lg:text-4xl font-black text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-500">
                        {project.title}
                      </h3>
                      {project.projectType && (
                        <span className="text-xs px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full border border-purple-500/30">
                          {project.projectType}
                        </span>
                      )}
                    </div>
                    
                    <p className="text-blue-400 text-lg font-semibold mb-4">{project.subtitle}</p>
                    <p className="text-gray-300 text-lg leading-relaxed font-light">{project.description}</p>
                  </div>
                  
                  {/* Advanced Stats Grid */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8 p-6 bg-black/20 backdrop-blur-sm rounded-2xl border border-white/10">
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center justify-center w-10 h-10 bg-blue-500/20 rounded-xl mb-2 mx-auto">
                        <GitBranch className="w-5 h-5 text-blue-400" />
                      </div>
                      <p className="text-2xl font-bold text-white">{project.stats.commits}</p>
                      <p className="text-xs text-gray-400 font-medium">Commits</p>
                    </div>
                    
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center justify-center w-10 h-10 bg-green-500/20 rounded-xl mb-2 mx-auto">
                        <Code className="w-5 h-5 text-green-400" />
                      </div>
                      <p className="text-2xl font-bold text-white">{project.stats.files}</p>
                      <p className="text-xs text-gray-400 font-medium">Files</p>
                    </div>
                    
                    <div className="text-center group-hover:scale-105 transition-transform duration-300">
                      <div className="flex items-center justify-center w-10 h-10 bg-purple-500/20 rounded-xl mb-2 mx-auto">
                        <Users className="w-5 h-5 text-purple-400" />
                      </div>
                      <p className="text-2xl font-bold text-white">{project.stats.users}</p>
                      <p className="text-xs text-gray-400 font-medium">Contributors</p>
                    </div>
                    
                    {project.date && (
                      <div className="text-center group-hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-center w-10 h-10 bg-orange-500/20 rounded-xl mb-2 mx-auto">
                          <Calendar className="w-5 h-5 text-orange-400" />
                        </div>
                        <p className="text-sm font-bold text-white">{project.date}</p>
                        <p className="text-xs text-gray-400 font-medium">Released</p>
                      </div>
                    )}
                  </div>
                  
                  {/* Modern Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, i) => (
                        <span 
                          key={i} 
                          className="px-4 py-2 text-sm bg-gradient-to-r from-slate-800/80 to-slate-700/80 backdrop-blur-sm text-gray-200 rounded-xl font-semibold border border-white/10 hover:border-blue-400/50 hover:scale-105 transition-all duration-300 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Enhanced Features */}
                  <div className="mb-10">
                    <h4 className="text-lg font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-5 flex items-center gap-2">
                      <div className="w-1 h-6 bg-gradient-to-b from-green-400 to-blue-400 rounded-full"></div>
                      Key Features
                    </h4>
                    <div className="space-y-3">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <div 
                          key={i} 
                          className="flex items-start gap-4 p-3 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 hover:bg-white/10 transition-all duration-300 group/feature"
                        >
                          <div className="flex-shrink-0 w-6 h-6 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mt-0.5 group-hover/feature:scale-110 transition-transform duration-300">
                            <Star className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 font-medium leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Premium Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex-1 group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      <div className="relative flex items-center justify-center gap-3 font-bold text-lg">
                        <Github className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                        View Code
                      </div>
                    </a>
                    
                    {project.live && (
                      <a 
                        href={project.live} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 group/btn relative overflow-hidden px-8 py-4 bg-gradient-to-r from-transparent to-transparent border-2 border-blue-400 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:text-white text-blue-400 rounded-2xl transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 hover:border-transparent"
                      >
                        <div className="relative flex items-center justify-center gap-3 font-bold text-lg">
                          <ExternalLink className="w-5 h-5 group-hover/btn:-rotate-12 transition-transform duration-300" />
                          Live Demo
                        </div>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <style jsx="true">{`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes gradient-x {
            0%, 100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }
          
          .animate-gradient-x {
            background-size: 200% 200%;
            animation: gradient-x 4s ease infinite;
          }
        `}</style>
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