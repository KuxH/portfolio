import { FaArrowUpRightFromSquare } from "react-icons/fa6"

export default function Projects() {
  const projects = [
    {
      title: "E-Pharma Website",
      description:
        "A platform to order medicines online from verified pharmacies with prescription uploads.",
      url: "https://your-epharma-website-link.com",
      tags: ["React", "Node.js", "MongoDB"],
      roles: ["Full Stack Developer"],
    },
    {
      title: "Effortless Beauty",
      description:
        "Helps users discover and book makeup artists nearby with user ratings.",
      url: "https://github.com/KuxH/Effortlessbeauty",
      tags: ["React", "Express", "MERN"],
      roles: ["Frontend Developer", "UI Designer"],
    },
    {
      title: "Hetauda Book House",
      description:
        "Online bookstore platform with admin dashboard for managing inventory and orders.",
      url: "https://your-hetauda-book-house-link.com",
      tags: ["React", "Tailwind", "Firebase"],
      roles: ["Full Stack Developer"],
    },
    {
      title: "Healthline Nepal",
      description:
        "A full-stack MERN application for a polyclinic featuring doctor photo uploads using Multer, service listings, and a dynamic contact form. Designed with a clean UI and deployed for live access.",
      url: "https://healthlinenepal.org/",
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Multer"],
      roles: ["Full Stack Developer"],
    },
  ]

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-4 py-24 flex items-center justify-center"
    >
      <div className="max-w-6xl w-full text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">🚀 My Projects</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-gray-800 hover:bg-gray-700 transition-all duration-300 p-6 rounded-2xl shadow-xl text-left"
            >
              {/* Title & Icon */}
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <FaArrowUpRightFromSquare className="text-gray-400 group-hover:text-white transition" />
              </div>

              {/* Description */}
              <p className="text-gray-300 text-sm mb-6">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="text-xs bg-white/10 px-3 py-1 rounded-full text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Roles */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.roles &&
                  project.roles.map((role, i) => (
                    <span
                      key={i}
                      className="text-xs bg-blue-500/20 px-3 py-1 rounded-full text-blue-200"
                    >
                      {role}
                    </span>
                  ))}
              </div>

              {/* Hover effect */}
              <div className="absolute inset-0 border border-white/10 rounded-2xl scale-100 group-hover:scale-105 transition-all duration-300 pointer-events-none" />
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
