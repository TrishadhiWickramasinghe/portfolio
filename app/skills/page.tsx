'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components';
import {
  SiReact,
  SiFlutter,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiPython,
  SiMongodb,
  SiPostgresql,
  SiSupabase,
  SiGit,
  SiExpo,
  SiCloudinary,
} from 'react-icons/si';

export default function Skills() {
  const skillCategories = [
    {
      name: 'Frontend',
      skills: [
        { title: 'React JS', icon: SiReact, proficiency: 90 },
        { title: 'React Native', icon: SiReact, proficiency: 85 },
        { title: 'Flutter', icon: SiFlutter, proficiency: 80 },
        { title: 'TypeScript', icon: SiTypescript, proficiency: 88 },
        { title: 'Tailwind CSS', icon: SiTailwindcss, proficiency: 92 },
      ],
    },
    {
      name: 'Backend',
      skills: [
        { title: 'Node.js', icon: SiNodedotjs, proficiency: 85 },
        { title: 'FastAPI', icon: SiPython, proficiency: 82 },
        { title: 'REST APIs', icon: SiNodedotjs, proficiency: 88 },
      ],
    },
    {
      name: 'Database',
      skills: [
        { title: 'MongoDB', icon: SiMongodb, proficiency: 85 },
        { title: 'PostgreSQL', icon: SiPostgresql, proficiency: 80 },
        { title: 'Supabase', icon: SiSupabase, proficiency: 83 },
      ],
    },
    {
      name: 'Tools & DevOps',
      skills: [
        { title: 'Git', icon: SiGit, proficiency: 90 },
        { title: 'Expo', icon: SiExpo, proficiency: 85 },
        { title: 'Cloudinary', icon: SiCloudinary, proficiency: 78 },
      ],
    },
    {
      name: 'Soft Skills',
      softSkills: [
        'Teamwork',
        'Creativity',
        'Communication',
        'Problem Solving',
        'Hardworking',
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
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
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Technical expertise and professional capabilities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Skills Sections */}
      {skillCategories.map((category, categoryIndex) => (
        <section
          key={category.name}
          className={`py-20 px-4 sm:px-6 lg:px-8 ${
            categoryIndex % 2 === 1 ? 'bg-gray-50 dark:bg-gray-900' : ''
          }`}
        >
          <div className="max-w-6xl mx-auto">
            <SectionTitle
              title={category.name}
              accent={category.name.split(' ').pop()}
            />

            {/* Technical Skills */}
            {category.skills && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  return (
                    <motion.div
                      key={skill.title}
                      variants={itemVariants}
                      className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2"
                    >
                      {/* Icon */}
                      <div className="mb-4">
                        <Icon className="text-5xl text-blue-600 dark:text-blue-400" />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                        {skill.title}
                      </h3>

                      {/* Progress Bar */}
                      <div className="space-y-2">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
                            Proficiency
                          </span>
                          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">
                            {skill.proficiency}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.proficiency}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                          />
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </motion.div>
            )}

            {/* Soft Skills */}
            {category.softSkills && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {category.softSkills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-all"
                  >
                    <h3 className="text-xl font-bold text-center">{skill}</h3>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </div>
        </section>
      ))}

      {/* Skills Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 to-purple-700">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Continuous Learning & Growth
            </h2>
            <p className="text-lg text-blue-100 mb-8 leading-relaxed">
              I'm passionate about staying updated with the latest technologies and industry trends. My journey is driven by curiosity, commitment to excellence, and a growth mindset that pushes me to constantly improve and expand my skill set.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              {[
                { number: '5+', label: 'Tech Stacks' },
                { number: '15+', label: 'Projects' },
                { number: '100%', label: 'Dedication' },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 rounded-lg bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20"
                >
                  <h3 className="text-4xl font-bold mb-2">{stat.number}</h3>
                  <p className="text-lg text-blue-100">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
