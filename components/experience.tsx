"use client"

import {useEffect, useRef, useState} from "react"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {CalendarDays, MapPin} from "lucide-react"

export function Experience() {
    const [isVisible, setIsVisible] = useState(false)
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

    const experiences = [
        {
            title: "Software Engineer",
            company: "Syriatel Mobile Telecom",
            location: "Damascus, Syria",
            period: "Sep 2022 - Present",
            description:
                "Responsible for developing new applications and enhancing existing ones, focusing on performance, scalability, and bug resolution. Implementing DevOps involves setting up infrastructure and pipelines for multiple programming languages. Containerized applications and databases using Docker to improve workflows and deployments.",
            achievements: [
                "Designed and implemented scalable enterprise applications with Spring Boot, secured APIs, and microservices architecture.",
                "Built and optimized CI/CD pipelines for multi-language environments, automating build, release, and deployment processes to improve delivery speed, reliability, and consistency.",
                "Containerized and deployed applications and databases using Docker, improving deployment speed, scalability, and reliability.",
                "Developed and optimized databases, focusing on performance tuning, query optimization, and infrastructure scalability.",
                "Implemented monitoring and observability tools (Grafana, Prometheus) for system health, performance tracking, troubleshooting, and maintaining high availability.",
                "Managed production environments, servers, and database infrastructure to support business-critical applications."
            ],
            technologies: ["Java", "Spring Boot", "Microservices", "RabbitMQ", "DevOps", "Docker", "Kubernetes", "GitLab CI/CD", "Redis", "Grafana", "Prometheus", "SonarQube", "Firebase", "Apache Camel", "C#", ".NET Framework", "PLSQL", "Oracle Database"],
        },
        {
            title: "Software Engineer",
            company: "Elev8xr",
            location: "Toronto, Canada",
            period: "Nov 2024 - Feb 2025",
            description:
                "Worked extensively on SEO and WordPress, optimizing websites for search engines by implementing on-page SEO strategies, enhancing site structure, refining meta tags, and integrating schema markup to improve visibility and ranking. Managed technical SEO aspects,including site speed optimization, structured data implementation, and ensuring mobile-friendliness for an improved user experience. And, utilized industry-leading tools such as GoogleAnalytics, Google Search Console, and Yoast SEO to monitor performance and refine strategies based on data-driven insights.",
            achievements: [
                "Led SEO and WordPress optimization to improve site structure, speed, and mobile responsiveness.",
                "Integrated schema markup and optimized content for higher search rankings.",
                "Enhanced user engagement through strategic keyword optimization, structured content, and continuous performance improvements.",
            ],
            technologies: ["SEO", "WordPress", "SEMrush", "PageSpeed Insights", "Google Search Console", "Google Analytics", "Yoast SEO", "MySQL"],
        },
        {
            title: "Full Stack Developer",
            company: "Freelance",
            location: "Remote",
            period: "Aug 2023 - Present",
            description:
                "Delivered full-stack web solutions with scalable backend systems and user-friendly dashboards. Focused on secure payment integrations and responsive design for client platforms.",
            achievements: [],
            technologies: ["Laravel", "Vue.js", "PHP", "JavaScript", "Bootstrap", "Git", "Stripe", "MySQL"],
        },
        {
            title: "Back End Developer - Internship",
            company: "Golden Soft",
            location: "Tartus, Syria",
            period: "Aug 2023 - Sep 2023",
            description:
                "Developed Laravel-based applications with REST APIs for service management and e-commerce solutions. Streamlined client and request management through intuitive admin dashboards.",
            achievements: [
                "Developed an application enabling clients to request home maintenance services and set their location to find the nearest service. The application supports multi-authentication for clients and maintenance personnel and includes an admin dashboard for managing requests and users.",
                "Created a dashboard for registering and managing client files, including details of their purchase history. The system streamlines client management and enhances customer service capabilities.",
            ],
            technologies: ["Laravel", "REST APIs", "MVC", "PHP", "JavaScript", "Bootstrap", "Firebase", "Git", "MySQL"],
        },
    ]

    return (
        <section ref={sectionRef} id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto max-w-4xl">
                <div
                    className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-block mb-4">
            <span
                className="font-mono text-primary text-xs sm:text-sm glass-effect px-3 sm:px-4 py-2 rounded-full neon-border">
              // Work History
            </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Work Experience
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
                        My career journey in software engineering
                    </p>
                </div>

                <div className="space-y-6 sm:space-y-8">
                    {experiences.map((exp, index) => (
                        <Card
                            key={index}
                            className={`glass-effect neon-border transition-all duration-700 ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                            style={{transitionDelay: `${index * 0.2}s`}}
                        >
                            <CardHeader className="p-4 sm:p-6">
                                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                                    <div>
                                        <CardTitle className="text-lg sm:text-xl">{exp.title}</CardTitle>
                                        <CardDescription className="text-base sm:text-lg font-medium text-primary">
                                            {exp.company}
                                        </CardDescription>
                                    </div>
                                    <div
                                        className="flex flex-col sm:flex-row sm:items-center lg:items-end gap-2 sm:gap-4 lg:gap-2 lg:flex-col">
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <CalendarDays className="mr-2 h-4 w-4"/>
                                            {exp.period}
                                        </div>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <MapPin className="mr-2 h-4 w-4"/>
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent className="p-4 sm:p-6 pt-0">
                                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{exp.description}</p>

                                {exp.achievements?.length > 0 && (
                                    <div className="mb-4 sm:mb-6">
                                        <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Achievements:</h4>
                                        <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
                                            {exp.achievements.map((achievement, achIndex) => (
                                                <li key={achIndex}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </div>
                                )}

                                <div>
                                    <h4 className="font-semibold mb-2 text-sm sm:text-base">Technologies:</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {exp.technologies.map((tech, techIndex) => (
                                            <Badge
                                                key={techIndex}
                                                variant="secondary"
                                                className="glass-effect neon-border text-xs sm:text-sm"
                                            >
                                                {tech}
                                            </Badge>
                                        ))}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
