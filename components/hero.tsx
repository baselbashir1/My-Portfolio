"use client"

import {useState, useEffect} from "react"
import {Button} from "@/components/ui/button"
import {Github, Linkedin, Mail, Download, Terminal} from "lucide-react"
import Link from "next/link"

export function Hero() {
    const [currentText, setCurrentText] = useState("")
    const [currentIndex, setCurrentIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    const texts = ["Spring Boot Developer", "Java Developer", "Backend Engineer"]

    useEffect(() => {
        const timeout = setTimeout(
            () => {
                const current = texts[currentIndex]

                if (isDeleting) {
                    setCurrentText(current.substring(0, currentText.length - 1))
                    if (currentText === "") {
                        setIsDeleting(false)
                        setCurrentIndex((prev) => (prev + 1) % texts.length)
                    }
                } else {
                    setCurrentText(current.substring(0, currentText.length + 1))
                    if (currentText === current) {
                        setTimeout(() => setIsDeleting(true), 2000)
                    }
                }
            },
            isDeleting ? 50 : 100,
        )

        return () => clearTimeout(timeout)
    }, [currentText, currentIndex, isDeleting, texts])

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
            {/* Enhanced background effects */}
            <div className="absolute inset-0">
                {/* Animated particles */}
                {Array.from({length: 30}).map((_, index) => (
                    <div
                        key={index}
                        className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 5}s`,
                            animationDuration: `${2 + Math.random() * 3}s`,
                        }}
                    />
                ))}

                {/* Glowing orbs */}
                <div
                    className="absolute top-20 left-10 w-3 h-3 sm:w-4 sm:h-4 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50 pulse-glow"></div>
                <div
                    className="absolute top-40 right-20 w-2 h-2 bg-secondary rounded-full animate-pulse shadow-lg shadow-secondary/50 pulse-glow"
                    style={{animationDelay: "1s"}}
                ></div>
                <div
                    className="absolute bottom-40 left-20 w-2 h-2 sm:w-3 sm:h-3 bg-primary rounded-full animate-pulse shadow-lg shadow-primary/50 pulse-glow"
                    style={{animationDelay: "2s"}}
                ></div>
                <div
                    className="absolute bottom-20 right-10 w-3 h-3 sm:w-4 sm:h-4 bg-secondary rounded-full animate-pulse shadow-lg shadow-secondary/50 pulse-glow"
                    style={{animationDelay: "3s"}}
                ></div>
            </div>

            <div className="container mx-auto max-w-6xl text-center relative z-10 w-full">
                <div className="fade-in-up" style={{animationDelay: "0.1s"}}>
                    {/* Enhanced terminal greeting */}
                    <div
                        className="terminal-bg rounded-xl p-4 sm:p-8 mb-6 sm:mb-8 max-w-full sm:max-w-3xl mx-auto text-left font-mono text-xs sm:text-sm neon-border scale-in overflow-x-auto"
                        style={{animationDelay: "0.3s"}}
                    >
                        <div className="flex items-center mb-4 sm:mb-6 min-w-max">
                            <div className="flex space-x-2">
                                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full animate-pulse"></div>
                                <div
                                    className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full animate-pulse"
                                    style={{animationDelay: "0.5s"}}
                                ></div>
                                <div
                                    className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"
                                    style={{animationDelay: "1s"}}
                                ></div>
                            </div>
                            <span className="ml-2 sm:ml-4 text-muted-foreground flex items-center text-xs sm:text-sm">
                <Terminal className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2"/>
                SpringBootApplication.java
              </span>
                        </div>
                        <div className="text-green-400 text-xs sm:text-sm min-w-max space-y-1">
                            <div className="shimmer">
                                <span className="text-purple-400">@</span>
                                <span className="text-primary">SpringBootApplication</span>
                            </div>
                            <div>
                                <span className="text-purple-400">public class</span>{" "}
                                <span className="text-yellow-400">Application</span> <span
                                className="text-white">{"{"}</span>
                            </div>
                            <div className="ml-2 sm:ml-4">
                                <span className="text-purple-400">public static void</span>{" "}
                                <span className="text-yellow-400">main</span>
                                <span className="text-white">(</span>
                                <span className="text-blue-400">String</span>
                                <span className="text-white">[] args) {"{"}</span>
                            </div>
                            <div className="ml-4 sm:ml-8">
                                <span className="text-primary">SpringApplication</span>
                                <span className="text-white">.run(</span>
                                <span className="text-yellow-400">Application</span>
                                <span className="text-white">.class, args);</span>
                            </div>
                            <div className="ml-2 sm:ml-4">
                                <span className="text-white">{"}"}</span>
                            </div>
                            <div>
                                <span className="text-white">{"}"}</span>
                            </div>
                        </div>
                    </div>

                    {/* Enhanced heading with animations */}
                    <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-slide-in-right">
                        Hi, I'm{" "}
                        <span
                            className="bg-gradient-to-r from-primary via-primary-400 to-secondary bg-clip-text text-transparent relative">
              Basel
              <div
                  className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 blur-xl opacity-50 animate-pulse"></div>
            </span>
                    </h1>

                    {/* Enhanced typing animation */}
                    <div
                        className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-semibold mb-6 sm:mb-8 min-h-[4rem] sm:min-h-[5rem] flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bounce-in"
                        style={{animationDelay: "0.7s"}}
                    >
                        <span className="text-muted-foreground">I'm a</span>
                        <span
                            className="text-primary typing-cursor w-full sm:w-auto max-w-[280px] sm:max-w-[350px] md:max-w-[400px] text-center sm:text-left relative">
              {currentText}
                            <div className="absolute -inset-1 bg-primary/10 blur-lg opacity-50"></div>
            </span>
                    </div>

                    {/* Enhanced description */}
                    <p
                        className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-full sm:max-w-3xl mx-auto mb-8 sm:mb-12 leading-relaxed px-2 sm:px-0 fade-in-up"
                        style={{animationDelay: "0.9s"}}
                    >
                        Crafting robust, scalable microservices with{" "}
                        <span className="text-primary font-semibold relative">
              Spring Boot
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-primary/50 animate-pulse"></div>
            </span>{" "}
                        and{" "}
                        <span className="text-secondary font-semibold relative">
              Java
              <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-secondary/50 animate-pulse"></div>
            </span>
                        . Transforming complex business requirements into elegant, maintainable code.
                    </p>

                    {/* Enhanced action buttons */}
                    <div
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12 px-4 sm:px-0 scale-in"
                        style={{animationDelay: "1.1s"}}>

                        {/* Contact Button - Email Version */}
                        <a href="mailto:eng.baselbashir@gmail.com" className="w-full sm:w-auto no-underline">
                            <Button
                                size="lg"
                                className="group relative overflow-hidden spring-gradient hover:shadow-2xl hover:shadow-primary/25 transition-all transform hover:scale-105 neon-border w-full sm:w-auto pulse-glow"
                            >
                                <div
                                    className="absolute inset-0 bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                                <Mail className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10 group-hover:animate-bounce"/>
                                <span className="relative z-10">Let's Connect</span>
                            </Button>
                        </a>

                        {/* Download CV Button */}
                        <Button
                            variant="outline"
                            size="lg"
                            className="group border-primary text-primary hover:bg-primary hover:text-black transition-all duration-300 transform hover:scale-105 glow-effect bg-transparent neon-border w-full sm:w-auto"
                            onClick={() => {
                                const link = document.createElement('a');
                                link.href = 'https://drive.google.com/file/d/1EZstpG1SEe0nyKmN2iwv6P-o6ry-AHts/view?usp=drive_link';
                                link.download = 'mhd_basel_bashir_resume.pdf';
                                document.body.appendChild(link);
                                link.click();
                                document.body.removeChild(link);
                            }}
                        >
                            <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5 group-hover:animate-bounce"/>
                            Download Resume
                        </Button>
                    </div>

                    {/* Enhanced social links */}
                    <div className="flex justify-center space-x-6 sm:space-x-8 mb-4 rotate-in"
                         style={{animationDelay: "1.3s"}}>
                        {[
                            {
                                icon: Github,
                                href: "https://github.com/baselbashir1",
                                label: "GitHub",
                                color: "hover:text-white"
                            },
                            {
                                icon: Linkedin,
                                href: "https://www.linkedin.com/in/basel-bashir/",
                                label: "LinkedIn",
                                color: "hover:text-blue-400"
                            },
                        ].map((social, index) => (
                            <Link
                                key={social.label}
                                href={social.href}
                                className={`group relative p-3 sm:p-4 rounded-full glass-effect-strong neon-border transition-all duration-700 transform hover:scale-110 hover:rotate-12 ${social.color} float-gentle`}
                                style={{animationDelay: `${1.5 + index * 0.2}s`}}
                            >
                                <social.icon
                                    className="h-5 w-5 sm:h-6 sm:w-6 text-muted-foreground group-hover:scale-110 transition-all duration-300"/>
                                <div
                                    className="absolute inset-0 bg-primary/5 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
                                <span className="sr-only">{social.label}</span>

                                {/* Enhanced tooltip */}
                                <div
                                    className="absolute -top-12 left-1/2 transform -translate-x-1/2 glass-effect border border-primary/20 px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                    {social.label}
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>

            {/* Enhanced scroll indicator */}
            <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 float-gentle">
                <div
                    className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-primary rounded-full flex justify-center relative neon-border pulse-glow">
                    <div
                        className="w-1 h-2 sm:h-3 bg-primary rounded-full mt-1 sm:mt-2 animate-pulse shadow-lg shadow-primary/50"></div>
                    <div className="absolute -inset-2 bg-primary/10 rounded-full blur-lg animate-pulse"></div>
                </div>
            </div>
        </section>
    )
}