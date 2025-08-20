import { useEffect, useState } from "react"

export default function ParticleBackground() {
  const [particles, setParticles] = useState([])
  const [codeSnippets] = useState([
    "leadership",
    "Discipline",
    "Teamwork",
    "Adaptability",
    "Problem Solving",
    "const",
    "Himanshi Mann",
    "function",
    "return",
    "useState",
    "useEffect",
    "async",
    "await",
    "import",
    "export",
    "class",
    "extends",
    "props",
    "state",
    "render",
    "{ }",
    "[ ]",
    "( )",
    "=>",
    "&&",
    "||",
    "===",
    "!==",
    "...",
    "map",
    "filter",
    "reduce",
    "forEach",
    "find",
    "some",
    "every",
    "includes",
  ])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = []

      // Generate floating geometric particles
      for (let i = 0; i < 15; i++) {
        newParticles.push({
          id: `particle-${i}`,
          type: "geometric",
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 8 + 4,
          delay: Math.random() * 8,
          duration: Math.random() * 10 + 15,
        })
      }

      // Generate code snippet particles
      for (let i = 0; i < 20; i++) {
        newParticles.push({
          id: `code-${i}`,
          type: "code",
          x: Math.random() * 100,
          y: Math.random() * 100,
          text: codeSnippets[Math.floor(Math.random() * codeSnippets.length)],
          delay: Math.random() * 5,
          duration: Math.random() * 15 + 20,
        })
      }

      setParticles(newParticles)
    }

    generateParticles()
  }, [codeSnippets])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`absolute ${
            particle.type === "geometric" ? "particle animate-particle-float" : "particle-code animate-particle-float"
          }`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            animationDelay: `${particle.delay}s`,
            animationDuration: `${particle.duration}s`,
            ...(particle.type === "geometric" && {
              width: `${particle.size}px`,
              height: `${particle.size}px`,
            }),
          }}
        >
          {particle.type === "code" && particle.text}
        </div>
      ))}

      {/* Additional animated elements */}
      <div
        className="absolute top-20 left-10 w-2 h-2 bg-primary rounded-full animate-ping"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-40 right-20 w-3 h-3 bg-secondary rounded-full animate-pulse"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-32 left-1/4 w-1 h-1 bg-accent rounded-full animate-bounce"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute bottom-20 right-1/3 w-2 h-2 bg-primary rounded-full animate-ping"
        style={{ animationDelay: "4s" }}
      />
    </div>
  )
}
