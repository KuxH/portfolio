import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaHtml5,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaInstagram,
  FaYoutube,
  FaCss3Alt,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiTiktok,
  SiCpanel,
  SiTypescript,
  SiPostman,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiFigma,
} from "react-icons/si"
import "./Hero.css"

export default function Hero() {
  const skills = [
    { name: "HTML", Icon: FaHtml5 },
    { name: "CSS", Icon: FaCss3Alt },
    { name: "Tailwind CSS", Icon: SiTailwindcss },
    { name: "JavaScript", Icon: FaJs },
    { name: "TypeScript", Icon: SiTypescript },
    { name: "React", Icon: FaReact },
    { name: "Node.js", Icon: FaNodeJs },
    { name: "Express", Icon: SiExpress },
    { name: "MongoDB", Icon: SiMongodb },
    { name: "MySQL", Icon: FaDatabase },
    { name: "GitHub", Icon: FaGithub },
    { name: "C++", Icon: SiCplusplus },
    { name: "cPanel", Icon: SiCpanel },
    { name: "Postman", Icon: SiPostman },
    { name: "Photoshop", Icon: SiAdobephotoshop },
    { name: "Illustrator", Icon: SiAdobeillustrator },
    { name: "Figma", Icon: SiFigma },
  ]

  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white px-6 py-20 font-sans">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header (Full Width) */}
        <div className="text-left">
          <h1 className="text-5xl sm:text-6xl font-bold mb-2 leading-tight">
            Kushal Neupane
          </h1>
          <p className="text-lg sm:text-xl font-semibold text-gray-200">
            IT Engineer
          </p>
          <p className="text-base sm:text-lg text-gray-400">
            Web Developer • UI/UX Designer
          </p>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 bg-blue-600 hover:bg-blue-800 text-white font-semibold px-6 py-2 rounded-full shadow transition"
          >
            View Resume
          </a>
        </div>

        {/* Grid: */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* LEFT - About Me & Education */}
          <div className="text-left text-base md:text-lg">
            <div className="bg-white/10 p-6 rounded-lg space-y-8">
              {/* About Me */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">About Me</h2>
                <p className="text-gray-300 leading-relaxed">
                  I'm an IT engineer, web developer, and UI/UX designer
                  dedicated to creating websites and web applications tailored
                  to your needs. I’m passionate about learning new technologies
                  and solving problems through code. Outside of work, I enjoy
                  gaming and am a football enthusiast.
                </p>
              </div>

              {/* Education */}
              <div>
                <h2 className="text-2xl font-bold mb-3 text-white">
                  Education
                </h2>
                <ul className="space-y-4 text-gray-300">
                  <li>
                    <p className="font-semibold text-white">
                      Bachelor's in Information Technology
                    </p>
                    <p className="text-sm text-gray-400">
                      Nepal College of Information Technology (Pokhara
                      University)
                    </p>
                    <p className="text-sm text-gray-400">2019 – 2025</p>
                  </li>
                  <li>
                    <p className="font-semibold text-white">+2 in Science</p>
                    <p className="text-sm text-gray-400">
                      Hetauda School of Management and Social Sciences
                    </p>
                    <p className="text-sm text-gray-400">2017 – 2019</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT - Contact & Skills */}
          <div className="space-y-10">
            {/* Skills */}
            <div>
              <div className="flex flex-wrap gap-3">
                {skills.map(({ name, Icon }, i) => (
                  <span
                    key={i}
                    className="bg-white/20 text-white text-sm px-4 py-2 rounded-full font-medium flex items-center gap-2"
                  >
                    <Icon size={16} />
                    {name}
                  </span>
                ))}
              </div>
            </div>
            {/* Contact */}
            <div className="mb-8">
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <div className="flex gap-6">
                <a
                  href="https://wa.me/9779845099270"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/40 p-4 rounded-full transition hover:scale-110"
                  title="WhatsApp"
                >
                  <FaWhatsapp size={24} />
                </a>
                <a
                  href="mailto:thisiskush7447@gmail.com"
                  className="bg-white/20 hover:bg-white/40 p-4 rounded-full transition hover:scale-110"
                  title="Email"
                >
                  <FaEnvelope size={24} />
                </a>
              </div>
            </div>

            {/* Socials */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Socials</h2>
              <div className="flex gap-6">
                <a
                  href="https://www.instagram.com/kuxh.xp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/40 p-4 rounded-full transition hover:scale-110"
                  title="Instagram"
                >
                  <FaInstagram size={24} />
                </a>
                <a
                  href="https://www.tiktok.com/@kuxh.xp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/40 p-4 rounded-full transition hover:scale-110"
                  title="TikTok"
                >
                  <SiTiktok size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/kuxh/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/40 p-4 rounded-full transition hover:scale-110"
                  title="LinkedIn"
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/KuxH"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/40 p-4 rounded-full transition hover:scale-110"
                  title="GitHub"
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href="https://www.youtube.com/@kuxh_xp"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/20 hover:bg-white/40 p-4 rounded-full transition hover:scale-110"
                  title="Youtube"
                >
                  <FaYoutube size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
