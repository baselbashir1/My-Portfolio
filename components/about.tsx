"use client"

import {useEffect, useRef, useState} from "react"
import {Card, CardContent} from "@/components/ui/card"
import {Code, Server, Database, Cloud, Zap, Shield} from "lucide-react"

export function About() {
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

    const highlights = [
        {
            icon: Code,
            title: "Clean Architecture",
            description: "SOLID principles, DDD, and hexagonal architecture",
            color: "text-primary",
            glowColor: "shadow-primary/20",
        },
        {
            icon: Server,
            title: "Microservices",
            description: "Event-driven, resilient distributed systems",
            color: "text-secondary",
            glowColor: "shadow-secondary/20",
        },
        {
            icon: Database,
            title: "Data Excellence",
            description: "JPA, Hibernate, and database optimization",
            color: "text-blue-400",
            glowColor: "shadow-blue-400/20",
        },
        {
            icon: Cloud,
            title: "Cloud Native",
            description: "Docker, Kubernetes, and 12-factor apps",
            color: "text-purple-400",
            glowColor: "shadow-purple-400/20",
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Caching, async processing, and optimization",
            color: "text-yellow-400",
            glowColor: "shadow-yellow-400/20",
        },
        {
            icon: Shield,
            title: "Security",
            description: "OAuth2, JWT, and Spring Security expertise",
            color: "text-red-400",
            glowColor: "shadow-red-400/20",
        },
    ]

    const stats = [
        {number: "3+", label: "Years Experience"},
        {number: "10+", label: "Projects Delivered"},
        {number: "99.9%", label: "Uptime Achieved"},
        {number: "100+", label: "API Calls Handled"},
    ]

    return (
        <section
            ref={sectionRef}
            id="about"
            className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
        >
            {/* Enhanced background pattern */}
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
                <div className="absolute top-0 left-0 w-full h-full opacity-10">
                    <div className="matrix-bg w-full h-full"></div>
                </div>
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
              // About Me
            </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent relative">
                        Passionate Backend Architect
                        <div
                            className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-50 animate-pulse"></div>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        Building the invisible infrastructure that powers modern applications
                    </p>
                </div>

                {/* Enhanced stats section */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-20">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`text-center p-4 sm:p-6 rounded-xl glass-effect-strong neon-border transition-all transform hover:scale-105 hover:shadow-2xl pulse-glow ${
                                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                            style={{transitionDelay: `${index * 0.1}s`}}
                        >
                            <div
                                className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-2 relative bounce-in"
                                style={{animationDelay: `${0.5 + index * 0.1}s`}}
                            >
                                {stat.number}
                                <div className="absolute -inset-1 bg-primary/20 blur-lg opacity-50 animate-pulse"></div>
                            </div>
                            <div className="text-muted-foreground font-medium text-sm sm:text-base">{stat.label}</div>
                        </div>
                    ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-20">
                    {/* Left side - Enhanced story */}
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                        }`}
                    >
                        <h3
                            className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-foreground slide-in-left"
                            style={{animationDelay: "0.3s"}}
                        >
                            From Code to{" "}
                            <span className="text-primary relative">
                Architecture
                <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary animate-pulse"></div>
              </span>
                        </h3>

                        <div className="space-y-4 sm:space-y-6 text-muted-foreground leading-relaxed">
                            <p className="text-base sm:text-lg fade-in-up" style={{animationDelay: "0.5s"}}>
                                My journey began with a simple{" "}
                                <code
                                    className="glass-effect-strong text-primary px-2 sm:px-3 py-1 rounded font-mono text-xs sm:text-sm neon-border break-all shimmer">
                                    System.out.println("Hello World");
                                </code>{" "}
                                and evolved into architecting systems that serve millions of users.
                            </p>

                            <p className="text-sm sm:text-base fade-in-up" style={{animationDelay: "0.7s"}}>
                                With over <strong className="text-primary">5 years</strong> of hands-on experience in
                                enterprise
                                software development, I specialize in crafting robust backend systems using the{" "}
                                <strong className="text-primary">Spring Boot ecosystem</strong>.
                            </p>

                            <p className="text-sm sm:text-base fade-in-up" style={{animationDelay: "0.9s"}}>
                                I'm passionate about writing <strong className="text-secondary">clean, maintainable
                                code</strong> and
                                implementing industry best practices. Whether it's optimizing database queries,
                                designing resilient
                                APIs, or implementing complex business logic, I thrive on solving challenging technical
                                problems.
                            </p>

                            <div
                                className="glass-effect-strong p-4 sm:p-6 rounded-lg neon-border relative scale-in"
                                style={{animationDelay: "1.1s"}}
                            >
                                <div
                                    className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg opacity-50"></div>
                                <p className="italic relative z-10 text-sm sm:text-base">
                                    "Great software is not just about making it work – it's about making it work
                                    beautifully, efficiently,
                                    and maintainably for years to come."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Enhanced skills grid */}
                    <div
                        className={`transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {highlights.map((highlight, index) => (
                                <Card
                                    key={index}
                                    className={`group hover:shadow-xl transition-all transform hover:scale-105 hover:-rotate-1 cursor-pointer border-0 glass-effect-strong neon-border ${highlight.glowColor} bounce-in`}
                                    style={{animationDelay: `${0.5 + index * 0.1}s`}}
                                >
                                    <CardContent className="p-4 sm:p-6 text-center relative">
                                        <div
                                            className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-secondary/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                        <div
                                            className={`w-10 h-10 sm:w-12 sm:h-12 mx-auto mb-3 sm:mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform relative z-10 shadow-lg ${highlight.glowColor} pulse-glow`}
                                        >
                                            <highlight.icon className={`h-5 w-5 sm:h-6 sm:w-6 ${highlight.color}`}/>
                                        </div>
                                        <h4 className="font-bold mb-2 text-foreground group-hover:text-primary transition-colors relative z-10 text-sm sm:text-base">
                                            {highlight.title}
                                        </h4>
                                        <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed relative z-10">
                                            {highlight.description}
                                        </p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Enhanced philosophy section */}
                <div
                    className={`text-center transition-all ${
                        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                >
                    <div className="max-w-4xl mx-auto">
                        <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-foreground">My Development
                            Philosophy</h3>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                {
                                    title: "Test-Driven",
                                    description: "Every feature starts with a failing test. Quality is not negotiable.",
                                    icon: "🧪",
                                    color: "from-green-400/20 to-green-600/20",
                                },
                                {
                                    title: "Performance First",
                                    description: "Optimize for scalability from day one. Think in terms of millions, not thousands.",
                                    icon: "⚡",
                                    color: "from-yellow-400/20 to-yellow-600/20",
                                },
                                {
                                    title: "Security Minded",
                                    description: "Security is not an afterthought. It's baked into every line of code.",
                                    icon: "🔒",
                                    color: "from-red-400/20 to-red-600/20",
                                },
                            ].map((philosophy, index) => (
                                <div
                                    key={index}
                                    className={`p-4 sm:p-6 rounded-xl glass-effect-strong neon-border hover:shadow-2xl transition-all relative group scale-in`}
                                    style={{animationDelay: `${0.7 + index * 0.2}s`}}
                                >
                                    <div
                                        className={`absolute -inset-1 bg-gradient-to-br ${philosophy.color} blur-lg opacity-0 group-hover:opacity-100 transition-opacity`}
                                    ></div>
                                    <div className="relative z-10">
                                        <div
                                            className="text-3xl sm:text-4xl mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-1000 float-gentle">
                                            {philosophy.icon}
                                        </div>
                                        <h4 className="text-base sm:text-lg font-bold mb-2 sm:mb-3 text-primary">{philosophy.title}</h4>
                                        <p className="text-muted-foreground text-sm sm:text-base">{philosophy.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}