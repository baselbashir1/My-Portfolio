import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="glass-effect border-t border-primary/20 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl sm:text-2xl font-bold text-primary">
              SpringDev
            </Link>
            <p className="text-muted-foreground mt-2 text-sm sm:text-base">
              Java Spring Boot & Microservices Developer
            </p>
          </div>

          <div className="flex space-x-4 sm:space-x-6">
            <Link
              href="https://github.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full glass-effect neon-border"
            >
              <Github className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full glass-effect neon-border"
            >
              <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:alex.johnson@email.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 rounded-full glass-effect neon-border"
            >
              <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="sr-only">Email</span>
            </Link>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-primary/20 text-center text-muted-foreground text-sm">
          <p>&copy; 2024 Alex Johnson. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
