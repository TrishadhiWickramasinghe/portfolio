'use client';

import { motion } from 'framer-motion';
import { ProjectCard, SectionTitle } from '@/components';

export default function Projects() {
  const allProjects = [
    {
      title: 'BTY-HUB – E-Commerce Platform',
      description:
        'Developed a full-stack e-commerce platform with a React frontend and FastAPI backend. Implemented JWT authentication, product management, shopping cart, order management, wishlist, reviews, ratings, and an admin analytics dashboard.',
      technologies: ['FastAPI', 'React JS', 'MongoDB', 'JWT', 'Motor', 'Pydantic'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '🛒',
    },
    {
      title: 'SubTrack – Subscription Management App',
      description:
        'Built a cross-platform mobile application for tracking subscriptions, budgeting, and financial analytics with smart reminders and real-time synchronization.',
      technologies: ['React Native', 'Expo', 'TypeScript', 'Supabase'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '📱',
      badge: 'Ongoing Project',
    },
    {
      title: 'Remnantborn – Realm Clash RPG Companion App',
      description:
        'Contributing to a sci-fi RPG companion app with character management, squad systems, duels, inventory management, and real-time multiplayer features.',
      technologies: ['Flutter', 'Dart', 'Supabase', 'Node.js', 'Socket.IO', 'Cloudinary'],
      githubUrl: 'https://github.com',
      liveUrl: 'https://example.com',
      image: '🎮',
      badge: 'Ongoing Project',
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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              A collection of full-stack applications and mobile apps showcasing my expertise in modern development, problem-solving, and innovative design.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionTitle title="Featured Projects" accent="Projects" />
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
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

      {/* Project Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Project Highlights" accent="Highlights" />
          
          {/* BTY-HUB Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16 bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">BTY-HUB Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              {[
                'JWT Authentication',
                'Product CRUD Operations',
                'Shopping Cart Management',
                'Wishlist Functionality',
                'Admin Dashboard',
                'Sales Analytics',
                'Image Uploads',
                'RESTful APIs',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-blue-600 dark:text-blue-400 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* SubTrack Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="mb-16 bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">SubTrack Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              {[
                'Budget Tracking',
                'MRR/ARR Analytics',
                'Category Insights',
                'Smart Payment Reminders',
                'Supabase Authentication',
                'Real-time Sync',
                'Cross-platform Support',
                'Financial Dashboard',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-purple-600 dark:text-purple-400 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Remnantborn Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 border border-gray-200 dark:border-gray-700"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Remnantborn Features</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700 dark:text-gray-300">
              {[
                'Interactive Zone Map',
                'Squad Management',
                'Daily Rewards System',
                'Player Inventory',
                'Real-time Messaging',
                'Dark Themed UI',
                'Character Management',
                'Multiplayer Duels',
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="text-pink-600 dark:text-pink-400 font-bold">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
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
              I'm always interested in collaborating on innovative projects that make an impact.
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
