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

    const messageText = `Hi, I'm ${form.name} (${form.email}): ${form.message}`
    const waMsg = encodeURIComponent(messageText)

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

      window.open(`https://wa.me/9845099270?text=${waMsg}`, "_blank")

      const emailSubject = encodeURIComponent("New Contact Message")
      const emailBody = encodeURIComponent(messageText)

      window.open(
        `mailto:thisiskush7447@gmail.com?subject=${emailSubject}&body=${emailBody}`,
        "_blank"
      )

      setForm({ name: "", email: "", message: "" })
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="relative min-h-screen px-6 py-24 text-white overflow-hidden animated-bg"
    >
      {/* SAME GLOW STYLE AS PROJECTS */}
      <div className="absolute top-[-100px] left-[-100px] w-[300px] h-[300px] bg-blue-500/20 blur-[120px]" />
      <div className="absolute bottom-[-100px] right-[-100px] w-[300px] h-[300px] bg-purple-500/20 blur-[120px]" />

      <div className="max-w-6xl mx-auto text-center">

        {/* HEADER */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Connect With Me
        </h2>

        <p className="text-gray-300 max-w-2xl mx-auto mb-16">
          Feel free to connect through any platform below! I’m open to collaboration, questions, or just a friendly chat.
        </p>

        {/* GRID like Projects */}
        <div className="grid md:grid-cols-2 gap-10 text-left">

          {/* FORM CARD */}
          <form
            onSubmit={handleSubmit}
            className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-blue-500/40 transition shadow-xl"
          >
            <h3 className="text-xl font-semibold mb-6">Send Message</h3>

            <input
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
              required
            />

            <input
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              className="w-full mb-4 px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none"
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              className="w-full mb-4 px-4 py-3 rounded-lg bg-black/30 border border-white/10 focus:border-blue-500 outline-none resize-none"
              required
            />

            <button
              disabled={loading}
              className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 hover:opacity-90 transition font-semibold"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p className="text-green-400 text-sm mt-3">{success}</p>
            )}
            {error && (
              <p className="text-red-400 text-sm mt-3">{error}</p>
            )}
          </form>

          {/* SOCIAL CARD (PROJECT STYLE MATCHED) */}
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 hover:border-purple-500/40 transition shadow-xl">

            <h3 className="text-xl font-semibold mb-6">
              Socials
            </h3>

            <div className="grid grid-cols-3 gap-6 text-gray-400">
              {[
                { href: "https://wa.me/9845099270", Icon: FaWhatsapp },
                { href: "https://www.instagram.com/kuxh.xp/", Icon: FaInstagram },
                { href: "https://www.tiktok.com/@kuxh.xp", Icon: FaTiktok },
                { href: "https://github.com/KuxH", Icon: FaGithub },
                { href: "mailto:thisiskush7447@gmail.com", Icon: FaEnvelope },
                { href: "https://www.linkedin.com/in/kuxh/", Icon: FaLinkedin },
                { href: "https://www.youtube.com/@kuxh_xp", Icon: FaYoutube },
              ].map(({ href, Icon }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center justify-center gap-2 p-3 rounded-xl hover:bg-white/10 hover:text-white transition group"
                >
                  <Icon size={26} className="group-hover:scale-110 transition" />
                </a>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}