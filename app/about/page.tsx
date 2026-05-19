'use client';

import { motion } from 'framer-motion';
import { SectionTitle } from '@/components';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export default function About() {
  const personalDetails = [
    { label: 'Date of Birth', value: '18 September 2002', icon: FaCalendarAlt },
    { label: 'Gender', value: 'Female', icon: FaCalendarAlt },
    { label: 'Nationality', value: 'Sri Lankan', icon: FaMapMarkerAlt },
    { label: 'Religion', value: 'Catholic', icon: FaCalendarAlt },
    { label: 'Civil Status', value: 'Unmarried', icon: FaCalendarAlt },
    { label: 'Languages', value: 'Sinhala, English', icon: FaCalendarAlt },
  ];

  const education = [
    {
      degree: 'Higher National Diploma (HND) in Software Engineering',
      institution: 'NIBM University',
      year: '2023 - Present',
      color: 'from-blue-500 to-blue-600',
    },
    {
      degree: 'Diploma in Software Engineering',
      institution: 'NIBM University',
      year: '2022 - 2023',
      color: 'from-purple-500 to-purple-600',
    },
    {
      degree: 'Diploma in ICT (Distinction)',
      institution: 'IDM Institute',
      year: '2021 - 2022',
      color: 'from-pink-500 to-pink-600',
    },
    {
      degree: 'Diploma in English',
      institution: 'Wayamba University',
      year: '2020 - 2021',
      color: 'from-green-500 to-green-600',
    },
    {
      degree: 'Diploma in International Law',
      institution: 'Oxford University',
      year: '2019 - 2020',
      color: 'from-amber-500 to-amber-600',
    },
    {
      degree: 'Visharadha Qualification',
      institution: 'Completed',
      year: '2019',
      color: 'from-red-500 to-red-600',
    },
  ];

  const alResults = [
    { subject: 'Combined Maths', grade: 'C', marks: '60/100' },
    { subject: 'Physics', grade: 'S', marks: '55/100' },
    { subject: 'Chemistry', grade: 'S', marks: '55/100' },
    { subject: 'General English', grade: 'S', marks: '55/100' },
  ];

  const olResults = [
    { subject: 'Mathematics', grade: 'A', marks: '86/100' },
    { subject: 'Catholicism', grade: 'A', marks: '87/100' },
    { subject: 'Citizenship', grade: 'A', marks: '88/100' },
    { subject: 'Music', grade: 'A', marks: '85/100' },
    { subject: 'English Language', grade: 'B', marks: '72/100' },
    { subject: 'Sinhala Language', grade: 'B', marks: '74/100' },
    { subject: 'History', grade: 'B', marks: '75/100' },
    { subject: 'Information & Communication Technology', grade: 'B', marks: '71/100' },
    { subject: 'Science', grade: 'C', marks: '65/100' },
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
              About <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
              Software Engineering Student | Developer | Innovator
            </p>
          </motion.div>
        </div>
      </section>

      {/* Profile Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="My Profile" accent="Profile" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 md:p-12 border border-gray-200 dark:border-gray-700 shadow-lg"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              A motivated and hardworking Software Engineering student with a strong educational background and a passion for technology. Skilled in teamwork, creativity, and problem-solving. Passionate about building modern applications and continuously learning new technologies. I am dedicated to developing innovative solutions that make a positive impact through clean, efficient code and thoughtful design. With a focus on full-stack development and mobile applications, I strive to stay at the forefront of technological advancement.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Personal Details Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Personal Details" accent="Details" />
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {personalDetails.map((detail, index) => {
              const Icon = detail.icon;
              return (
                <motion.div
                  key={detail.label}
                  variants={itemVariants}
                  className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                      <Icon className="text-white text-xl" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                        {detail.label}
                      </p>
                      <p className="text-lg font-semibold text-gray-900 dark:text-white">
                        {detail.value}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Education Timeline Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Education Journey" accent="Journey" />
          <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white dark:bg-gray-800 rounded-xl p-8 border-l-4 shadow-lg hover:shadow-xl transition-all"
                style={{
                  borderLeftColor: 'rgb(59, 130, 246)',
                }}
              >
                <div className="md:flex justify-between items-start">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-blue-600 dark:text-blue-400 font-semibold mb-2">
                      {edu.institution}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className={`px-4 py-2 bg-gradient-to-r ${edu.color} text-white rounded-full font-semibold whitespace-nowrap`}>
                      {edu.year}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* A/L Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Advanced Level (A/L) Results" accent="Results" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                  <th className="px-6 py-4 text-left font-bold text-gray-900 dark:text-white">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-gray-900 dark:text-white">
                    Grade
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-gray-900 dark:text-white">
                    Marks
                  </th>
                </tr>
              </thead>
              <tbody>
                {alResults.map((result, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">
                      {result.subject}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-lg font-bold">
                        {result.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300 font-semibold">
                      {result.marks}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>

      {/* O/L Results Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <SectionTitle title="Ordinary Level (O/L) Results" accent="Results" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="overflow-x-auto"
          >
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-300 dark:border-gray-700">
                  <th className="px-6 py-4 text-left font-bold text-gray-900 dark:text-white">
                    Subject
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-gray-900 dark:text-white">
                    Grade
                  </th>
                  <th className="px-6 py-4 text-center font-bold text-gray-900 dark:text-white">
                    Marks
                  </th>
                </tr>
              </thead>
              <tbody>
                {olResults.map((result, index) => (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    className="border-b border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                  >
                    <td className="px-6 py-4 text-gray-700 dark:text-gray-300 font-medium">
                      {result.subject}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className="px-4 py-2 bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 rounded-lg font-bold">
                        {result.grade}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-center text-gray-700 dark:text-gray-300 font-semibold">
                      {result.marks}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </section>
    </>
  );
}
