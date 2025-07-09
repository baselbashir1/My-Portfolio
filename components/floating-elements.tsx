"use client"

import { useEffect, useState } from "react"

export function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const codeSnippets = [
    "@SpringBootApplication",
    "@RestController",
    "@Autowired",
    "@Service",
    "@Repository",
    "@Entity",
    "@GetMapping",
    "@PostMapping",
    "public class",
    "private final",
    "return ResponseEntity",
    "@Transactional",
    "@Component",
    "@Configuration",
    "implements Serializable",
    "extends JpaRepository",
    "Optional<T>",
    "@RequestMapping",
    "@PathVariable",
    "@RequestBody",
  ]

  // Spring Boot Logo SVG
  const SpringBootLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M22.6 8.6c-1.2-2.2-3.6-3.6-6.2-3.6s-5 1.4-6.2 3.6c-1.8 3.2-1.8 7.2 0 10.4 1.2 2.2 3.6 3.6 6.2 3.6s5-1.4 6.2-3.6c1.8-3.2 1.8-7.2 0-10.4z"
        fill="#6db33f"
        opacity="0.8"
      />
      <path d="M16 12c-2.2 0-4 1.8-4 4s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4z" fill="#6db33f" opacity="0.6" />
    </svg>
  )

  // Java Logo SVG
  const JavaLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M11.5 22c0 0-1.5 1 1 1.5 3 0.5 4.5 0.5 7.5-0.5 0 0 1 0.5 2.5 1-8.5 3.5-19.5-0.5-11-2z"
        fill="#f68b1f"
        opacity="0.8"
      />
      <path
        d="M10.5 19c0 0-1.5 1 1 1.5 3.5 0.5 6 0.5 10.5-1 0 0 0.5 0.5 1.5 1-9 4-22.5 0-13-1.5z"
        fill="#f68b1f"
        opacity="0.6"
      />
      <path
        d="M18.5 14.5c1.5 2-0.5 3.5-0.5 3.5s4-2 2-4.5c-2-2.5-3.5-3.5 4.5-7.5 0 0-12.5 3-6 8.5z"
        fill="#f68b1f"
        opacity="0.7"
      />
    </svg>
  )

  // Spring Framework Logo SVG
  const SpringLogo = ({ className }: { className?: string }) => (
    <svg className={className} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4z"
        fill="none"
        stroke="#6db33f"
        strokeWidth="2"
        opacity="0.6"
      />
      <path d="M8 16c0-4.4 3.6-8 8-8s8 3.6 8 8" fill="none" stroke="#6db33f" strokeWidth="2" opacity="0.8" />
      <circle cx="16" cy="16" r="3" fill="#6db33f" opacity="0.7" />
    </svg>
  )

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Animated code snippets */}
      {codeSnippets.map((snippet, index) => (
        <div
          key={index}
          className="absolute text-primary/20 font-mono text-xs animate-pulse float-gentle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 6}s`,
            animationDuration: `${6 + Math.random() * 4}s`,
          }}
        >
          {snippet}
        </div>
      ))}

      {/* Animated Spring Boot logos */}
      {Array.from({ length: 8 }).map((_, index) => (
        <SpringBootLogo
          key={`spring-boot-${index}`}
          className={`floating-logo w-12 h-12 sm:w-16 sm:h-16`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Animated Java logos */}
      {Array.from({ length: 6 }).map((_, index) => (
        <JavaLogo
          key={`java-${index}`}
          className={`floating-logo w-10 h-10 sm:w-12 sm:h-12`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${10 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Animated Spring Framework logos */}
      {Array.from({ length: 5 }).map((_, index) => (
        <SpringLogo
          key={`spring-${index}`}
          className={`floating-logo w-10 h-10 sm:w-14 sm:h-14`}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${12 + Math.random() * 4}s`,
          }}
        />
      ))}

      {/* Matrix grid background */}
      <div className="absolute inset-0 matrix-bg opacity-30"></div>

      {/* Animated gradient overlays */}
      <div className="absolute top-0 left-0 w-72 h-72 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
      <div
        className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 sm:w-72 sm:h-72 bg-primary/3 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "4s" }}
      ></div>

      {/* Particle effects */}
      {Array.from({ length: 15 }).map((_, index) => (
        <div
          key={`particle-${index}`}
          className="absolute w-1 h-1 bg-primary rounded-full animate-ping"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  )
}
