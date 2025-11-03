'use client'

import { useState, useEffect, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  ExternalLink, 
  Code, 
  Database, 
  Globe, 
  Award,
  Briefcase,
  GraduationCap,
  Menu,
  X,
  ChevronDown,
  MapPin,
  Calendar,
  User,
  Star,
  Download,
  Terminal,
  Server,
  Cloud,
  Shield,
  Cpu,
  Layers,
  Zap,
  CheckCircle,
  Rocket,
  Palette,
  Smartphone,
  Wrench
} from 'lucide-react'
import { useInView } from 'react-intersection-observer'
import { ThemeToggle } from '@/components/theme-toggle'
import { AnimatedBackground } from '@/components/3d-background'

// Navigation Component
function Navigation({ isMenuOpen, setIsMenuOpen }: { isMenuOpen: boolean; setIsMenuOpen: (open: boolean) => void }) {
  const { scrollY } = useScroll()
  const backgroundColor = useTransform(scrollY, [0, 100], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.95)'])
  const borderColor = useTransform(scrollY, [0, 100], ['transparent', 'rgba(0,0,0,0.1)'])
  const darkBackgroundColor = useTransform(scrollY, [0, 100], ['rgba(17,24,39,0)', 'rgba(17,24,39,0.95)'])
  const darkBorderColor = useTransform(scrollY, [0, 100], ['transparent', 'rgba(255,255,255,0.1)'])
  
  const navItems = ['Home', 'About', 'Skills', 'Projects', 'Achievements', 'Contact']

  return (
    <motion.nav 
      className="fixed top-0 w-full z-50 backdrop-blur-md transition-all duration-300"
      style={{ 
        backgroundColor: backgroundColor,
        borderBottom: `1px solid ${borderColor}`
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div 
            className="text-2xl font-bold text-gray-900 dark:text-white"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            AK
          </motion.div>
          
          <div className="hidden md:flex space-x-8 items-center">
            {navItems.map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors font-medium"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {item}
              </motion.a>
            ))}
            <ThemeToggle />
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              className="text-gray-900 dark:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-3 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

// Hero Section
function HeroSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.02] dark:opacity-[0.05]"></div>
      
      <div ref={ref} className="relative z-10 max-w-4xl mx-auto text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.p 
            className="text-lg md:text-xl text-blue-600 font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Hello, I'm
          </motion.p>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-bold mb-4 text-gray-900 dark:text-white"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={inView ? { scale: 1, opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Aqeed Kalburgi
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-6 font-light"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Full Stack Developer | Java Specialist
          </motion.p>

          <motion.p 
            className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Building scalable web applications with expertise in Java, Spring Boot, and modern web technologies. 
            Passionate about creating innovative solutions and delivering high-quality code.
          </motion.p>
          
          <motion.div 
            className="flex justify-center space-x-6 mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="https://github.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:aqeedkalburgi007@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
              <Mail size={24} />
            </a>
          </motion.div>

          <motion.div 
            className="flex justify-center space-x-4 mb-12"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <a 
              href="#contact" 
              className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get In Touch
            </a>
            <a 
              href="#projects" 
              className="px-8 py-3 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
            >
              View Projects
            </a>
          </motion.div>
          
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ChevronDown className="mx-auto text-gray-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

// Professional Card Component with 3D effects
function ProfessionalCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <motion.div
      className={`bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 preserve-3d ${className}`}
      style={{
        transformStyle: 'preserve-3d',
        perspective: '1000px'
      }}
      whileHover={{ 
        rotateY: 5,
        rotateX: -5,
        scale: 1.02,
        z: 50
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      animate={{
        rotateY: isHovered ? 5 : 0,
        rotateX: isHovered ? -5 : 0,
        scale: isHovered ? 1.02 : 1,
        z: isHovered ? 50 : 0
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <div className="relative z-10">
        {children}
      </div>
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-lg pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  )
}

// About Section
function AboutSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          About Me
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">1+</div>
            <div className="text-gray-600">Years Experience</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">10+</div>
            <div className="text-gray-600">Projects Completed</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-center"
          >
            <div className="text-3xl font-bold text-blue-600 mb-2">5+</div>
            <div className="text-gray-600">Technologies</div>
          </motion.div>
        </div>
        
        <ProfessionalCard className="p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I am a proactive and versatile Full Stack / Java Developer with hands-on experience in building scalable web applications and backend systems. My expertise spans across Java, Spring Boot, Hibernate, REST APIs, and modern web technologies, with a strong foundation in data structures, algorithms, and database management.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I have developed real-time applications, predictive models, and collaborative platforms throughout my career. As a quick learner and problem-solver, I am passionate about delivering innovative, maintainable, and high-quality solutions that make a real impact.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I thrive in both independent and team environments, consistently working towards achieving project goals with excellence and dedication to best practices in software development.
            </p>
          </motion.div>
        </ProfessionalCard>
      </div>
    </section>
  )
}

// Skills Section
function SkillsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const skills = [
    {
      category: "Programming & OOP",
      icon: <Code className="text-blue-600" />,
      items: [
        "Java (SE)",
        "Object-Oriented Programming", 
        "Data Structures & Algorithms",
        "Exception Handling",
        "Multithreading",
        "Python"
      ],
    },
    {
      category: "Frameworks & Tools",
      icon: <Layers className="text-green-600" />,
      items: [
        "Spring Boot",
        "Hibernate",
        "REST APIs",
        "Microservices",
        "Maven",
        "Git"
      ],
    },
    {
      category: "Databases",
      icon: <Database className="text-purple-600" />,
      items: [
        "MySQL",
        "MongoDB",
        "Oracle",
        "Redis",
        "PostgreSQL"
      ],
    },
    {
      category: "Web Technologies",
      icon: <Globe className="text-orange-600" />,
      items: [
        "HTML/CSS",
        "JavaScript",
        "React.js",
        "Node.js",
        "Express.js"
      ],
    }
  ]

  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Technical Skills
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillGroup, index) => (
            <ProfessionalCard key={skillGroup.category}>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-6">
                  {skillGroup.icon}
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ duration: 0.3, delay: index * 0.1 + skillIndex * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </ProfessionalCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Projects Section
function ProjectsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  // Function to get icon based on project title/type
  const getProjectIcon = (title: string) => {
    const lowerTitle = title.toLowerCase()
    if (lowerTitle.includes('idea') || lowerTitle.includes('board')) return <Palette className="text-blue-600" />
    if (lowerTitle.includes('career') || lowerTitle.includes('prediction')) return <Rocket className="text-green-600" />
    if (lowerTitle.includes('student') || lowerTitle.includes('stride')) return <GraduationCap className="text-purple-600" />
    if (lowerTitle.includes('job') || lowerTitle.includes('nest')) return <Briefcase className="text-orange-600" />
    if (lowerTitle.includes('mobile') || lowerTitle.includes('app')) return <Smartphone className="text-pink-600" />
    if (lowerTitle.includes('ai') || lowerTitle.includes('ml')) return <Cpu className="text-red-600" />
    return <Code className="text-gray-600" />
  }

  useEffect(() => {
    fetch('/api/projects')
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setProjects(data.projects)
        }
      })
      .catch(error => console.error('Error fetching projects:', error))
      .finally(() => setLoading(false))
  }, [])

  if (loading) {
    return (
      <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="text-center text-gray-600 dark:text-gray-400">Loading projects...</div>
        </div>
      </section>
    )
  }

  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Featured Projects
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project: any, index) => (
            <ProfessionalCard key={project.id}>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className="mr-3">
                      {getProjectIcon(project.title)}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                  </div>
                  {project.featured && (
                    <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 4).map((tech: string) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 bg-gray-100 text-gray-500 rounded text-sm">
                      +{project.technologies.length - 4} more
                    </span>
                  )}
                </div>
                <div className="flex space-x-4">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      className="text-blue-600 hover:text-blue-700 transition-colors flex items-center text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      className="text-blue-600 hover:text-blue-700 transition-colors flex items-center text-sm font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </ProfessionalCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Key Achievements Section
function KeyAchievementsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const achievements = [
    {
      title: "StudentStride.in",
      description: "Built a comprehensive educational platform offering curated study materials, free certifications, and AI-powered career guidance for students. Implemented user dashboards, progress tracking, and interactive learning features.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop&crop=entropy&auto=format",
      url: "https://www.studentstride.in",
      technologies: ["React.js", "Node.js", "MongoDB", "AI/ML"],
      stats: {
        users: "10,000+",
        courses: "50+",
        completion: "85%"
      },
      icon: <GraduationCap className="text-blue-600" />,
      featured: true
    },
    {
      title: "JobNest.in",
      description: "Developed a job recommendation and internship platform with user authentication and application tracking. Integrated job boards, AI-based resume matching, and interactive dashboards.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=entropy&auto=format",
      url: "https://job-portal-xi-one.vercel.app/",
      technologies: ["React.js", "Node.js", "Express", "MongoDB", "REST APIs"],
      stats: {
        jobs: "5,000+",
        companies: "500+",
        placements: "1,200+"
      },
      icon: <Briefcase className="text-green-600" />,
      featured: true
    },
    {
      title: "Well Performed Info",
      description: "Created an information aggregation platform providing real-time data analytics and insights. Features include customizable dashboards, data visualization, and automated reporting systems.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=entropy&auto=format",
      url: "#",
      technologies: ["Java", "Spring Boot", "React", "PostgreSQL", "Analytics"],
      stats: {
        dataPoints: "1M+",
        reports: "10K+",
        accuracy: "99.5%"
      },
      icon: <Database className="text-purple-600" />,
      featured: false
    }
  ]

  return (
    <section id="achievements" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Key Achievements
        </motion.h2>
        
        <motion.p 
          className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.2 }}
        >
          Successfully launched and scaled three innovative startups that are making a real impact in education and career development.
        </motion.p>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <ProfessionalCard key={achievement.title} className="overflow-hidden group">
              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Image Section */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={achievement.image} 
                    alt={achievement.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  
                  {/* Featured Badge */}
                  {achievement.featured && (
                    <motion.div
                      className="absolute top-4 right-4 px-3 py-1 bg-yellow-500 text-white text-xs font-bold rounded-full"
                      initial={{ scale: 0 }}
                      animate={inView ? { scale: 1 } : {}}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      FEATURED
                    </motion.div>
                  )}
                  
                  {/* Icon Overlay */}
                  <div className="absolute bottom-4 left-4">
                    <div className="p-2 bg-white/90 dark:bg-gray-800/90 rounded-lg backdrop-blur-sm">
                      {achievement.icon}
                    </div>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {achievement.title}
                    </h3>
                    {achievement.url && achievement.url !== "#" && (
                      <a
                        href={achievement.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 transition-colors"
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {achievement.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    {Object.entries(achievement.stats).map(([key, value]) => (
                      <div key={key} className="text-center">
                        <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
                          {value}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 capitalize">
                          {key.replace(/([A-Z])/g, ' $1').trim()}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {achievement.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {achievement.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-xs">
                        +{achievement.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            </ProfessionalCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Education Section
function EducationSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const education = [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science – Artificial Intelligence & Machine Learning",
      institution: "Nagarjuna College Of Engineering And Technology, India",
      period: "2022 – 2025",
      icon: <GraduationCap className="text-blue-600" />,
      details: "Specialized in AI/ML with focus on machine learning algorithms, neural networks, and data science applications."
    },
    {
      degree: "Diploma in Computer Science",
      field: "",
      institution: "Motichand Lengade Bharatesh Polytechnic, India",
      period: "2019 – 2021",
      icon: <Award className="text-green-600" />,
      details: "Foundation in computer science fundamentals, programming languages, and software development principles."
    }
  ]

  return (
    <section id="education" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Education
        </motion.h2>
        
        <div className="space-y-6">
          {education.map((edu, index) => (
            <ProfessionalCard key={edu.degree}>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {edu.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{edu.degree}</h3>
                    {edu.field && <p className="text-gray-600 mb-2">{edu.field}</p>}
                    <p className="text-gray-700 mb-1">{edu.institution}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={14} className="mr-1" />
                      {edu.period}
                    </div>
                    {edu.details && <p className="text-gray-600 text-sm">{edu.details}</p>}
                  </div>
                </div>
              </motion.div>
            </ProfessionalCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Experience Section
function ExperienceSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Kodnest (Training)",
      period: "Jul 2025 – Present",
      location: "India",
      description: "Currently undergoing comprehensive training as a Java & Python Full Stack Developer. Working on hands-on projects to strengthen backend and frontend development skills with modern technologies and best practices.",
      achievements: [
        "Developing full-stack applications using Java, Spring Boot, and React",
        "Learning advanced concepts in microservices and cloud deployment",
        "Collaborating on team projects with version control and agile methodologies"
      ],
      icon: <Briefcase className="text-blue-600" />
    },
    {
      title: "Intern",
      company: "Aqmenz Automation Pvt. Ltd.",
      period: "Oct 2023 – Nov 2023",
      location: "India",
      description: "Developed a real-time AI & Data Science application as an end-to-end project. Applied coding expertise to build functional modules and implement data-driven solutions.",
      achievements: [
        "Built end-to-end AI/ML application with real-time data processing",
        "Implemented predictive models using Python and machine learning libraries",
        "Gained practical exposure to live project development and deployment"
      ],
      icon: <Briefcase className="text-green-600" />
    }
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Professional Experience
        </motion.h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <ProfessionalCard key={exp.title}>
              <motion.div
                className="p-6"
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-start">
                  <div className="mr-4 mt-1">
                    {exp.icon}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-gray-700 mb-2">{exp.company}</p>
                    <div className="flex items-center text-gray-500 text-sm mb-3">
                      <Calendar size={14} className="mr-1" />
                      {exp.period}
                      <MapPin size={14} className="ml-3 mr-1" />
                      {exp.location}
                    </div>
                    <p className="text-gray-600 mb-4">{exp.description}</p>
                    {exp.achievements && (
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start text-sm text-gray-600">
                            <CheckCircle size={14} className="mr-2 mt-0.5 text-green-500 flex-shrink-0" />
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              </motion.div>
            </ProfessionalCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Certifications Section
function CertificationsSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  
  const certifications = [
    {
      name: "VTU Elite Gold – Job-Ready Pro",
      issuer: "VTU",
      date: "2024",
      description: "Python, React, MS Office, Data Structures & Interview Mastery",
      icon: <Award className="text-blue-600" />,
      level: "Advanced",
      credentialId: "VTU-ELITE-2024-001",
      color: "blue"
    },
    {
      name: "End-to-End AI & Data Science Solutions",
      issuer: "INDOSKILL",
      date: "2023",
      description: "Comprehensive AI and Data Science training with practical implementations",
      icon: <Award className="text-green-600" />,
      level: "Professional",
      credentialId: "INDOSKILL-AI-2023-042",
      color: "green"
    },
    {
      name: "Basics of Python",
      issuer: "INFOSYS",
      date: "2023",
      description: "Fundamental Python programming concepts and applications",
      icon: <Award className="text-purple-600" />,
      level: "Foundation",
      credentialId: "INFOSYS-PY-2023-789",
      color: "purple"
    },
    {
      name: "Data Structures and Algorithms using Java",
      issuer: "INFOSYS",
      date: "2023",
      description: "Advanced data structures and algorithmic problem-solving with Java",
      icon: <Award className="text-orange-600" />,
      level: "Intermediate",
      credentialId: "INFOSYS-DSA-2023-456",
      color: "orange"
    },
    {
      name: "Python (Programming & Application Development)",
      issuer: "TECHNICAL HUB",
      date: "2022",
      description: "Python programming with focus on application development",
      icon: <Award className="text-red-600" />,
      level: "Professional",
      credentialId: "TECHHUB-PY-2022-123",
      color: "red"
    }
  ]

  return (
    <section id="certifications" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Certifications & Achievements
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <ProfessionalCard key={cert.name} className="overflow-hidden group hover:shadow-2xl">
              <motion.div
                className="relative"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {/* Header with gradient background */}
                <div className={`h-2 bg-gradient-to-r ${
                  cert.color === 'blue' ? 'from-blue-500 to-blue-600' :
                  cert.color === 'green' ? 'from-green-500 to-green-600' :
                  cert.color === 'purple' ? 'from-purple-500 to-purple-600' :
                  cert.color === 'orange' ? 'from-orange-500 to-orange-600' :
                  'from-red-500 to-red-600'
                }`} />
                
                <div className="p-6">
                  {/* Icon and Level Badge */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center">
                      <div className={`p-3 ${
                        cert.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/30' :
                        cert.color === 'green' ? 'bg-green-100 dark:bg-green-900/30' :
                        cert.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/30' :
                        cert.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/30' :
                        'bg-red-100 dark:bg-red-900/30'
                      } rounded-lg mr-3`}>
                        {cert.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white leading-tight">
                          {cert.name}
                        </h3>
                        <span className={`inline-block px-2 py-1 ${
                          cert.color === 'blue' ? 'bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-200' :
                          cert.color === 'green' ? 'bg-green-100 dark:bg-green-900/50 text-green-800 dark:text-green-200' :
                          cert.color === 'purple' ? 'bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-200' :
                          cert.color === 'orange' ? 'bg-orange-100 dark:bg-orange-900/50 text-orange-800 dark:text-orange-200' :
                          'bg-red-100 dark:bg-red-900/50 text-red-800 dark:text-red-200'
                        } text-xs font-semibold rounded-full mt-1`}>
                          {cert.level}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Issuer and Date */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <div className="w-2 h-2 bg-green-500 rounded-full mr-2" />
                      <span className="font-medium">{cert.issuer}</span>
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                      <Calendar size={14} className="mr-1" />
                      {cert.date}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Credential ID */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      ID: {cert.credentialId}
                    </div>
                    <motion.button
                      className="text-xs text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium flex items-center"
                      whileHover={{ x: 2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Verify
                      <ExternalLink size={12} className="ml-1" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover effect overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 pointer-events-none rounded-lg"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </ProfessionalCard>
          ))}
        </div>
      </div>
    </section>
  )
}

// Contact Section
function ContactSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 })
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [responseMessage, setResponseMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setSubmitStatus('success')
        setResponseMessage(data.acknowledgment)
        setFormData({ name: '', email: '', message: '' })
      } else {
        setSubmitStatus('error')
        setResponseMessage(data.error || 'Failed to send message')
      }
    } catch (error) {
      setSubmitStatus('error')
      setResponseMessage('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  
  return (
    <section id="contact" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          ref={ref}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          Get In Touch
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ProfessionalCard>
            <motion.div
              className="p-6 h-full"
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology. Feel free to reach out!
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center text-gray-600">
                  <Mail className="mr-3" size={20} />
                  <div>
                    <div className="font-medium">Email</div>
                    <div className="text-sm">aqeedkalburgi007@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <Phone className="mr-3" size={20} />
                  <div>
                    <div className="font-medium">Phone</div>
                    <div className="text-sm">+91 96118 30896</div>
                  </div>
                </div>
                <div className="flex items-center text-gray-600">
                  <MapPin className="mr-3" size={20} />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm">India</div>
                  </div>
                </div>
              </div>
              
              <div className="flex space-x-6">
                <a href="https://github.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github size={24} />
                </a>
                <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin size={24} />
                </a>
              </div>
            </motion.div>
          </ProfessionalCard>

          <ProfessionalCard>
            <motion.div
              className="p-6"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Send a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message here..."
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                    required
                  />
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
              
              {submitStatus !== 'idle' && (
                <motion.div
                  className={`mt-4 p-4 rounded-lg text-center ${
                    submitStatus === 'success' 
                      ? 'bg-green-50 border border-green-200 text-green-700' 
                      : 'bg-red-50 border border-red-200 text-red-700'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {responseMessage}
                </motion.div>
              )}
            </motion.div>
          </ProfessionalCard>
        </div>
      </div>
    </section>
  )
}

// Footer
function Footer() {
  return (
    <footer className="py-12 px-4 bg-gray-900 dark:bg-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Aqeed Kalburgi</h3>
            <p className="text-gray-400">
              Full Stack Developer passionate about building scalable web applications and innovative solutions.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#about" className="block text-gray-400 hover:text-white transition-colors">About</a>
              <a href="#projects" className="block text-gray-400 hover:text-white transition-colors">Projects</a>
              <a href="#contact" className="block text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a href="https://github.com" className="text-gray-400 hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:aqeedkalburgi007@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Aqeed Kalburgi. Built with passion and modern web technologies.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <AnimatedBackground />
      <Navigation isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <KeyAchievementsSection />
      <EducationSection />
      <ExperienceSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
