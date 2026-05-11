'use client';

import { motion } from 'framer-motion';
import { ProjectCard } from '@/components';

export default function Projects() {
  const allProjects = [
    {
      title: 'Full Stack E-commerce Platform',
      description:
        'Comprehensive e-commerce solution with product catalog, shopping cart, payment processing via Stripe, user authentication, and admin dashboard for inventory management.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Stripe API',
        'PostgreSQL',
        'Tailwind CSS',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '🛒',
    },
    {
      title: 'Collaborative Task Management App',
      description:
        'Real-time task management platform enabling team collaboration with drag-and-drop functionality, priority levels, deadlines, notifications, and progress tracking.',
      technologies: ['React', 'Firebase', 'Redux', 'Tailwind CSS', 'Socket.io'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '✅',
    },
    {
      title: 'Real-time Chat Application',
      description:
        'Feature-rich messaging platform with user profiles, one-on-one and group chats, message encryption, typing indicators, online status, and media sharing capabilities.',
      technologies: [
        'Node.js',
        'Express',
        'Socket.io',
        'MongoDB',
        'React',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '💬',
    },
    {
      title: 'Personal Portfolio Website',
      description:
        'Modern, responsive portfolio showcasing projects and skills with smooth animations, dark/light mode toggle, contact form, and SEO optimization.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '🌐',
    },
    {
      title: 'Weather Forecast Application',
      description:
        'Real-time weather application with location search, 5-day forecasts, interactive maps, weather alerts, and historical data visualization.',
      technologies: ['React', 'Weather API', 'Chart.js', 'Tailwind CSS'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '🌤️',
    },
    {
      title: 'Movie Recommendation Engine',
      description:
        'Smart movie recommendation system using machine learning algorithms, user preferences, and collaborative filtering to suggest personalized content.',
      technologies: [
        'Python',
        'Machine Learning',
        'React',
        'FastAPI',
        'PostgreSQL',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '🎬',
    },
    {
      title: 'Code Snippet Manager',
      description:
        'Developer tool for saving, organizing, and sharing code snippets with syntax highlighting, tagging, search functionality, and dark mode support.',
      technologies: [
        'Next.js',
        'MongoDB',
        'TypeScript',
        'Highlight.js',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '💾',
    },
    {
      title: 'Fitness Tracking Dashboard',
      description:
        'Comprehensive fitness application with workout logging, progress tracking, goal setting, nutrition tracking, and detailed analytics with charts.',
      technologies: [
        'React',
        'Node.js',
        'MongoDB',
        'Chart.js',
        'Tailwind CSS',
      ],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '💪',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              My Projects
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of full-stack applications showcasing my expertise in modern web
              development, problem-solving, and user-centric design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {allProjects.map((project) => (
              <motion.div key={project.title} variants={itemVariants}>
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Have a Project in Mind?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              I'm always interested in collaborating on innovative projects.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-shadow"
            >
              Let's Talk
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
