import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Code, Layers, Smartphone, Zap, ChevronRight, Github, Twitter, Linkedin, Mail } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-gray-950/70 border-b border-gray-800">
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-7 lg:px-8 flex h-19 items-center justify-between">
          <div className="flex items-center gap-2">
            <Layers className="h-6 w-6 text-[#FFD700] drop-shadow-[0_0_3px_rgba(255,215,0,0.3)]" />
            <span className="text-xl font-bold hover:text-[#FFD700]">SoloStack</span>
          </div>
          <nav className="hidden md:flex gap-20">
            <Link href="#services" className="text-base font-medium hover:text-[#FFD700] hover:drop-shadow-[0_0_3px_rgba(255,215,0,0.3)] transition-all">
              Services
            </Link>
            <Link href="#work" className="text-base font-medium hover:text-[#FFD700] hover:drop-shadow-[0_0_3px_rgba(255,215,0,0.3)] transition-all">
              Work
            </Link>
            <Link href="#about" className="text-base font-medium hover:text-[#FFD700] hover:drop-shadow-[0_0_3px_rgba(255,215,0,0.3)] transition-all">
              About
            </Link>
            <Link href="#contact" className="text-base font-medium hover:text-[#FFD700] hover:drop-shadow-[0_0_3px_rgba(255,215,0,0.3)] transition-all">
              Contact
            </Link>
          </nav>
          <Button variant="outline" className="border-gray-700 hover:bg-[#FFD700] text-black">
            Get in Touch
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8 py-24 md:py-40">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-7">
            <div className="inline-block px-6 py-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-base font-medium">
              Modern Web Solutions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-bold leading-[0.85] tracking-tighter">
              Crafting{" "}
              <span className="text-[#FFD700] drop-shadow-[0_0_8px_rgba(255,215,0,0.3)] bg-gradient-to-r from-[#FFD700] to-[#FDB931] bg-clip-text text-transparent">
                Digital
              </span>{" "}
              Experiences
            </h1>
            <p className="text-2xl text-gray-400 max-w-xl font-normal">
              I build modern, responsive websites that help businesses stand out in the digital landscape.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <Button
                size="lg"
                className="group bg-gradient-to-r from-[#FFD700] to-[#FDB931] hover:from-[#FDB931] hover:to-[#FFD700] text-black border-none text-lg px-32 py-4 h-auto w-[400px] shadow-[0_0_15px_rgba(255,215,0,0.3)] hover:shadow-[0_0_20px_rgba(255,215,0,0.4)] transition-all duration-300"
              >
                View My Work
                <ChevronRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-gray-700 hover:bg-gray-800 text-black text-lg px-8 py-3 h-auto"
              >
                Contact Me
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-0.5 bg-[#FFD700]/20 rounded-1g blur-xl"></div>
            <div className="relative backdrop-blur-sm bg-gray-900/70 border border-gray-800 rounded-lg p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex gap-2">
                  <div className="h-4 w-4 rounded-full bg-red-500"></div>
                  <div className="h-4 w-4 rounded-full bg-yellow-500"></div>
                  <div className="h-4 w-4 rounded-full bg-green-500"></div>
                </div>
                <div className="text-sm text-gray-500 flex-1 text-center">index.html</div>
              </div>
              <pre className="text-base text-gray-300 font-mono overflow-x-auto">
                <code>{`<div class="hero">
  <h1>Hello, World!</h1>
  <p>I create beautiful web experiences</p>
  <button class="cta">Get Started</button>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-30 bg-gray-950">
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">My Services</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I offer a range of services to help businesses establish a strong online presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {/* Service Card 1 */}
            <div className="group relative backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-6 hover:border-[#FFD700]/50 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD700]/20 to-[#FDB931]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-gray-800/50 p-3 rounded-lg w-fit mb-4">
                  <Code className="h-6 w-6 text-[#FFD700] drop-shadow-[0_0_3px_rgba(255,215,0,0.3)]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Web Development</h3>
                <p className="text-gray-400">
                  Custom websites built with modern technologies that are fast, responsive, and easy to maintain.
                </p>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-6 hover:border-[#FFD700]/50 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD700]/20 to-[#FDB931]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-gray-800/50 p-3 rounded-lg w-fit mb-4">
                  <Smartphone className="h-6 w-6 text-[#FFD700] drop-shadow-[0_0_3px_rgba(255,215,0,0.3)]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Responsive Design</h3>
                <p className="text-gray-400">
                  Websites that look and function perfectly on all devices, from desktops to smartphones.
                </p>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-6 hover:border-[#FFD700]/50 transition-all duration-300">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-[#FFD700]/20 to-[#FDB931]/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="bg-gray-800/50 p-3 rounded-lg w-fit mb-4">
                  <Zap className="h-6 w-6 text-[#FFD700] drop-shadow-[0_0_3px_rgba(255,215,0,0.3)]" />
                </div>
                <h3 className="text-xl font-bold mb-2">Performance Optimization</h3>
                <p className="text-gray-400">
                  Speed up your website for better user experience and improved search engine rankings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Section */}
      <section id="work" className="py-20">
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Recent Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Check out some of my latest projects and see what I can do for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project 1"
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">E-Commerce Website</h3>
                <p className="text-gray-300 mb-4">A modern online store with seamless checkout experience</p>
                <Button variant="outline" size="sm" className="w-fit border-gray-600 bg-gray-900/50 backdrop-blur-sm">
                  View Project
                </Button>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/images/marketing.png"
                alt="Project 2"
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">Marketing Website</h3>
                <p className="text-gray-300 mb-4">A professional and sleek marketing website for a business</p>
                <Button variant="outline" size="sm" className="w-fit border-gray-600 bg-gray-900/50 backdrop-blur-sm">
                  View Project
                </Button>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Project 3"
                width={800}
                height={600}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold mb-2">Portfolio Website</h3>
                <p className="text-gray-300 mb-4">Creative portfolio for a digital artist showcasing their work</p>
                <Button variant="outline" size="sm" className="w-fit border-gray-600 bg-gray-900/50 backdrop-blur-sm">
                  View Project
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center text-black">
            <Button variant="outline" className="border-gray-700 hover:bg-[#FFD700]">
              View All Projects
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-30 bg-gray-950">
        <div className="container mx-auto max-w-[1800px] px-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="relative flex justify-center">
              <div className="relative w-[400px] h-[400px] rounded-full overflow-hidden border-10 border-[#FFD700] shadow-[0_0_15px_rgba(255,215,0,0.3)]">
                <Image
                  src="/images/selfie1.jpg"
                  alt="Developer"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">About Me</h2>
              <p className="text-gray-400">
                I'm a passionate web developer with over 5 years of experience creating modern, user-friendly websites
                and applications. I specialize in front-end development with a focus on creating beautiful, responsive
                interfaces.
              </p>
              <p className="text-gray-400">
                My approach combines technical expertise with an eye for design to deliver websites that not only
                function flawlessly but also look stunning.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">Frontend</h3>
                  <p className="text-gray-400 text-sm">React, Next.js, Tailwind CSS, TypeScript</p>
                </div>
                <div className="backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">Backend</h3>
                  <p className="text-gray-400 text-sm">Node.js, Express, MongoDB, PostgreSQL</p>
                </div>
                <div className="backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">Design</h3>
                  <p className="text-gray-400 text-sm">Figma, Adobe XD, UI/UX Principles</p>
                </div>
                <div className="backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-4">
                  <h3 className="text-lg font-bold mb-2">Tools</h3>
                  <p className="text-gray-400 text-sm">Git, GitHub, VS Code, Docker</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto max-w-[1800px] px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a project in mind? Let's discuss how I can help bring your ideas to life.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-8">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                      placeholder="Your email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Project inquiry"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary/50"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <Button className="w-full">Send Message</Button>
              </form>
            </div>

            <div className="space-y-8">
              <div className="backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Email</p>
                      <p className="font-medium">hello@devstudio.com</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-800/50 p-3 rounded-lg">
                      <Smartphone className="h-5 w-5 text-[#FFD700]" />
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Phone</p>
                      <p className="font-medium">+1 (555) 123-4567</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Follow Me</h3>
                <div className="flex gap-4">
                  <a href="#" className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <Github className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="bg-gray-800/50 p-3 rounded-lg hover:bg-gray-700/50 transition-colors">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </div>

              <div className="backdrop-blur-sm bg-gray-900/40 border border-gray-800 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Let's Work Together</h3>
                <p className="text-gray-400 mb-4">
                  I'm currently available for freelance work. If you have a project that needs some creative touch, I'd
                  love to hear about it.
                </p>
                <Button variant="outline" className="border-gray-700 hover:bg-gray-800">
                  View My Schedule
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-800">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Layers className="h-6 w-6 text-[#FFD700]" />
                <span className="text-xl font-bold">DevStudio</span>
              </div>
              <p className="text-gray-400 text-sm">Creating beautiful digital experiences that make an impact.</p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-[#FFD700] transition-colors">
                    Web Development
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFD700] transition-colors">
                    Responsive Design
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFD700] transition-colors">
                    Performance Optimization
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-[#FFD700] transition-colors">
                    E-Commerce Solutions
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-gray-400">© {new Date().getFullYear()} DevStudio. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#FFD700] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

