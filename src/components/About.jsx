export default function AboutEducation() {
  const educationList = [
    {
      degree: "Bachelor of Engineering in Information Technology",
      school: "Nepal College of Information Technology",
      schoolUrl: "https://www.ncit.edu.np/",
      university: "Pokhara University",
      universityUrl: "https://pu.edu.np/",
      year: "2019 - 2024",
    },
    {
      degree: "+2, Science",
      school: "Hetauda School of Management and Social Sciences",
      schoolUrl: "https://hsm.edu.np/",
      year: "2017 - 2019",
    },
  ]

  return (
    <main className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 min-h-screen px-6 py-20 font-sans text-gray-100">
      {/* About Section */}
      <section id="about" className="max-w-3xl mx-auto text-center mb-24 pt-10">
        <p className="text-gray-300 text-lg leading-relaxed max-w-xl mx-auto">
          I'm an IT engineer, web developer, and UI/UX designer dedicated to
          creating websites and web applications tailored to your needs. I’m
          passionate about learning new technologies and solving problems
          through code. Outside of work, I enjoy gaming and am a football
          enthusiast.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
        <div className="space-y-10">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
              style={{ lineHeight: "1.6" }}
            >
              <h3 className="text-2xl font-semibold mb-3">{edu.degree}</h3>
              <p className="text-gray-300 font-medium mb-2">
                <a
                  href={edu.schoolUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-400 underline"
                >
                  {edu.school}
                </a>
                {edu.university && (
                  <>
                    {" — "}
                    <a
                      href={edu.universityUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-400 underline"
                    >
                      {edu.university}
                    </a>
                  </>
                )}
              </p>
              <p className="text-gray-500 text-sm">{edu.year}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
