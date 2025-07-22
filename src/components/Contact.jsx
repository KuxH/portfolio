import {
  FaWhatsapp,
  FaInstagram,
  FaTiktok,
  FaGithub,
  FaEnvelope,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa"
import { useState } from "react"

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")
  const [error, setError] = useState("")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess("")
    try {
      const API_URL = process.env.REACT_APP_API_URL || ""
      const res = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || "Something went wrong")
      setSuccess("Message sent! I'll get back to you soon.")
      setForm({ name: "", email: "", message: "" })
      // Open WhatsApp with pre-filled message
      const waMsg = encodeURIComponent(
        `Hi, I'm ${form.name} (${form.email}): ${form.message}`
      )
      window.open(`https://wa.me/9845099270?text=${waMsg}`, "_blank")
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

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

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 rounded-xl p-8 mb-12 w-full max-w-md space-y-6 shadow-lg"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          className="w-full px-4 py-2 rounded bg-gray-900 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={5}
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-800 text-white font-semibold py-2 rounded transition"
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
        {success && <p className="text-green-400 mt-2">{success}</p>}
        {error && <p className="text-red-400 mt-2">{error}</p>}
      </form>

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
