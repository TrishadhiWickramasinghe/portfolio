'use client';

import { motion } from 'framer-motion';
import { HeroSection, ProjectCard } from '@/components';

export default function Home() {
  const featuredProjects = [
    {
      title: 'E-commerce Platform',
      description:
        'Full-stack e-commerce application with payment integration, product management, and user authentication.',
      technologies: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '🛒',
    },
    {
      title: 'Task Management App',
      description:
        'Collaborative task management tool with real-time updates, team collaboration, and productivity analytics.',
      technologies: ['React', 'Firebase', 'Tailwind CSS', 'Redux'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '✅',
    },
    {
      title: 'Chat Application',
      description:
        'Real-time messaging platform with user profiles, group chats, and notification system.',
      technologies: ['Node.js', 'Socket.io', 'MongoDB', 'React'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '💬',
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Featured Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Showcase of my recent work and technical expertise
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </div>

          {/* View All Projects Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <a
              href="/projects"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg transition-shadow"
            >
              View All Projects →
            </a>
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
              Let's Build Something Amazing Together
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to start your next project? Let's talk about your ideas.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-xl transition-shadow"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>
    </>
  );
}
