'use client';

import { motion } from 'framer-motion';
import { SkillCard } from '@/components';
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiMongodb,
  SiPostgresql,
  SiGit,
  SiDocker,
  SiFigma,
  SiTailwindcss,
} from 'react-icons/si';

export default function About() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { title: 'React', icon: SiReact },
        { title: 'Next.js', icon: SiNextdotjs },
        { title: 'TypeScript', icon: SiTypescript },
        { title: 'Tailwind CSS', icon: SiTailwindcss },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { title: 'Node.js', icon: SiNodedotjs },
        { title: 'PostgreSQL', icon: SiPostgresql },
        { title: 'MongoDB', icon: SiMongodb },
        { title: 'REST APIs', icon: SiNodedotjs },
      ],
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { title: 'Git', icon: SiGit },
        { title: 'Docker', icon: SiDocker },
        { title: 'Figma', icon: SiFigma },
        { title: 'CI/CD', icon: SiGit },
      ],
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
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Passionate developer committed to creating exceptional digital experiences
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left - Story */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
                My Journey
              </h2>
              <div className="space-y-4 text-gray-600 dark:text-gray-400 text-lg">
                <p>
                  I'm a software engineering student with a passion for building scalable,
                  user-centric web applications. My journey in tech began with a curiosity
                  about how things work, and it has evolved into a deep commitment to
                  writing clean, efficient code.
                </p>
                <p>
                  Throughout my academic journey and personal projects, I've developed a
                  strong foundation in full-stack development. I believe in the power of
                  technology to solve real-world problems and improve people's lives.
                </p>
                <p>
                  I'm constantly learning and exploring new technologies, best practices,
                  and design patterns. Whether it's building responsive UIs or architecting
                  scalable backends, I approach every project with dedication and creativity.
                </p>
              </div>
            </motion.div>

            {/* Right - Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { number: '15+', label: 'Projects Built' },
                { number: '2+', label: 'Years Experience' },
                { number: '100%', label: 'Passion & Dedication' },
                { number: '∞', label: 'Growth Mindset' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900 text-center"
                >
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-300 mb-2">
                    {stat.number}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Technologies & Skills
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Tools and technologies I work with to build modern web applications
            </p>
          </motion.div>

          {/* Skills by Category */}
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              className="mb-16"
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
                {category.name}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                className="grid grid-cols-2 md:grid-cols-4 gap-6"
              >
                {category.skills.map((skill) => (
                  <motion.div key={skill.title} variants={itemVariants}>
                    <SkillCard {...skill} />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Career Goals Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Career Goals
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Master Full Stack',
                  description:
                    'Become an expert in building end-to-end applications with modern technologies',
                },
                {
                  title: 'Drive Innovation',
                  description:
                    'Create solutions that positively impact users and solve complex problems',
                },
                {
                  title: 'Lead & Mentor',
                  description:
                    'Share knowledge and mentor junior developers in their growth journey',
                },
              ].map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 border border-blue-100 dark:border-gray-600"
                >
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {goal.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">{goal.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
