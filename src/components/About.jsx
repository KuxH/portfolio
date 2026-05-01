import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import "./Hero.css" 

export default function AboutEducation() {
  const [activeIndex, setActiveIndex] = useState(null)

  const educationList = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      school: "Nepal College of Information Technology",
      schoolUrl: "https://www.ncit.edu.np/",
      university: "Pokhara University",
      universityUrl: "https://pu.edu.np/",
      year: "2019 - 2025",

      details:
"Focused on full-stack development, system design, and real-world applications. Built multiple production-level projects including web apps and automation tools.",
tags: ["Full-Stack", "DSA", "System Design", "DBMS", "Networking", "Project Management", "AI Automation" ],

    },
    {
      degree: "+2, Science",
      school: "Hetauda School of Management and Social Sciences",
      schoolUrl: "https://hsm.edu.np/",
      year: "2017 - 2019",
      details:
        "Developed strong foundation in mathematics, physics, and analytical thinking. Built a strong problem-solving mindset essential for engineering.",
      tags: ["Science", "Mathematics", "Physics"],
    },
  ]

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  return (
    <main className="relative min-h-screen px-6 py-20 text-gray-100 overflow-hidden animated-bg">

      {/* Background Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px] rounded-full" />

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center mb-28 pt-10"
      >
        <h2 className="text-3xl font-bold mb-6">About Me</h2>

        <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mx-auto">
          I’m an IT engineer and full-stack developer passionate about building
          modern web applications and intuitive digital experiences. My focus is
          on creating scalable systems, AI-powered automation, and solving
          real-world business problems through technology.
        </p>
      </motion.section>

      {/* ================= EDUCATION ================= */}
      <section id="education" className="max-w-4xl mx-auto">

        <h2 className="text-3xl font-bold mb-12 text-center">
          Education
        </h2>

        <div className="space-y-6">
          {educationList.map((edu, idx) => {
            const isOpen = activeIndex === idx

            return (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="cursor-pointer group"
                onClick={() => toggle(idx)}
              >
                <motion.div
                  layout
                  className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-xl hover:-translate-y-1"
                >

                  {/* HEADER */}
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-lg font-semibold text-white">
                        {edu.degree}
                      </h3>

                      <p className="text-sm text-gray-400">
                        {edu.school}
                      </p>
                    </div>

                    {/* Arrow */}
                    <motion.span
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      className="text-gray-400"
                    >
                      ▼
                    </motion.span>
                  </div>

                  {/* YEAR */}
                  <p className="text-xs text-gray-500 mt-1">
                    {edu.year}
                  </p>

                  {/* EXPAND CONTENT */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 border-t border-white/10 pt-4 space-y-4">

                          {/* LINKS */}
                          <div className="text-sm">
                            <a
                              href={edu.schoolUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-400 hover:underline"
                            >
                              Visit Institution ↗
                            </a>

                            {edu.university && (
                              <>
                                {" • "}
                                <a
                                  href={edu.universityUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-blue-400 hover:underline"
                                >
                                  University ↗
                                </a>
                              </>
                            )}
                          </div>

                          {/* TAGS */}
                          <div className="flex flex-wrap gap-2">
                            {edu.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 text-xs rounded-full bg-blue-500/10 text-blue-400"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* DETAILS */}
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {edu.details}
                          </p>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ================= LICENSE ================= */}
      <motion.section
        id="license"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mt-28"
      >
        <h2 className="text-3xl font-bold mb-12 text-center">
          Engineering Credentials
        </h2>

        <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-2xl text-center relative overflow-hidden hover:scale-[1.02] transition">

          {/* glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-20" />

          <h3 className="text-2xl font-semibold mb-4 relative z-10">
            Licensed IT Engineer
          </h3>

          <p className="text-gray-400 text-sm mb-4 relative z-10">
            Nepal Engineering Council
          </p>

          <a
            href="https://nec.gov.np/registration/98513"
            target="_blank"
            rel="noopener noreferrer"
            className="relative z-10 inline-block px-6 py-2 rounded-full
            bg-gradient-to-r from-blue-600 to-blue-400
            hover:scale-105 transition"
          >
            Verify Engineering License ↗
          </a>
        </div>
      </motion.section>
    </main>
  )
}