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
  FaPenNib,
  FaPaintBrush,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiCplusplus,
  SiTiktok,
  SiCpanel,
  SiTypescript,
  SiPostman,
  SiFigma,
} from "react-icons/si";

import { motion } from "framer-motion";

import "./Hero.css";

export default function Hero() {
  // ================= SKILLS =================
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
    { name: "Photoshop", Icon: FaPaintBrush },
    { name: "Illustrator", Icon: FaPenNib },
    { name: "Figma", Icon: SiFigma },
  ];

  // ================= ANIMATION =================
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section className="relative min-h-screen text-white px-6 py-20 overflow-hidden animated-bg">
      {/* CURSOR GLOW */}
      <div className="cursor-glow fixed w-40 h-40 bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative max-w-7xl mx-auto space-y-16"
      >
        {/* ================= HEADER ================= */}
        <motion.div variants={item}>
          <h1 className="text-5xl sm:text-6xl font-extrabold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Kushal Neupane
          </h1>

          {/* Availability */}
          <div className="mt-3 flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative h-3 w-3 rounded-full bg-green-500"></span>
            </span>
            <p className="text-green-400 text-sm">Available for work</p>
          </div>

          <p className="mt-3 text-lg text-blue-400">IT Engineer</p>

          <p className="text-lg text-gray-400">Full-Stack Developer</p>

          {/* Resume */}
          <div className="mt-6">
            <a
              href="/resume.pdf"
              className="inline-block px-6 py-2 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:scale-105 transition"
            >
              View Resume
            </a>
          </div>
        </motion.div>

        {/* ================= GRID ================= */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* LEFT */}
          <motion.div variants={item}>
            <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl space-y-8">
              <div>
                <h2 className="text-2xl font-semibold mb-3">About Me</h2>
                <p className="text-gray-300">
                  I build scalable web applications and intuitive user
                  experiences, combining clean design with strong engineering
                  fundamentals. Focused on full-stack development, system
                  design, and real-world problem solving through
                  production-ready projects, automation tools, and modern UI
                  systems.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">Education</h2>

                <ul className="space-y-4 text-gray-300">
                  <li>
                    <p className="font-semibold text-white">
                      Bachelor’s in Information Technology
                    </p>
                    <p className="text-sm text-gray-400">
                      Nepal College of Information Technology (Pokhara
                      University)
                    </p>
                    <p className="text-sm text-gray-500">2019 – 2025</p>
                  </li>

                  <li>
                    <p className="font-semibold text-white">+2 in Science</p>
                    <p className="text-sm text-gray-400">
                      Hetauda School of Management and Social Sciences
                    </p>
                    <p className="text-sm text-gray-500">2017 – 2019</p>
                  </li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">
                  Engineering Credentials
                </h2>

                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="font-semibold text-white">
                    Licensed IT Engineer
                  </p>
                  <p className="text-sm text-gray-400 mt-1">
                    Nepal Engineering Council
                  </p>

                  <p className="text-sm text-gray-300 mt-2">
                    Registration No: <span className="text-white">98513</span>
                  </p>

                  <a
                    href="https://nec.gov.np/registration/98513"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-3 text-blue-400"
                  >
                    Verify Credential ↗
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={item} className="space-y-10">
            {/* SKILLS */}
            <div className="flex flex-wrap gap-3">
              {skills.map(({ name, Icon }, i) => (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.1 }}
                  className="bg-white/10 px-4 py-2 rounded-full flex items-center gap-2"
                >
                  <Icon size={14} />
                  {name}
                </motion.span>
              ))}
            </div>

            {/* CONTACT */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Contact</h2>
              <div className="flex gap-6">
                <a href="https://wa.me/9779845099270">
                  <FaWhatsapp size={22} />
                </a>
                <a href="mailto:thisiskush7447@gmail.com">
                  <FaEnvelope size={22} />
                </a>
              </div>
            </div>

            {/* SOCIALS */}
            <div>
              <h2 className="text-xl font-semibold mb-3">Socials</h2>
              <div className="flex gap-6 flex-wrap">
                <a href="https://www.instagram.com/kuxh.xp/">
                  <FaInstagram size={22} />
                </a>
                <a href="https://www.tiktok.com/@kuxh.xp">
                  <SiTiktok size={22} />
                </a>
                <a href="https://www.linkedin.com/in/kuxh/">
                  <FaLinkedin size={22} />
                </a>
                <a href="https://github.com/KuxH">
                  <FaGithub size={22} />
                </a>
                <a href="https://www.youtube.com/@kuxh_xp">
                  <FaYoutube size={22} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
