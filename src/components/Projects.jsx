import { useState } from "react"

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Namaste Grocer — Full-Stack Grocery Web Application",
      description:
        "Developed a scalable grocery e-commerce platform with a fully responsive UI and real-time admin dashboard for managing products, orders, and analytics. Integrated over 45 RESTful APIs to enable instant order tracking and updates, reducing manual verification by 40%. Deployed on AWS with CI/CD pipelines, cutting deployment time by 60% and maintaining 95% performance scores across all devices.",
  image: "/NamasteGrocer.png",
      technologies: ["React.js", "Tailwind CSS", "REST APIs", "AWS", "CI/CD"],
      category: "utilities",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Loytag Hotel Management System",
      description:
        "Built and integrated the complete frontend for a multi-role hospitality web platform serving Admins, Hosts, Managers, Guests, and Service Providers. Implemented AI chatbot support for real-time assistance, reducing booking errors by 28%. Developed secure Stripe-based payment flow, feedback and complaint modules, and QR-powered property guides. Designed 30+ reusable components in React and Tailwind, improving scalability and cutting new module development time by 15%.",
  image: "/loytaglogo.png",
      technologies: ["React.js", "JavaScript", "CSS3", "Chart.js", "Local Storage"],
      category: "utilities",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "EV Pump — Charging Station Booking Platform",
      description:
        "Created a modern EV charging station booking portal with a focus on performance and user experience. Integrated scheduling features and an interactive dashboard to enhance usability and manage reservations efficiently. Improved booking efficiency by 40% and boosted user retention by 25% through intuitive design and responsive layout optimization.",
  image: "/EVPump.webp",
      technologies: ["React.js", "Tailwind CSS", "JavaScript", "REST APIs"],
      category: "secure",
      demoUrl: "#",
      githubUrl: "#",
    },
  ]

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "utilities", label: "Utilities & Productivity" },
    { id: "secure", label: "Secure Web Applications" },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-32 right-10 w-40 h-40 bg-primary/10 rounded-full animate-particle-rotate blur-2xl"></div>
        <div
          className="absolute bottom-20 left-20 w-28 h-28 bg-secondary/15 rounded-full animate-float blur-xl"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6 leading-tight py-2">My Projects</h2>
            <p className="text-xl text-muted-foreground">
              Showcasing real-world solutions and technical expertise
            </p>
          </div>

          {/* Filter buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4 mb-12 scroll-animate">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 hover-lift ${
                  activeFilter === filter.id
                    ? "bg-primary text-primary-foreground shadow-lg animate-pulse-glow"
                    : "bg-card text-card-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div> */}

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden hover-lift scroll-animate group animate-pulse-glow"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 text-card-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-gradient-to-r from-primary/20 to-secondary/20 text-foreground text-xs rounded-full font-medium hover:from-primary hover:to-secondary hover:text-primary-foreground transition-all duration-300 animate-fade-in-scale"
                        style={{ animationDelay: `${techIndex * 0.1}s` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View more button */}
          <div className="text-center mt-12 scroll-animate">
            <a
              href="#" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <button className="px-8 py-2 md:py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover-lift hover:bg-primary/90 transition-colors animate-pulse-glow flex items-center gap-2 mx-auto">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                View More Projects On GitHub
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
