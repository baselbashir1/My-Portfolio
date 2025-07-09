"use client"

import {useEffect, useRef, useState} from "react"
import {Card, CardContent} from "@/components/ui/card"
import {Code, Server, Database, Cloud, Zap, Shield} from "lucide-react"
import Image from "next/image"

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
            description: "SOLID principles, DDD",
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
            description: "Docker, Kubernetes",
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
                        Passionate Backend Developer
                        <div
                            className="absolute -inset-2 bg-gradient-to-r from-primary/10 to-secondary/10 blur-xl opacity-50 animate-pulse"></div>
                    </h2>
                    <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-2 sm:px-0">
                        Building the invisible infrastructure that powers modern applications
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center mb-12 sm:mb-20">
                    {/* Left side - Story content */}
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
                                With over <strong className="text-primary">3 years</strong> of hands-on experience in
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

                    {/* Right side - Professional Photo */}
                    <div
                        className={`flex justify-center lg:justify-end transition-all duration-1000 ${
                            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
                        }`}
                    >
                        <div className="relative group scale-in" style={{animationDelay: "0.5s"}}>
                            {/* Animated background rings */}
                            <div
                                className="absolute -inset-6 bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 rounded-full animate-spin-slow blur-xl opacity-50"></div>
                            <div
                                className="absolute -inset-4 bg-gradient-to-r from-secondary/30 to-primary/30 rounded-full animate-pulse blur-lg"></div>
                            <div
                                className="absolute -inset-2 bg-gradient-to-r from-primary/40 to-secondary/40 rounded-full animate-pulse blur-md opacity-60"></div>

                            {/* Main photo container */}
                            <div
                                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden neon-border glass-effect-strong group-hover:scale-105 transition-all duration-700">
                                {/* Replace this placeholder with your actual photo */}
                                <Image
                                    src="/images/my-pic.jpg"
                                    alt="Basel - Spring Boot Developer"
                                    width={450}
                                    height={450}
                                    className="w-full h-full object-cover object-center transition-all duration-700 group-hover:scale-110"
                                    priority
                                />

                                {/* Overlay gradient */}
                                <div
                                    className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                {/* Enhanced floating particles around photo */}
                                <div
                                    className="absolute -top-3 -right-3 w-4 h-4 bg-primary rounded-full animate-bounce shadow-lg shadow-primary/50"
                                    style={{animationDelay: "0.5s"}}
                                ></div>
                                <div
                                    className="absolute -bottom-3 -left-3 w-3 h-3 bg-secondary rounded-full animate-bounce shadow-lg shadow-secondary/50"
                                    style={{animationDelay: "1.5s"}}
                                ></div>
                                <div
                                    className="absolute top-1/4 -left-4 w-3 h-3 bg-primary rounded-full animate-ping shadow-lg shadow-primary/50"
                                    style={{animationDelay: "2s"}}
                                ></div>
                                <div
                                    className="absolute bottom-1/4 -right-4 w-3 h-3 bg-secondary rounded-full animate-ping shadow-lg shadow-secondary/50"
                                    style={{animationDelay: "2.5s"}}
                                ></div>
                                <div
                                    className="absolute top-3/4 -right-2 w-2 h-2 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50"
                                    style={{animationDelay: "3s"}}
                                ></div>
                                <div
                                    className="absolute top-1/2 -left-2 w-2 h-2 bg-secondary rounded-full animate-pulse shadow-lg shadow-secondary/50"
                                    style={{animationDelay: "3.5s"}}
                                ></div>
                            </div>

                            {/* Enhanced professional badges */}
                  {/*          <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex flex-col gap-2">*/}
                  {/*              <div*/}
                  {/*                  className="glass-effect border border-primary/30 px-4 py-2 rounded-full text-sm font-medium text-primary neon-border animate-pulse">*/}
                  {/*<span className="flex items-center gap-2">*/}
                  {/*  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>*/}
                  {/*  Backend Specialist*/}
                  {/*</span>*/}
                  {/*              </div>*/}
                  {/*              <div*/}
                  {/*                  className="glass-effect border border-secondary/30 px-3 py-1 rounded-full text-xs font-medium text-secondary neon-border">*/}
                  {/*<span className="flex items-center gap-2">*/}
                  {/*  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>*/}
                  {/*  3+ Years Experience*/}
                  {/*</span>*/}
                  {/*              </div>*/}
                  {/*          </div>*/}

                            {/* Code snippet floating element */}
                            {/*<div*/}
                            {/*    className="absolute -top-8 -left-8 glass-effect-strong border border-primary/20 px-3 py-2 rounded-lg text-xs font-mono text-primary neon-border opacity-80 group-hover:opacity-100 transition-opacity float-gentle"*/}
                            {/*    style={{animationDelay: "1s"}}*/}
                            {/*>*/}
                            {/*    @SpringBootApplication*/}
                            {/*</div>*/}

                            {/* Java icon floating element */}
                            {/*<div*/}
                            {/*    className="absolute -bottom-8 -right-8 glass-effect-strong border border-secondary/20 px-3 py-2 rounded-lg text-xs font-mono text-secondary neon-border opacity-80 group-hover:opacity-100 transition-opacity float-gentle"*/}
                            {/*    style={{animationDelay: "1.5s"}}*/}
                            {/*>*/}
                            {/*    {"{ Java }"}*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>

                {/* Add the highlights section below as a separate section */}
                {/*<div className="mb-12 sm:mb-20">*/}
                {/*    <div*/}
                {/*        className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ${*/}
                {/*            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"*/}
                {/*        }`}*/}
                {/*    >*/}
                {/*        <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-foreground">Technical Expertise</h3>*/}
                {/*        <p className="text-muted-foreground max-w-2xl mx-auto">*/}
                {/*            Core technologies and methodologies I use to build robust backend systems*/}
                {/*        </p>*/}
                {/*    </div>*/}

                {/*    <div*/}
                {/*        className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 transition-all duration-1000 ${*/}
                {/*            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"*/}
                {/*        }`}*/}
                {/*    >*/}
                {/*        {highlights.map((highlight, index) => (*/}
                {/*            <Card*/}
                {/*                key={index}*/}
                {/*                className={`group hover:shadow-xl transition-all transform hover:scale-105 hover:-rotate-1 cursor-pointer border-0 glass-effect-strong neon-border ${highlight.glowColor} bounce-in`}*/}
                {/*                style={{animationDelay: `${0.7 + index * 0.1}s`}}*/}
                {/*            >*/}
                {/*                <CardContent className="p-4 sm:p-6 text-center relative">*/}
                {/*                    <div*/}
                {/*                        className="absolute -inset-1 bg-gradient-to-br from-primary/5 to-secondary/5 blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>*/}
                {/*                    <div*/}
                {/*                        className={`w-12 h-12 sm:w-14 sm:h-14 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform relative z-10 shadow-lg ${highlight.glowColor} pulse-glow`}*/}
                {/*                    >*/}
                {/*                        <highlight.icon className={`h-6 w-6 sm:h-7 sm:w-7 ${highlight.color}`}/>*/}
                {/*                    </div>*/}
                {/*                    <h4 className="font-bold mb-2 text-foreground group-hover:text-primary transition-colors relative z-10 text-base sm:text-lg">*/}
                {/*                        {highlight.title}*/}
                {/*                    </h4>*/}
                {/*                    <p className="text-sm text-muted-foreground leading-relaxed relative z-10">{highlight.description}</p>*/}
                {/*                </CardContent>*/}
                {/*            </Card>*/}
                {/*        ))}*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </section>
    )
}