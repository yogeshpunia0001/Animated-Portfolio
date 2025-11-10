import { useState, useEffect } from "react"

export default function Skills() {
  const [animatedSkills, setAnimatedSkills] = useState(new Set())

  const skillCategories = [
    {
      title: "Frontend Mastery",
      skills: [
        
        { name: "HTML5 & CSS3", level: 96, color: "bg-primary" },
        { name: "JavaScript (ES6+) & TypeScript", level: 92, color: "bg-secondary" },
        { name: "Tailwind CSS", level: 94, color: "bg-secondary" },
        { name: "React.js", level: 95, color: "bg-primary" },
        { name: "Next.js", level: 88, color: "bg-accent" },

        
      ],
    },
    {
      title: "Development Workflow",
      skills: [
      
        { name: "Git & GitHub", level: 89, color: "bg-primary" },
        { name: "Webpack & Vite", level: 82, color: "bg-secondary" },
        { name: "Figma & Design", level: 85, color: "bg-accent" },
        { name: "Performance Optimization", level: 91, color: "bg-primary" },
        { name: "SQL", level: 78, color: "bg-primary" },
        { name: "Testing & Debugging", level: 83, color: "bg-accent" },
      ],
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const skillName = entry.target.dataset.skill
            if (skillName) {
              setAnimatedSkills((prev) => new Set([...prev, skillName]))
            }
          }
        })
      },
      { threshold: 0.5 },
    )

    const skillBars = document.querySelectorAll("[data-skill]")
    skillBars.forEach((bar) => observer.observe(bar))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-12 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full animate-float blur-xl"></div>
        <div
          className="absolute bottom-40 right-20 w-24 h-24 bg-secondary/15 rounded-full animate-particle-rotate blur-lg"
          style={{ animationDelay: "3s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-accent/20 rounded-full animate-bounce"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight py-2">Technical Expertise</h2>
            <p className="text-xl text-muted-foreground">
              Passionate mastery of cutting-edge technologies and development practices
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="bg-card rounded-2xl p-8 hover-lift scroll-animate animate-pulse-glow"
                style={{ animationDelay: `${categoryIndex * 0.2}s` }}
              >
                <h3 className="text-2xl font-bold mb-8 text-primary">{category.title}</h3>
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-3">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-primary font-bold">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-border rounded-full h-3 overflow-hidden">
                        <div
                          data-skill={skill.name}
                          className={`h-full ${skill.color} rounded-full transition-all duration-2000 ease-out animate-pulse-glow ${
                            animatedSkills.has(skill.name) ? "" : "w-0"
                          }`}
                          style={{
                            width: animatedSkills.has(skill.name) ? `${skill.level}%` : "0%",
                            transitionDelay: `${skillIndex * 0.2}s`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Additional skills grid */}
          {/* <div className="mt-16 scroll-animate">
            <h3 className="text-2xl font-bold text-center mb-8 text-foreground">Development Ecosystem</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Redux Toolkit",
                "Sass/SCSS",
                "Styled Components",
                "Framer Motion",
                "Three.js",
                "Jest & Cypress",
                "Docker",
                "AWS & Vercel",
                "CI/CD Pipelines",
                "Micro-frontends",
                "PWA Development",
              ].map((tech, index) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full text-sm font-medium text-foreground hover:from-primary hover:to-secondary hover:text-primary-foreground transition-all duration-300 cursor-default animate-fade-in-scale hover-lift"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  )
}
