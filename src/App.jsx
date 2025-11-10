import { useState, useEffect } from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import ParticleBackground from "./components/ParticleBackground"

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)

    // Scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate")
        }
      })
    }, observerOptions)

    // Observe all scroll-animate elements
    const animateElements = document.querySelectorAll(".scroll-animate")
    animateElements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <div
      className={`min-h-screen bg-background transition-opacity duration-1000 relative ${isLoaded ? "opacity-100" : "opacity-0"}`}
    >
      <ParticleBackground />
      <Header />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
