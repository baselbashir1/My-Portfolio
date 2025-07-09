"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Star, GitFork, Eye } from "lucide-react"
import Link from "next/link"

export function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeProject, setActiveProject] = useState<number | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "E-Commerce Microservices Platform",
      description:
        "A complete e-commerce ecosystem built with microservices architecture, featuring user management, product catalog, order processing, and payment gateway integration.",
      longDescription:
        "This project demonstrates advanced microservices patterns including CQRS, Event Sourcing, and Saga patterns. Built with Spring Boot, it handles over 10,000 concurrent users with 99.9% uptime.",
      technologies: ["Spring Boot", "Spring Cloud", "PostgreSQL", "Redis", "Docker", "Kubernetes", "Apache Kafka"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=400",
      stats: { stars: 234, forks: 67, watchers: 45 },
      status: "Production",
      category: "Full Stack",
    },
    {
      title: "Real-time Analytics Dashboard API",
      description:
        "High-performance REST API for real-time data analytics with event streaming, data aggregation, and WebSocket support for live updates.",
      longDescription:
        "Processes over 1 million events per minute using Apache Kafka and Spring WebFlux. Features custom metrics, alerting system, and predictive analytics capabilities.",
      technologies: ["Spring WebFlux", "WebSocket", "Elasticsearch", "Apache Kafka", "Redis", "MongoDB", "Docker"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=400",
      stats: { stars: 189, forks: 43, watchers: 32 },
      status: "Production",
      category: "Analytics",
    },
    {
      title: "Banking Transaction System",
      description:
        "Secure banking microservice handling financial transactions, account management, and fraud detection with event sourcing patterns.",
      longDescription:
        "Implements advanced security patterns, event sourcing for audit trails, and real-time fraud detection. Handles millions of transactions daily with zero data loss.",
      technologies: ["Spring Boot", "Spring Security", "Event Sourcing", "PostgreSQL", "RabbitMQ", "JWT"],
      github: "https://github.com",
      image: "/placeholder.svg?height=200&width=400",
      stats: { stars: 156, forks: 34, watchers: 28 },
      status: "Production",
      category: "FinTech",
    },
    {
      title: "Multi-Tenant SaaS Platform",
      description:
        "Scalable multi-tenant SaaS platform with tenant isolation, dynamic configuration, and automated billing system.",
      longDescription:
        "Features database-per-tenant architecture, automated scaling, and comprehensive monitoring. Supports over 1000 tenants with 99.99% uptime SLA.",
      technologies: ["Spring Boot", "Spring Data JPA", "MySQL", "Redis", "Apache Kafka", "Docker", "Kubernetes"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/placeholder.svg?height=200&width=400",
      stats: { stars: 298, forks: 78, watchers: 56 },
      status: "Production",
      category: "SaaS",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Enhanced background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-60 h-60 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse pulse-glow"></div>
        <div
          className="absolute bottom-20 left-20 w-60 h-60 sm:w-72 sm:h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse pulse-glow"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute inset-0 matrix-bg opacity-5"></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block mb-4">
            <span className="font-mono text-primary text-xs sm:text-sm glass-effect-strong px-4 py-2 rounded-full neon-border pulse-glow">
              // Portfolio Showcase
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
            Featured Projects
            <div className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-50 animate-pulse"></div>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
            Real-world applications showcasing scalable architecture and clean code principles
          </p>
        </div>

        {/* Enhanced projects grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group overflow-hidden border-0 glass-effect-strong neon-border hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
              style={{ transitionDelay: `${index * 0.2}s` }}
              onMouseEnter={() => setActiveProject(index)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Enhanced project stats overlay */}
                  <div className="absolute top-4 right-4 flex gap-2">
                    <Badge variant="secondary" className="glass-effect-strong neon-border animate-pulse">
                      {project.status}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="glass-effect-strong neon-border text-primary border-primary/50 animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Enhanced GitHub stats */}
                  <div className="absolute bottom-4 left-4 flex gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-1 text-white text-xs sm:text-sm glass-effect-strong px-2 py-1 rounded neon-border">
                      <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 animate-pulse" />
                      {project.stats.stars}
                    </div>
                    <div className="flex items-center gap-1 text-white text-xs sm:text-sm glass-effect-strong px-2 py-1 rounded neon-border">
                      <GitFork className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 animate-pulse" />
                      {project.stats.forks}
                    </div>
                    <div className="flex items-center gap-1 text-white text-xs sm:text-sm glass-effect-strong px-2 py-1 rounded neon-border">
                      <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 animate-pulse" />
                      {project.stats.watchers}
                    </div>
                  </div>
                </div>
              </div>

              <CardHeader className="p-4 sm:p-6 relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardTitle className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors relative z-10">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-sm sm:text-base text-muted-foreground relative z-10">
                  {activeProject === index ? project.longDescription : project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-4 sm:p-6 pt-0 relative">
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="outline"
                      className="glass-effect-strong neon-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-xs shimmer"
                      style={{ animationDelay: `${techIndex * 0.1}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    asChild
                    className="group/btn glass-effect-strong neon-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 bg-transparent w-full sm:w-auto pulse-glow"
                  >
                    <Link href={project.github}>
                      <Github className="mr-2 h-4 w-4 group-hover/btn:animate-spin" />
                      Code
                    </Link>
                  </Button>
                  {project.demo && (
                    <Button
                      size="sm"
                      asChild
                      className="spring-gradient hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 w-full sm:w-auto pulse-glow"
                    >
                      <Link href={project.demo}>
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Enhanced view all button */}
        <div className="text-center mt-8 sm:mt-12">
          <Button
            variant="outline"
            size="lg"
            className="glass-effect-strong neon-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 bg-transparent pulse-glow scale-in"
            style={{ animationDelay: "1s" }}
          >
            View All Projects
            <ExternalLink className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  )
}
