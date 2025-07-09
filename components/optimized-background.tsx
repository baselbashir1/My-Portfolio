"use client"

import { memo } from "react"

const OptimizedBackground = memo(() => {
  // Reduced number of elements for better performance
  const springLogos = Array.from({ length: 3 }, (_, i) => (
    <div
      key={`spring-${i}`}
      className="absolute w-8 h-8 opacity-10 simple-float"
      style={{
        left: `${20 + i * 30}%`,
        top: `${20 + i * 25}%`,
        animationDelay: `${i * 2}s`,
      }}
    >
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path
          d="M16 4C9.4 4 4 9.4 4 16s5.4 12 12 12 12-5.4 12-12S22.6 4 16 4z"
          fill="none"
          stroke="#6db33f"
          strokeWidth="2"
        />
        <circle cx="16" cy="16" r="3" fill="#6db33f" />
      </svg>
    </div>
  ))

  const javaLogos = Array.from({ length: 2 }, (_, i) => (
    <div
      key={`java-${i}`}
      className="absolute w-6 h-6 opacity-10 simple-float"
      style={{
        right: `${20 + i * 25}%`,
        top: `${30 + i * 30}%`,
        animationDelay: `${i * 3}s`,
      }}
    >
      <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
        <path
          d="M11.5 22c0 0-1.5 1 1 1.5 3 0.5 4.5 0.5 7.5-0.5 0 0 1 0.5 2.5 1-8.5 3.5-19.5-0.5-11-2z"
          fill="#f68b1f"
        />
        <path d="M10.5 19c0 0-1.5 1 1 1.5 3.5 0.5 6 0.5 10.5-1 0 0 0.5 0.5 1.5 1-9 4-22.5 0-13-1.5z" fill="#f68b1f" />
      </svg>
    </div>
  ))

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Simplified gradient overlays */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>

      {/* Reduced logo animations */}
      {springLogos}
      {javaLogos}

      {/* Simple grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(109, 179, 63, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(109, 179, 63, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  )
})

OptimizedBackground.displayName = "OptimizedBackground"

export { OptimizedBackground }
