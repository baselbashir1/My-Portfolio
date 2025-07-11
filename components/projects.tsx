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
            url: "https://wareed.sy",
            image: "/images/wareed.png",
            stats: {stars: 5, forks: 0, watchers: 10},
            status: "Production",
            category: "Full Stack",
            featured: true,
            buttonText: "Visit"
        },
        {
            title: "Buhothy",
            description:
                "A website tailored for Gulf students, enabling them to order educational research based on specific requests. The platform includes a payment system for processing orders and an admin dashboard for managing user interactions and content.",
            longDescription:
                "A website tailored for Gulf students, enabling them to order educational research based on specific requests. The platform includes a payment system for processing orders and an admin dashboard for managing user interactions and content.",
            technologies: ["Laravel", "MVC", "PHP", "JavaScript", "Bootstrap", "Git", "Stripe", "MySQL"],
            github: "https://github.com/baselbashir1/Bhoothat-Website",
            url: "https://buhothy.com/en",
            image: "/images/buhothy.png",
            stats: {stars: 3, forks: 0, watchers: 10},
            status: "Production",
            category: "Full Stack",
            featured: true,
            buttonText: "Visit"
        },
        {
            title: "Akrab Elik Application",
            description:
                "A mobile application that provides real-time support, enables activation and cancellation of services, bundles, and offers (minutes and internet), delivers customer usage insights, facilitates payments via Syriatel Cash, and allows users to register complaints (e.g., coverage issues). It is complemented by a web-based control panel that empowers the marketing team to efficiently manage services, monitor customer activity, and enhance engagement.",
            longDescription:
                "A mobile application that provides real-time support, enables activation and cancellation of services, bundles, and offers (minutes and internet), delivers customer usage insights, facilitates payments via Syriatel Cash, and allows users to register complaints (e.g., coverage issues). It is complemented by a web-based control panel that empowers the marketing team to efficiently manage services, monitor customer activity, and enhance engagement.",
            technologies: ["Spring Boot", "Java", "Microservices", "RabbitMQ", "Redis", "Docker", "Kubernetes", "GitLab", "CI/CD", "Grafana", "Prometheus", ".NET Framework", "PLSQL", "Oracle Database"],
            image: "",
            stats: {stars: 5, forks: 0, watchers: 10},
            status: "Production",
            category: "Back End",
            featured: true,
            buttonText: "Download App"
        },
        {
            title: "Bulk Messaging System",
            description:
                "A messaging platform that enables companies and third parties to send SMS messages to their customers through BMS. It serves media companies, universities, financial institutions, and brands, helping them streamline communication, outreach, and customer engagement.",
            longDescription:
                "A messaging platform that enables companies and third parties to send SMS messages to their customers through BMS. It serves media companies, universities, financial institutions, and brands, helping them streamline communication, outreach, and customer engagement.",
            technologies: ["Spring Boot", "Java", "Microservices", "RabbitMQ", "Apache Camel", "Docker", "PLSQL", "Oracle Database"],
            image: "",
            stats: {stars: 5, forks: 0, watchers: 10},
            status: "Production",
            category: "Back End",
            featured: true,
            buttonText: "Visit"
        },
        {
            title: "Kabinetry",
            description:
                "A family-owned, full-service kitchen and bath business in custom cabinetry. Specialize in tailored solutions for residential & commercial projects.",
            longDescription:
                "A family-owned, full-service kitchen and bath business in custom cabinetry. Specialize in tailored solutions for residential & commercial projects.",
            technologies: ["SEO", "WordPress", "SEMrush", "PageSpeed Insights", "Google Search Console", "Google Analytics", "Yoast SEO", "MySQL"],
            url: "https://kabinetry.ca/",
            image: "/images/kabinetry.png",
            stats: {stars: 4, forks: 0, watchers: 7},
            status: "Production",
            category: "SEO",
            featured: true,
            buttonText: "Visit"
        },
        {
            title: "QONDOS",
            description:
                "An application for maintenance technicians that enables clients to request specific home maintenance services, this project contains RESTful APIs built using PHP Laravel which provides multi-authentication using Laravel Passport tokens to specify the user's authenticated type and you can set your location to request the nearest maintenance.",
            longDescription:
                "An application for maintenance technicians that enables clients to request specific home maintenance services, this project contains RESTful APIs built using PHP Laravel which provides multi-authentication using Laravel Passport tokens to specify the user's authenticated type and you can set your location to request the nearest maintenance.",
            technologies: ["Laravel", "REST APIs", "MVC", "PHP", "JavaScript", "Bootstrap", "Firebase", "Git", "MySQL"],
            github: "https://github.com/baselbashir1/QONDOS",
            url: "https://www.goldensoft.online/project-details/22",
            image: "/images/qondos.png",
            stats: {stars: 0, forks: 0, watchers: 0},
            status: "Test",
            category: "Back End",
            featured: true,
            buttonText: "Demo"
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
            featured: false,
            buttonText: "Demo"
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
            featured: false,
            buttonText: "Demo"
        },
        {
            title: "Invoices Management System",
            description:
                "Laravel project dashboard for a debt collection system used by companies responsible for collecting debts on behalf of banks.",
            longDescription:
                "Laravel project dashboard for a debt collection system used by companies responsible for collecting debts on behalf of banks.",
            technologies: ["Laravel", "MVC", "PHP", "JavaScript", "Bootstrap", "Firebase", "Git", "MySQL"],
            github: "https://github.com/baselbashir1/Invoices-Management-System",
            image: "/images/invoices1.jpg",
            stats: {stars: 0, forks: 0, watchers: 0},
            status: "Test",
            category: "Full Stack",
            featured: false,
            buttonText: "Demo"
        },
        {
            title: "LaraGigs",
            description:
                "A Laravel-based community platform for sharing job opportunities, showcasing projects, and fostering collaboration among developers and professionals.",
            longDescription:
                "A Laravel-based community platform for sharing job opportunities, showcasing projects, and fostering collaboration among developers and professionals.",
            technologies: ["Laravel", "MVC", "PHP", "JavaScript", "Bootstrap", "Git", "MySQL"],
            github: "https://github.com/baselbashir1/LaraGigs",
            image: "/images/laragigs.jpg",
            stats: {stars: 0, forks: 0, watchers: 0},
            status: "Test",
            category: "Full Stack",
            featured: false,
            buttonText: "Demo"
        },
        {
            title: "Glasses Store",
            description:
                "Glasses store dashboard using Laravel and JavaScript DOM. It creates a file for every customer, which contains their purchase history and invoices, and also allows for the management of products and client details.",
            longDescription:
                "Glasses store dashboard using Laravel and JavaScript DOM. It creates a file for every customer, which contains their purchase history and invoices, and also allows for the management of products and client details.",
            technologies: ["Laravel", "MVC", "PHP", "JavaScript", "Bootstrap", "Git", "MySQL"],
            github: "https://github.com/baselbashir1/LaraGigs",
            image: "/images/glasses2.jpg",
            stats: {stars: 0, forks: 0, watchers: 0},
            status: "Test",
            category: "Full Stack",
            featured: false,
            buttonText: "Demo"
        },
        {
            title: "Travels",
            description:
                "Java web project using Java servlets and JSP for adding and modifying available travel options.",
            longDescription:
                "Java web project using Java servlets and JSP for adding and modifying available travel options.",
            technologies: ["Java", "MVC", "JSP", "JavaScript", "Bootstrap", "Git", "MySQL"],
            github: "https://github.com/baselbashir1/Travels",
            image: "/images/travels.jpg",
            stats: {stars: 0, forks: 0, watchers: 0},
            status: "Test",
            category: "Full Stack",
            featured: false,
            buttonText: "Demo"
        },
    ]

    const featuredProjects = projects.filter((p) => p.featured)

    return (
        <section ref={sectionRef} id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Enhanced background effects */}
            <div className="absolute inset-0">
                <div
                    className="absolute top-20 right-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
                <div
                    className="absolute bottom-20 left-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"
                    style={{animationDelay: "2s"}}
                ></div>
                <div className="absolute inset-0 matrix-bg opacity-5"></div>
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                <div
                    className={`text-center mb-16 transition-all duration-1000 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-block mb-4">
            <span className="font-mono text-primary text-sm glass-effect px-4 py-2 rounded-full neon-border">
              // Portfolio Showcase
            </span>
                    </div>
                    <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
                        Featured Projects
                        <div
                            className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-50 animate-pulse"></div>
                    </h2>
                    {/*<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">*/}
                    {/*    Real-world applications showcasing scalable architecture and clean code principles*/}
                    {/*</p>*/}
                </div>

                {/* Featured Projects Grid */}
                <div className="grid lg:grid-cols-2 gap-8">
                    {featuredProjects.map((project, index) => (
                        <Card
                            key={index}
                            className={`group overflow-hidden border-0 glass-effect-strong neon-border hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                            style={{animationDelay: `${index * 0.2}s`}}
                            onMouseEnter={() => setActiveProject(index)}
                            onMouseLeave={() => setActiveProject(null)}
                        >
                            <div className="relative overflow-hidden">
                                <div
                                    className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 relative">
                                    <img
                                        src={project.image || "/placeholder.svg"}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div
                                        className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                                    {/* Project stats overlay */}
                                    <div className="absolute top-4 right-4 flex gap-2">
                                        <Badge variant="secondary" className="glass-effect neon-border">
                                            {project.status}
                                        </Badge>
                                        <Badge variant="outline"
                                               className="glass-effect neon-border text-primary border-primary/50">
                                            {project.category}
                                        </Badge>
                                    </div>

                                    {/* GitHub stats */}
                                    {/*<div*/}
                                    {/*    className="absolute bottom-4 left-4 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">*/}
                                    {/*    <div*/}
                                    {/*        className="flex items-center gap-1 text-white text-sm glass-effect px-2 py-1 rounded">*/}
                                    {/*        <Star className="h-4 w-4 text-yellow-400"/>*/}
                                    {/*        {project.stats.stars}*/}
                                    {/*    </div>*/}
                                    {/*    <div*/}
                                    {/*        className="flex items-center gap-1 text-white text-sm glass-effect px-2 py-1 rounded">*/}
                                    {/*        <GitFork className="h-4 w-4 text-blue-400"/>*/}
                                    {/*        {project.stats.forks}*/}
                                    {/*    </div>*/}
                                    {/*    <div*/}
                                    {/*        className="flex items-center gap-1 text-white text-sm glass-effect px-2 py-1 rounded">*/}
                                    {/*        <Eye className="h-4 w-4 text-green-400"/>*/}
                                    {/*        {project.stats.watchers}*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}
                                </div>
                            </div>

                            <CardHeader className="relative">
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-secondary/10 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <CardTitle
                                    className="text-xl text-foreground group-hover:text-primary transition-colors relative z-10">
                                    {project.title}
                                </CardTitle>
                                <CardDescription className="text-base text-muted-foreground relative z-10">
                                    {activeProject === index ? project.longDescription : project.description}
                                </CardDescription>
                            </CardHeader>

                            <CardContent className="relative">
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <Badge
                                            key={techIndex}
                                            variant="outline"
                                            className="glass-effect neon-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300"
                                        >
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    {/* Conditionally show GitHub button */}
                                    {project.github && (
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            asChild
                                            className="group/btn glass-effect neon-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 bg-transparent"
                                        >
                                            <Link href={project.github}>
                                                <Github className="mr-2 h-4 w-4 group-hover/btn:animate-spin"/>
                                                Code
                                            </Link>
                                        </Button>
                                    )}

                                    {/* Existing url button */}
                                    {project.url && (
                                        <Button
                                            size="sm"
                                            asChild
                                            className="spring-gradient hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
                                        >
                                            <Link href={project.url}>
                                                {/*<ExternalLink className="mr-2 h-4 w-4"/>*/}
                                                {project.buttonText}
                                            </Link>
                                        </Button>
                                    )}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>

                {/* View All Projects Button */}
                <div className="text-center mt-12">
                    <Button
                        variant="outline"
                        size="lg"
                        className="glass-effect-strong neon-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 transform hover:scale-105 bg-transparent"
                    >
                        View All Projects
                        <ExternalLink className="ml-2 h-5 w-5"/>
                    </Button>
                </div>
            </div>
        </section>
    )
}