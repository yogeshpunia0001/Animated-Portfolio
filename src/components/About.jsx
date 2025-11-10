export default function About() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 scroll-animate">
            <h2 className="text-4xl md:text-5xl font-bold gradient-text mb-6">About Me</h2>
            <p className="text-xl text-muted-foreground">Crafting digital experiences with passion and precision</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="scroll-animate">
              <div className="bg-card rounded-2xl p-8 hover-lift">
                <h3 className="text-2xl font-bold mb-6 text-primary">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                My journey in tech began with building my first project, an EV Pump platform, where I explored how design and functionality can solve real-world problems. This hands-on experience sparked my passion for creating responsive and user-friendly applications.

I then joined Cosmo Logic IT Solutions as a Frontend Development Intern, where I worked on real-time live projects. One of the highlights was independently handling the frontend of a scalable grocery web application, integrating RESTful APIs and optimizing performance to deliver a smooth user experience.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                 Currently, I am a Trainee at Fonix Technologies, where I lead independent frontend projects, interact with clients, and ensure delivery of scalable solutions. I have contributed to 10+ live projects, including a hotel management system with AI chatbot support, role-based dashboards, and secure Stripe payments. These experiences have strengthened my skills in React.js, Next.js , Tailwind CSS, and API integration, while also giving me confidence in handling end-to-end frontend development with a strong focus on usability, performance, and collaboration.
                </p>
              </div>
            </div>

            <div className="scroll-animate" style={{ animationDelay: "0.2s" }}>
              <div className="space-y-6">
                <div className="bg-card rounded-xl p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                        />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold">Problem Solver & Fast Learner</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                   Always eager to learn new technologies and tackle real-world challenges with creativity and precision. Skilled at breaking down complex problems into practical, efficient solutions.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
  xmlns="http://www.w3.org/2000/svg"
  width="28"
  height="28"
  viewBox="0 0 24 24"
  fill="none"
  stroke="#10b981"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
  className="lucide lucide-users"
>
  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
  <path d="M16 3.128a4 4 0 0 1 0 7.744" />
  <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
  <circle cx="9" cy="7" r="4" />
</svg>

                    </div>
                    <h4 className="text-lg font-semibold">Teamwork & Leadership</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                   Believes in taking the whole team forward — whether in hackathons, group projects, or internships. Strong leadership and collaboration skills that inspire, support, and achieve results together.
                  </p>
                </div>

                <div className="bg-card rounded-xl p-6 hover-lift">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mr-4">
                      <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 64 64"
  className="w-10 h-10 text-[#10b981]"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
>
  {/* Desktop screen */}
  <rect x="4" y="10" width="40" height="28" rx="2" ry="2" />
  <rect x="18" y="40" width="12" height="4" rx="1" ry="1" /> {/* desktop stand */}

  {/* Mobile screen */}
  <rect x="48" y="16" width="12" height="24" rx="2" ry="2" />

  {/* Bubbles around (particles) */}
  <circle cx="12" cy="6" r="2">
    <animate attributeName="cy" values="6;2;6" dur="3s" repeatCount="indefinite" />
  </circle>
  <circle cx="30" cy="4" r="1.5">
    <animate attributeName="cy" values="4;0;4" dur="2.5s" repeatCount="indefinite" />
  </circle>
  <circle cx="56" cy="8" r="2">
    <animate attributeName="cy" values="8;3;8" dur="4s" repeatCount="indefinite" />
  </circle>
  <circle cx="50" cy="46" r="1.5">
    <animate attributeName="cy" values="46;50;46" dur="3.5s" repeatCount="indefinite" />
  </circle>
</svg>

                    </div>
                    <h4 className="text-lg font-semibold">Creative, Responsive & Impactful Design</h4>
                  </div>
                  <p className="text-muted-foreground text-sm">
                   Passionate about crafting creative and responsive interfaces that adapt seamlessly across devices. Dedicated to designing UIs that not only work beautifully but also deliver the “wow” factor, leaving a lasting impression on users.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="mt-16 scroll-animate" style={{ animationDelay: "0.4s" }}>
            <div className="bg-card rounded-2xl p-8 hover-lift">
              <h3 className="text-2xl font-bold mb-8 text-primary">Professional Experience</h3>

              <div className="border-l-4 border-primary/30 pl-6">
                <div className="mb-8">
                  <h4 className="text-xl font-semibold text-foreground mb-2">🚀 Frontend Development Trainee</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <p className="text-primary font-medium">Fonix Technologies</p>
                    <p className="text-muted-foreground text-sm">Apr 2025 – Present | Jaipur</p>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4 italic">
                    Joined as a Frontend Development Intern, and promoted early to Trainee in just 5 months (1 month ahead of the standard 6-month track) for exceptional ownership, performance, and technical contribution.
                  </p>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Led development of 7+ responsive web solutions, including an AI-integrated chatbot and multi-role hotel management dashboards.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Collaborated with 5+ client teams, improving post-deployment satisfaction by 23% through consistent design and optimized performance.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Integrated secure Stripe payments and i18n (multi-language) support, enabling scalable and global-ready products.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Architected modular, reusable ReactJS components, reducing development time for new modules by 15%.
                      </span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="text-xl font-semibold text-foreground mb-2"> 💡Frontend Development Intern</h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <p className="text-primary font-medium">Cosmo Logic IT Solutions Pvt. Ltd.</p>
                    <p className="text-muted-foreground text-sm">Nov 2024 – Mar 2025 | Greater Noida</p>
                  </div>

                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Contributed to frontend optimization and scalable component design for production ReactJS applications.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Optimized core ReactJS components using Tailwind CSS, cutting page load times by 28%.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Performed code reviews that reduced production bugs by 8%, enhancing maintainability.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span>
                        Collaborated with senior developers to standardize UI systems and improve performance efficiency.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
