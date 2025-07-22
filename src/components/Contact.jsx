import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center px-6 py-32 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-center"
    >
      <h2 className="text-4xl font-bold mb-8 text-white">Connect With Me</h2>
      <p className="text-gray-300 mb-12 max-w-xl">
        Feel free to connect through any platform below! I’m open to
        collaboration, questions, or just a friendly chat. Whether you want to
        discuss a project, share ideas, or simply say hello, I’d love to hear
        from you. Let’s build something amazing together!
      </p>

      <div className="flex justify-center gap-12 flex-wrap text-gray-400">
        {[
          {
            href: "https://wa.me/9845099270",
            Icon: FaWhatsapp,
            title: "WhatsApp",
          },
          {
            href: "https://www.instagram.com/kuxh.xp/",
            Icon: FaInstagram,
            title: "Instagram",
          },
          {
            href: "https://www.tiktok.com/@kuxh.xp",
            Icon: FaTiktok,
            title: "TikTok",
          },
          {
            href: "https://github.com/KuxH",
            Icon: FaGithub,
            title: "GitHub",
          },
          {
            href: "mailto:thisiskush7447@gmail.com",
            Icon: FaEnvelope,
            title: "Email",
          },
          {
            href: "https://www.linkedin.com/in/kuxh/",
            Icon: FaLinkedin,
            title: "LinkedIn",
          },
          {
            href: "https://www.youtube.com/@kuxh_xp",
            Icon: FaYoutube,
            title: "YouTube",
          },
        ].map(({ href, Icon, title }) => (
          <a
            key={title}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            title={title}
            className="p-4 rounded-full hover:text-white transition-colors duration-300"
          >
            <Icon size={32} />
          </a>
        ))}
      </div>
    </section>
  )
}
