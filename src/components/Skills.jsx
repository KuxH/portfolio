export default function Skills() {
  const skills = ["HTML", "CSS", "JavaScript", "SQL", "DSA"]

  return (
    <section id="skills" className="py-16 px-4 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8 text-black">Coding Skills</h2>
      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white px-4 py-2 rounded-full shadow text-sm font-medium"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  )
}
