# Aqeed Kalburgi - Portfolio Website

A comprehensive, professional portfolio website built with Next.js 15, featuring a light background and resume-style layout with extensive content and full-stack functionality.

## 🚀 Features

### Frontend
- **Professional Design**: Light background with clean, modern styling
- **Resume-Style Layout**: Professional presentation similar to modern CVs
- **Rich Content**: Comprehensive sections showcasing skills, experience, and achievements
- **Smooth Animations**: Subtle Framer Motion animations with scroll triggers
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Interactive Elements**: Progress bars, hover effects, and micro-interactions
- **Modern UI/UX**: Clean cards, proper typography, and professional spacing

### Backend
- **Contact Form**: Functional contact form with AI-powered acknowledgments
- **Project Management**: Dynamic project showcase with detailed descriptions
- **Database Integration**: Prisma ORM with SQLite for data persistence
- **API Routes**: RESTful API for contact and projects
- **AI Integration**: ZAI SDK for intelligent responses

### Content Sections
1. **Hero**: Professional introduction with call-to-action buttons
2. **About**: Detailed professional summary with statistics
3. **Skills**: Technical skills with proficiency levels and progress bars
4. **Projects**: Featured projects with detailed descriptions and tech stacks
5. **Education**: Academic background with detailed information
6. **Experience**: Work history with achievements and responsibilities
7. **Certifications**: Professional certifications and achievements
8. **Contact**: Comprehensive contact form with detailed information

## 🛠️ Technology Stack

### Frontend
- **Next.js 15** with App Router
- **TypeScript 5**
- **Tailwind CSS 4**
- **Framer Motion** (Animations)
- **Lucide React** (Icons)
- **React Intersection Observer** (Scroll animations)

### Backend
- **Next.js API Routes**
- **Prisma ORM**
- **SQLite Database**
- **ZAI Web Dev SDK** (AI Integration)

### Development
- **ESLint** (Code quality)
- **TypeScript** (Type safety)

## 📦 Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the database:
   ```bash
   npm run db:push
   npx tsx prisma/seed.ts
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🎨 Design Features

### Professional Layout
- Clean, light background with subtle gradients
- Resume-style presentation with comprehensive content
- Professional typography and consistent spacing
- Subtle shadows and borders for depth
- Color-coded categories and sections

### Interactive Elements
- Animated skill progress bars
- Scroll-triggered animations
- Hover effects on cards and buttons
- Professional form validation
- Mobile-responsive navigation

### Content Highlights
- **Statistics Dashboard**: Experience, projects, and technology metrics
- **Skill Proficiency**: Visual progress bars for technical skills
- **Detailed Projects**: Comprehensive project descriptions with tech stacks
- **Professional Timeline**: Education and experience chronology
- **Certifications Grid**: Professional achievements and certifications
- **Enhanced Contact**: Detailed contact information with professional form

## 📊 Database Schema

### ContactMessage
- Stores contact form submissions
- Includes name, email, message, and timestamp

### Project
- Manages project portfolio
- Includes title, description, technologies, links
- Supports featured projects and detailed descriptions

### Visitor
- Tracks visitor analytics
- Stores IP, user agent, and path information

## 🔧 API Endpoints

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact` - Retrieve recent messages

### Projects
- `GET /api/projects` - Get all projects
- `POST /api/projects` - Create new project

## 🎯 Key Features

### Professional Content
- Comprehensive professional summary
- Detailed skill assessments with proficiency levels
- Rich project descriptions with technical details
- Complete education and experience timeline
- Professional certifications and achievements

### Interactive Elements
- Smooth scroll navigation with active states
- Mobile-responsive menu
- Form validation with AI-powered responses
- Progress bars and statistics
- Hover effects and micro-interactions

### Performance
- Optimized animations and transitions
- Lazy loading for better performance
- Efficient rendering with React
- SEO-friendly structure

### Accessibility
- Semantic HTML5 structure
- ARIA labels and descriptions
- Keyboard navigation support
- Screen reader compatibility

## 📈 Content Sections

### Hero Section
- Professional greeting and introduction
- Call-to-action buttons for contact and projects
- Social media links
- Subtle background patterns

### About Section
- Professional statistics (experience, projects, technologies)
- Detailed professional summary
- Career objectives and passion

### Skills Section
- Categorized technical skills
- Animated proficiency progress bars
- Color-coded skill categories
- Percentage indicators

### Projects Section
- Featured project showcase
- Detailed project descriptions
- Technology stack tags
- Live demo and repository links

### Education Section
- Academic qualifications
- Institution details and dates
- Field of study information
- Additional details about programs

### Experience Section
- Work history timeline
- Company information and dates
- Detailed responsibilities
- Key achievements and contributions

### Certifications Section
- Professional certifications
- Issuing organizations
- Completion dates
- Detailed descriptions

### Contact Section
- Comprehensive contact information
- Professional contact form
- Location and availability details
- Social media links

## 🚀 Deployment

The application is ready for deployment on platforms like:
- Vercel (recommended)
- Netlify
- Railway
- Digital Ocean

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Built with ❤️ using modern web technologies and best practices