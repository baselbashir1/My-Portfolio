"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"

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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const experiences = [
    {
      title: "Senior Java Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description:
        "Lead backend development for microservices architecture serving 1M+ users. Designed and implemented scalable APIs using Spring Boot and managed cloud infrastructure on AWS.",
      achievements: [
        "Reduced API response time by 40% through optimization",
        "Led migration from monolith to microservices architecture",
        "Mentored 3 junior developers and established coding standards",
      ],
      technologies: ["Spring Boot", "AWS", "Kubernetes", "PostgreSQL", "Redis"],
    },
    {
      title: "Java Developer",
      company: "Digital Innovations Inc",
      location: "Austin, TX",
      period: "2020 - 2022",
      description:
        "Developed and maintained enterprise applications using Java Spring framework. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Built RESTful APIs handling 10K+ requests per minute",
        "Implemented automated testing increasing code coverage to 85%",
        "Optimized database queries reducing load time by 30%",
      ],
      technologies: ["Spring Boot", "MySQL", "Docker", "Jenkins", "JUnit"],
    },
    {
      title: "Junior Java Developer",
      company: "StartupTech",
      location: "Remote",
      period: "2019 - 2020",
      description:
        "Started career developing web applications using Java and Spring framework. Gained experience in full software development lifecycle and agile methodologies.",
      achievements: [
        "Contributed to 5+ successful product releases",
        "Implemented security features using Spring Security",
        "Participated in code reviews and technical discussions",
      ],
      technologies: ["Java", "Spring MVC", "Hibernate", "Maven", "Git"],
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
            <span className="font-mono text-primary text-xs sm:text-sm glass-effect px-3 sm:px-4 py-2 rounded-full neon-border">
              // Work History
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Work Experience
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto px-2 sm:px-0">
            My professional journey in backend development and microservices architecture
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`glass-effect neon-border transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="p-4 sm:p-6">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-lg sm:text-xl">{exp.title}</CardTitle>
                    <CardDescription className="text-base sm:text-lg font-medium text-primary">
                      {exp.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center lg:items-end gap-2 sm:gap-4 lg:gap-2 lg:flex-col">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <CalendarDays className="mr-2 h-4 w-4" />
                      {exp.period}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="mr-2 h-4 w-4" />
                      {exp.location}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 sm:p-6 pt-0">
                <p className="text-muted-foreground mb-4 text-sm sm:text-base">{exp.description}</p>

                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold mb-2 text-sm sm:text-base">Key Achievements:</h4>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm sm:text-base">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex}>{achievement}</li>
                    ))}
                  </ul>
                </div>

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
