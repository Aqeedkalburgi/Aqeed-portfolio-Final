import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const projects = [
  {
    title: "Idea Board",
    description: "A comprehensive collaborative idea management platform featuring user authentication, real-time CRUD operations, and instant updates. Built with a focus on exceptional UI/UX design and backend scalability, this platform enables teams to brainstorm, organize, and develop ideas collaboratively with advanced filtering and search capabilities.",
    technologies: JSON.stringify(["React.js", "Node.js", "Express", "MongoDB", "Socket.io", "JWT", "Java Backend"]),
    icon: "Sparkles",
    gradient: "from-violet-500 to-purple-600",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "Career Prediction System",
    description: "An intelligent career guidance system leveraging machine learning algorithms including KNN, Random Forest, and Decision Tree models. The system analyzes user data to provide personalized career path recommendations, featuring comprehensive data preprocessing, feature selection, and performance evaluation metrics to ensure accurate predictions.",
    technologies: JSON.stringify(["Python", "Scikit-learn", "Pandas", "NumPy", "Flask", "Machine Learning"]),
    icon: "Cpu",
    gradient: "from-purple-500 to-pink-600",
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true
  },
  {
    title: "StudentStride.in",
    description: "An innovative educational platform offering curated study materials, free certification courses, and AI-powered career guidance. Features include comprehensive user dashboards, progress tracking systems, interactive learning modules, and personalized recommendations to enhance the student learning experience.",
    technologies: JSON.stringify(["HTML", "CSS", "JavaScript", "React.js", "Node.js", "MongoDB", "Tailwind CSS"]),
    icon: "GraduationCap",
    gradient: "from-pink-500 to-rose-600",
    githubUrl: "https://github.com",
    liveUrl: "https://studentstride.in",
    featured: false
  },
  {
    title: "JobNest.in",
    description: "A sophisticated job recommendation and internship platform featuring user authentication, comprehensive application tracking systems, AI-powered resume matching algorithms, and interactive analytics dashboards. The platform connects job seekers with relevant opportunities while providing employers with advanced candidate filtering tools.",
    technologies: JSON.stringify(["React.js", "Node.js", "Express", "MongoDB", "REST APIs", "Natural Language Processing"]),
    icon: "Briefcase",
    gradient: "from-rose-500 to-orange-600",
    githubUrl: "https://github.com",
    liveUrl: "https://jobnest.in",
    featured: false
  }
]

async function main() {
  console.log('Start seeding...')
  
  // Clean existing projects
  await prisma.project.deleteMany()
  
  // Insert projects
  for (const project of projects) {
    await prisma.project.create({
      data: project
    })
  }
  
  console.log('Seeding finished.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })