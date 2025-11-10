"use client"

import { useState, useEffect } from "react"

export default function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const roles = [
    "A Passionate Frontend Developer",
    "React & JavaScript Expert",
    "UI/UX Innovation Specialist",
    "Code Architecture Enthusiast",
    "Performance Optimization Guru",
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length)
    }, 2500)

    return () => clearInterval(interval)
  }, [])

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full animate-float blur-3xl"></div>
        <div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/15 rounded-full animate-float blur-2xl"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute top-1/2 left-1/4 w-64 h-64 bg-accent/10 rounded-full animate-particle-rotate blur-xl"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile image placeholder */}
          <div className="mb-8 animate-fade-in-scale">
            <div className="w-40 h-40 mx-auto rounded-full bg-gradient-to-br from-primary via-secondary to-accent animate-pulse-glow relative overflow-hidden">
              <div className="absolute inset-2 rounded-full bg-gradient-to-br from-primary/80 to-secondary/80 animate-particle-rotate"></div>
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-accent/60 to-primary/60 animate-float"></div>
            </div>
          </div>

          {/* Main heading with image reference */}
          <div className="mb-6 animate-slide-in-up">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-foreground">Hi, I'm </span>
              <span className="gradient-text animate-pulse-glow">Yogesh Kumar</span>
            </h1>
          </div>

          {/* Animated role */}
          <div className="mb-8 animate-slide-in-up" style={{ animationDelay: "0.2s" }}>
            <div className="h-20 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                <span className="inline-block animate-fade-in-scale gradient-text font-bold" key={currentRole}>
                  {roles[currentRole]}
                </span>
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="mb-12 animate-slide-in-up" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Frontend Developer with hands-on experience in building responsive, scalable, and high-performing web applications. Currently a Trainee at Fonix Technologies, with prior internship experience at Cosmo Logic IT Solutions. Skilled in ReactJS, Tailwind CSS, and RESTful APIs with strong expertise in UI architecture, AWS deployment, and API integration. Proven track record of reducing load times, optimizing performance, and delivering user-friendly solutions — from AI-powered hotel management systems to real-time grocery platforms. Solid foundation in Data Structures & Algorithms, with a strong focus on usability, accessibility, and maintainability.
            </p>
          </div>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <button
              onClick={scrollToProjects}
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover-lift hover:bg-primary/90 transition-colors animate-pulse-glow"
            >
              View My Work
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover-lift hover:bg-primary hover:text-primary-foreground transition-all"
            >
              Get In Touch
            </button>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center animate-pulse-glow">
              <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
