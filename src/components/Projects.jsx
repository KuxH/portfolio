import { FaArrowUpRightFromSquare } from "react-icons/fa6"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(null)

  const projects = [
    {
      title: "E-Pharma Website",
      description:
        "A platform to order medicines online from verified pharmacies with prescription uploads.",
      details:
        "Includes secure authentication, prescription validation, and real-time order tracking system with scalable backend architecture.",
      url: "https://your-epharma-website-link.com",
      tags: ["React", "Node.js", "MongoDB"],
      roles: ["Full Stack Developer"],
    },
    {
      title: "Effortless Beauty",
      description:
        "Helps users discover and book makeup artists nearby with user ratings.",
      details:
        "Focused on UI/UX with booking flow optimization, responsive design, and smooth user experience across devices.",
      url: "https://github.com/KuxH/Effortlessbeauty",
      tags: ["React", "Express", "MERN"],
      roles: ["Frontend Developer", "UI Designer"],
    },
    {
      title: "Hetauda Book House",
      description:
        "Online bookstore platform with admin dashboard for managing inventory and orders.",
      details:
        "Includes admin panel, order management, and Firebase integration for authentication and database handling.",
      url: "https://your-hetauda-book-house-link.com",
      tags: ["React", "Tailwind", "Firebase"],
      roles: ["Full Stack Developer"],
    },
    {
      title: "Healthline Nepal",
      description:
        "A full-stack MERN application for a polyclinic with doctor uploads and services.",
      details:
        "Built using Multer for image uploads, dynamic service listings, and optimized backend for performance and scalability.",
      url: "https://healthlinenepal.org/",
      tags: ["React", "Node", "Express", "MongoDB"],
      roles: ["Full Stack Developer"],
    },
  ]

  const toggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section
      id="projects"
      className="relative min-h-screen px-6 py-24 text-white overflow-hidden animated-bg"
    >
      {/* Glow */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px]" />

      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
          🚀 My Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => {
            const isOpen = activeIndex === index

            return (
              <motion.div
                key={index}
                layout
                onClick={() => toggle(index)}
                whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                className="cursor-pointer group"
              >
                <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 transition-all duration-300 hover:border-blue-500/40 hover:shadow-2xl">

                  {/* Header */}
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-semibold">
                        {project.title}
                      </h3>

                      {/* Roles */}
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.roles.map((role, i) => (
                          <span
                            key={i}
                            className="text-xs bg-blue-500/20 px-3 py-1 rounded-full text-blue-300"
                          >
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <FaArrowUpRightFromSquare className="text-gray-400 group-hover:text-white transition" />
                    </a>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-sm mt-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* EXPAND */}
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="mt-4 border-t border-white/10 pt-4">
                          <p className="text-gray-400 text-sm leading-relaxed">
                            {project.details}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Hover Glow Border */}
                  <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-500/30 transition pointer-events-none" />
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}