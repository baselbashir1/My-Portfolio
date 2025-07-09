"use client"

import {useEffect, useRef, useState} from "react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Button} from "@/components/ui/button"
import {Badge} from "@/components/ui/badge"
import {Github, ExternalLink, Star, GitFork, Eye} from "lucide-react"
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
            {threshold: 0.1},
        )

        if (sectionRef.current) {
            observer.observe(sectionRef.current)
        }

        return () => observer.disconnect()
    }, [])

    const projects = [
        {
            title: "Wareed",
            description:
                "A medical website in partnership with Wareed, providing users with an intuitive platform to view and search for doctors, book appointments within specified timeframes, and access additional services. A dedicated dashboard allows doctors to manage appointments and other essential controls.",
            longDescription:
                "A medical website in partnership with Wareed, providing users with an intuitive platform to view and search for doctors, book appointments within specified timeframes, and access additional services. A dedicated dashboard allows doctors to manage appointments and other essential controls.",
            technologies: ["Laravel", "Vue.js", "PHP", "JavaScript", "Bootstrap", "Git", "MySQL"],
            github: "https://github.com/baselbashir1",
            demo: "https://wareed.sy",
            image: "/images/wareed.png",
            stats: {stars: 5, forks: 0, watchers: 10},
            status: "Production",
            category: "Full Stack",
        },
        {
            title: "Buhothy",
            description:
                "A website for gulf students that enables them to order educational researches based on specific requests. Users can make payments for their orders, and the payment method is implemented using Laravel, JavaScript, and Stripe.",
            longDescription:
                "A user-friendly website tailored for Gulf students, enabling them to order educational research based on specific requests. The platform includes a payment system for processing orders and an admin dashboard for managing user interactions and content.",
            technologies: ["Laravel", "MVC", "PHP", "JavaScript", "Bootstrap", "Git", "Stripe", "MySQL"],
            github: "https://github.com/baselbashir1/Bhoothat-Website",
            demo: "https://buhothy.com/en",
            image: "/images/buhothy.png",
            stats: {stars: 3, forks: 0, watchers: 10},
            status: "Production",
            category: "Full Stack",
        },
        {
            title: "Kabinetry",
            description:
                "A family-owned, full-service kitchen and bath business in custom cabinetry. Specialize in tailored solutions for residential & commercial projects.",
            longDescription:
                "A family-owned, full-service kitchen and bath business in custom cabinetry. Specialize in tailored solutions for residential & commercial projects.",
            technologies: ["SEO", "WordPress", "SEMrush", "PageSpeed Insights", "Google Search Console", "Google Analytics", "Yoast SEO", "MySQL"],
            github: "https://github.com",
            demo: "https://kabinetry.ca/",
            image: "/images/kabinetry.png",
            stats: {stars: 4, forks: 0, watchers: 7},
            status: "Production",
            category: "SEO",
        },
        {
            title: "QONDOS",
            description:
                "An application for maintenance technicians that enables clients to request specific home maintenance services, this project contains RESTful APIs built using PHP Laravel which provides multi-authentication using Laravel Passport tokens to specify the user's authenticated type and you can set your location to request the nearest maintenance.",
            longDescription:
                "An application for maintenance technicians that enables clients to request specific home maintenance services, this project contains RESTful APIs built using PHP Laravel which provides multi-authentication using Laravel Passport tokens to specify the user's authenticated type and you can set your location to request the nearest maintenance.",
            technologies: ["Laravel", "REST APIs", "MVC", "PHP", "JavaScript", "Bootstrap", "Firebase", "Git", "MySQL"],
            github: "https://github.com/baselbashir1/QONDOS",
            image: "/images/qondos.png",
            stats: {stars: 0, forks: 0, watchers: 0},
            status: "Test",
            category: "Back End",
        },
        {
            title: "E-commerce System with Microservices Architecture",
            description:
                "A scalable e-commerce platform designed with microservices using Java Spring Boot and Docker. It integrates Spring Cloud for service management, Apache Kafka for messaging, and Keycloak for secure authentication and authorization. The system features distributed tracing with Zipkin and real-time monitoring via Prometheus and Grafana. Additionally, it includes a WebSocket-based real-time chat application for seamless user communication.",
            longDescription:
                "A scalable e-commerce platform designed with microservices using Java Spring Boot and Docker. It integrates Spring Cloud for service management, Apache Kafka for messaging, and Keycloak for secure authentication and authorization. The system features distributed tracing with Zipkin and real-time monitoring via Prometheus and Grafana. Additionally, it includes a WebSocket-based real-time chat application for seamless user communication.",
            technologies: ["Spring Boot", "Spring Cloud", "Microservices", "Java", "Apache Kafka", "Keycloak", "Zipkin", "Docker", "Prometheus", "Grafana", "WebSocket", "Firebase", "MySql", "PostgreSql", "MongoDB"],
            github: "https://github.com/baselbashir1/E-Commerce-Microservices",
            image: "/images/microservices.png",
            stats: {stars: 0, forks: 0, watchers: 0},
            status: "Test",
            category: "Back End",
        },
        {
            title: "HyperX Store",
            description:
                "An e-commerce system using Laravel, which includes an online store for ordering HyperX products online. It also features a payment method integration using Stripe, and stores images in Firebase for access from another project, specifically an E-commerce Dashboard.",
            longDescription:
                "An e-commerce system using Laravel, which includes an online store for ordering HyperX products online. It also features a payment method integration using Stripe, and stores images in Firebase for access from another project, specifically an E-commerce Dashboard.",
            technologies: ["Laravel", "MVC", "PHP", "JavaScript", "Bootstrap", "Stripe", "Firebase", "Git", "MySQL"],
            github: "https://github.com/baselbashir1/Laravel_Ecommerce",
            image: "/images/hyperx.png",
            stats: {stars: 0, forks: 0, watchers: 0},
            status: "Test",
            category: "Full Stack",
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
                <div
                    className="absolute top-20 right-20 w-60 h-60 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-pulse pulse-glow"></div>
                <div
                    className="absolute bottom-20 left-20 w-60 h-60 sm:w-72 sm:h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse pulse-glow"
                    style={{animationDelay: "2s"}}
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
            <span
                className="font-mono text-primary text-xs sm:text-sm glass-effect-strong px-4 py-2 rounded-full neon-border pulse-glow">
              // Portfolio Showcase
            </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
                        Featured Projects
                        <div
                            className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-50 animate-pulse"></div>
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
                            className={`group overflow-hidden border-0 glass-effect-strong neon-border hover:shadow-2xl transition-all transform hover:scale-[1.02] ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            } ${index % 2 === 0 ? "slide-in-left" : "slide-in-right"}`}
                            style={{transitionDelay: `${index * 0.2}s`}}
                            onMouseEnter={() => setActiveProject(index)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="relative overflow-hidden">
                                <div
                                    className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                    {/* Enhanced project stats overlay */}
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <Badge variant="secondary"
                                               className="glass-effect-strong neon-border animate-pulse">
                                            {project.status}
                                        </Badge>
                                        <Badge
                                            variant="outline"
                                            className="glass-effect-strong neon-border text-primary border-primary/50 animate-pulse"
                                            style={{animationDelay: "1.5s"}}
                                        >
                                            {project.category}
                                        </Badge>
                                    </div>

                                    {/* Enhanced GitHub stats */}
                                    <div
                                        className="absolute bottom-4 left-4 flex gap-3 sm:gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <div
                                            className="flex items-center gap-1 text-white text-xs sm:text-sm glass-effect-strong px-2 py-1 rounded neon-border">
                                            <Star className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-400 animate-pulse"/>
                                            {project.stats.stars}
                                        </div>
                                        <div
                                            className="flex items-center gap-1 text-white text-xs sm:text-sm glass-effect-strong px-2 py-1 rounded neon-border">
                                            <GitFork className="h-3 w-3 sm:h-4 sm:w-4 text-blue-400 animate-pulse"/>
                                            {project.stats.forks}
                                        </div>
                                        <div
                                            className="flex items-center gap-1 text-white text-xs sm:text-sm glass-effect-strong px-2 py-1 rounded neon-border">
                                            <Eye className="h-3 w-3 sm:h-4 sm:w-4 text-green-400 animate-pulse"/>
                                            {project.stats.watchers}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <CardHeader className="p-4 sm:p-6 relative">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                <CardTitle
                                    className="text-lg sm:text-xl text-foreground group-hover:text-primary transition-colors relative z-10">
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
                                            className="glass-effect-strong neon-border hover:bg-primary/10 hover:border-primary/50 transition-all text-xs shimmer"
                                            style={{animationDelay: `${techIndex * 0.1}s`}}
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
                                        className="group/btn glass-effect-strong neon-border hover:bg-primary/10 hover:border-primary/50 transition-all bg-transparent w-full sm:w-auto pulse-glow"
                                    >
                                        <Link href={project.github}>
                                            <Github className="mr-2 h-4 w-4 group-hover/btn:animate-spin"/>
                                            Code
                                        </Link>
                                    </Button>
                                    {project.demo && (
                                        <Button
                                            size="sm"
                                            asChild
                                            className="spring-gradient hover:shadow-lg hover:shadow-primary/25 transition-all w-full sm:w-auto pulse-glow"
                                        >
                                            <Link href={project.demo}>
                                                <ExternalLink className="mr-2 h-4 w-4"/>
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
                        style={{animationDelay: "1s"}}
                    >
                        View All Projects
                        <ExternalLink className="ml-2 h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}