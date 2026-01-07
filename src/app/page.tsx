"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { DoodleBackground, FadeIn, StaggerContainer, StaggerItem } from "@/components/DoodleBackground";
import Link from "next/link";
import { projects } from "@/data/projects";
import { useSound } from "@/hooks/useSound";
import { VideoSection } from "@/components/VideoSection";

const skills = {
  'Core Skills': [
    'Machine Learning', 'Deep Learning'
  ],
  'Frameworks & Libraries': [
    'TensorFlow', 'Keras', 'Scikit-learn'
  ]
};

export default function Home() {
  const controls = useAnimation();
  const { playProjectHoverSound, playProjectClickSound, playSkillHoverSound, playSkillClickSound, playButtonHoverSound, playButtonClickSound } = useSound();

  useEffect(() => {
    // Animate skills on mount
    controls.start("visible");
  }, [controls]);

  return (
    <div className="max-w-6xl mx-auto px-6 py-12 md:py-24 relative">
      {/* Doodle Background */}
      <DoodleBackground />

      {/* Floating Dots Background */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-blue-200 dark:bg-blue-900/50"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + Math.random() * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}

        {/* Additional floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`shape-${i}`}
            className={`absolute ${i % 4 === 0 ? 'w-3 h-3 bg-purple-300 dark:bg-purple-700/50' :
              i % 4 === 1 ? 'w-4 h-2 bg-green-300 dark:bg-green-700/50 rounded-sm' :
                i % 4 === 2 ? 'w-2 h-4 bg-pink-300 dark:bg-pink-700/50 rounded-sm' :
                  'w-3 h-3 bg-yellow-300 dark:bg-yellow-700/50 rotate-45'
              }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -40, 0],
              x: [0, Math.random() * 30 - 15, 0],
              rotate: [0, 180, 360],
              opacity: [0.05, 0.2, 0.05],
            }}
            transition={{
              duration: 8 + Math.random() * 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <StaggerContainer>
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Text Content */}
          <div className="flex-1">
            <StaggerItem>
              <motion.h1
                className="text-5xl md:text-6xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Rushikesh Zende
              </motion.h1>
            </StaggerItem>

            <StaggerItem>
              <motion.p
                className="mt-6 text-xl max-w-3xl text-slate-600 dark:text-slate-400"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                AI/ML Engineer specializing in building intelligent systems that solve real-world problems.
                Passionate about computer vision, NLP, and creating impactful AI solutions.
              </motion.p>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-8 flex flex-wrap gap-4">
                <motion.a
                  href="#about"
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  onMouseEnter={playButtonHoverSound}
                  onClick={playButtonClickSound}
                >
                  Learn About Me
                </motion.a>
                <motion.a
                  href="#projects"
                  className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg font-medium hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  onMouseEnter={playButtonHoverSound}
                  onClick={playButtonClickSound}
                >
                  View My Work
                </motion.a>
              </div>
            </StaggerItem>
          </div>

          {/* Profile Image */}
          <motion.div
            className="w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-slate-800 shadow-xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <img
              src="/images/profile.png"
              alt="Rushikesh Zende"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </StaggerContainer>

      {/* About Section */}
      <section id="about" className="mt-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-3 text-slate-900 dark:text-white">
            About Me
          </h2>
          <p className="text-lg text-blue-600 dark:text-blue-400 font-medium mb-8">
            I build production-grade AI systems that scale beyond demos.
          </p>
        </motion.div>

        <div className="mt-8">
          <VideoSection />
        </div>



        {/* Micro-CTA */}
        <motion.div
          className="mt-16 bg-white dark:bg-slate-800 p-8 rounded-xl border border-blue-200 dark:border-blue-900/50 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <p className="text-lg text-slate-700 dark:text-slate-300 mb-6">
            Currently exploring opportunities to build real-world AI systems with high-impact teams.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={playButtonHoverSound}
              onClick={playButtonClickSound}
            >
              Get in Touch
            </motion.a>
            <motion.a
              href="/Rushikesh Zende copy.pdf"
              download="Rushikesh_Zende_Resume.pdf"
              className="inline-flex items-center px-6 py-3 border border-blue-600 dark:border-blue-500 text-blue-600 dark:text-blue-400 rounded-lg font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={playButtonHoverSound}
              onClick={playButtonClickSound}
            >
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download Resume
            </motion.a>
          </div>
        </motion.div>
      </section>



      {/* Projects Section */}
      <section id="projects" className="mt-24">
        <motion.h2
          className="text-3xl font-bold mb-8 text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Featured Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              animate={{
                y: [0, -20, 0],
                rotate: [0, 1.5, -1.5, 0],
                boxShadow: [
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
                  '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                  '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
                ]
              }}
              transition={{
                y: {
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
                rotate: {
                  duration: 8 + Math.random() * 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.2,
                },
                boxShadow: {
                  duration: 5 + Math.random() * 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              whileHover={{
                y: -25,
                scale: 1.08,
                rotate: 0,
                boxShadow: '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
                transition: {
                  duration: 0.3,
                  type: 'spring',
                  stiffness: 300
                }
              }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <div
                className="h-full p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group-hover:border-blue-500 dark:group-hover:border-blue-500 relative overflow-hidden"
                onClick={() => {
                  playProjectClickSound();
                  window.location.href = project.path;
                }}
                onMouseEnter={playProjectHoverSound}
              >
                {/* Animated background gradient */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  animate={{
                    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "200% 200%",
                  }}
                />

                <motion.h3
                  className="text-xl font-semibold text-slate-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p
                  className="text-slate-700 dark:text-slate-300 mb-4 relative z-10"
                  whileHover={{ x: 2 }}
                >
                  {project.description}
                </motion.p>
                <div className="flex flex-wrap gap-2 mt-4 relative z-10">
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-50 text-blue-700 border border-blue-100 dark:border-blue-900/50 dark:bg-blue-900/30 dark:text-blue-300"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                      whileHover={{
                        scale: 1.1,
                        backgroundColor: "#3b82f6",
                        color: "white"
                      }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative z-10"
                    whileHover={{ x: 2 }}
                    onClick={(e) => {
                      e.stopPropagation();
                      playProjectClickSound();
                      window.open(project.githubUrl, '_blank');
                    }}
                  >
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.58.688.482C19.14 20.19 22 16.44 22 12.017 22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                    View on GitHub
                  </motion.a>
                )}
                <div
                  className="mt-4 text-sm text-blue-600 dark:text-blue-400 font-medium flex items-center group-hover:translate-x-1 transition-transform relative z-10"
                  onClick={(e) => {
                    e.stopPropagation();
                    playProjectClickSound();
                    window.location.href = project.path;
                  }}
                  style={{ cursor: 'pointer' }}
                >
                  View project
                  <motion.svg
                    className="w-4 h-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    animate={{ x: [0, 3, 0] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: index * 0.2
                    }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </motion.svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="mt-24">
        <motion.h2
          className="text-3xl font-bold mb-8 text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Skills & Expertise
        </motion.h2>

        <div className="space-y-12">
          {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
            <motion.div
              key={category}
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: categoryIndex * 0.15 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-slate-800 dark:text-slate-200 flex items-center">
                <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {categorySkills.map((skill: string, index: number) => (
                  <motion.span
                    key={skill}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 rounded-full text-sm font-medium relative overflow-hidden cursor-pointer"
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    whileInView={{
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        delay: 0.1 + (index * 0.03) + (categoryIndex * 0.1),
                        duration: 0.3,
                        type: "spring",
                        stiffness: 300,
                      },
                    }}
                    viewport={{ once: true }}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#3b82f6",
                      color: "white",
                      y: -2,
                      boxShadow: "0 4px 12px rgba(59, 130, 246, 0.2)",
                    }}
                    whileTap={{ scale: 0.98 }}
                    onMouseEnter={playSkillHoverSound}
                    onClick={playSkillClickSound}
                  >
                    <span className="relative z-10">{skill}</span>
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating particles background */}
        <div className="absolute inset-0 -z-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-1 h-1 bg-blue-400/30 dark:bg-blue-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 40 - 20, 0],
                opacity: [0, 0.6, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="mt-24">
        <motion.h2
          className="text-3xl font-bold mb-8 text-slate-900 dark:text-white"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Get In Touch
        </motion.h2>
        <div className="flex flex-wrap gap-6">
          <motion.a
            href="https://www.linkedin.com/in/rushikesh-zende"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            LinkedIn
          </motion.a>
          <motion.a
            href="https://github.com/rushikeshzende"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            GitHub
          </motion.a>
          <motion.a
            href="mailto:rushikeshzende0303@gmail.com"
            className="text-gray-700 dark:text-gray-300 hover:underline flex items-center gap-2"
            whileHover={{ x: 5 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </motion.a>
        </div>
      </section>
    </div>
  );
}
