import { useState } from "react"
import axios from "axios"
import { useForm } from "react-hook-form"
import toast, { Toaster } from "react-hot-toast"

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    const userInfo = {
      name: data.name,
      email: data.email,
      message: data.message,
    }
    
    try {
      // Using getform.io - you can create a free account and get your form endpoint
      await axios.post("https://getform.io/f/brogvnea", userInfo)
      toast.success("Thank you for your message! I'll get back to you soon.")
      reset() // Reset form fields
    } catch (error) {
      console.log(error)
      toast.error("Something went wrong. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-40 left-10 w-36 h-36 bg-primary/10 rounded-full animate-float blur-2xl"></div>
        <div
          className="absolute bottom-32 right-20 w-24 h-24 bg-secondary/15 rounded-full animate-particle-rotate blur-xl"
          style={{ animationDelay: "4s" }}
        ></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">Contact Me</h2>
            <p className="text-xl text-muted-foreground">Let's start a conversation about your next project</p>
          </div>

          <div className="scroll-animate">
            <div className="bg-card rounded-2xl p-8 hover-lift animate-pulse-glow max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-6 text-primary text-center">Start a Conversation</h3>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-card-foreground">
                    Name
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-card-foreground">
                    Email address
                  </label>
                  <input
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^\S+@\S+$/i,
                        message: "Please enter a valid email"
                      }
                    })}
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-card-foreground">
                    Message
                  </label>
                  <textarea
                    {...register("message", { required: "Message is required" })}
                    id="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed animate-pulse-glow"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="top-right" />
    </section>
  )
}
