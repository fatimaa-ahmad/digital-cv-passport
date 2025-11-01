'use client'

import { useEffect, useRef } from 'react'

export default function ProblemStatement() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [])

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          Problem Statement / Market Gap
        </h2>
        <div className="bg-white rounded-xl p-8 md:p-10 shadow-sm">
          <p className="text-lg md:text-xl text-text leading-relaxed">
            Kuwait faces a high youth unemployment rate due to its growing young population. The labor market struggles to absorb new graduates, and skill mismatches create further gaps. Employers face difficulty finding qualified candidates quickly and securely. The absence of a trusted platform that connects verified job-seekers with employers highlights a clear market need — one that The Digital CV Passport aims to fill.
          </p>
        </div>
      </div>
    </section>
  )
}

