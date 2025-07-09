"use client"

import {useEffect, useRef, useState} from "react"
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"

export function Skills() {
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

    const skillCategories = [
        {
            title: "Core Java & Spring",
            icon: "☕",
            skills: ["Java", "Spring Boot", "Spring Security", "Spring Data JPA", "Spring Cloud", "Hibernate", "WebSocket"],
        },
        {
            title: "Microservices & Architecture",
            icon: "🏗️",
            skills: [
                "Microservices Design",
                "RESTful APIs",
                "GraphQL",
                "Event-Driven Architecture",
                "API Gateway",
                "Keycloak",
                "Zookeeper",
                "Zipkin"
            ],
        },
        {
            title: "Databases & Storage",
            icon: "🗄️",
            skills: ["Oracle Database", "SQL Server", "PostgreSQL", "MySQL", "MongoDB", "Redis", "Database Design"],
        },
        {
            title: "DevOps & Cloud",
            icon: "☁️",
            skills: ["Docker", "Kubernetes", "AWS", "Jenkins", "GitLab CI/CD", "Prometheus", "Grafana"],
        },
        {
            title: "Message Queues & Streaming",
            icon: "📡",
            skills: ["Apache Kafka", "RabbitMQ", "Redis Pub/Sub", "CQRS", "Zookeeper"],
        },
        {
            title: "Testing & Quality",
            icon: "🧪",
            skills: ["JUnit 5", "Mockito", "TestContainers", "Integration Testing", "SonarQube"],
        },
    ]

    return (
        <section ref={sectionRef} id="skills" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="container mx-auto max-w-7xl relative z-10">
                <div
                    className={`text-center mb-12 sm:mb-16 transition-all duration-700 ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="inline-block mb-4">
            <span
                className="font-mono text-primary text-xs sm:text-sm glass-effect px-3 sm:px-4 py-2 rounded-full neon-border">
              // Technical Skills
            </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                        Skills & Expertise
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        A comprehensive toolkit for building enterprise-grade backend systems
                    </p>
                </div>

                {/* Responsive skills grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <Card
                            key={categoryIndex}
                            className={`group hover:shadow-lg transition-all duration-500 transform hover:scale-105 border-0 glass-effect neon-border ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                            style={{transitionDelay: `${categoryIndex * 0.1}s`}}
                        >
                            <CardHeader className="pb-3 sm:pb-4">
                                <CardTitle className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl">
                                    <span className="text-xl sm:text-2xl">{category.icon}</span>
                                    <span
                                        className="text-foreground text-sm sm:text-base lg:text-lg">{category.title}</span>
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex flex-wrap gap-2">
                                    {category.skills.map((skill, skillIndex) => (
                                        <Badge
                                            key={skillIndex}
                                            variant="outline"
                                            className="glass-effect neon-border hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 text-xs sm:text-sm"
                                        >
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
