'use client'

import { useEffect, useRef } from 'react'

export default function ProposedSolution() {
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
      id="solution"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          Proposed Solution / Value Proposition
        </h2>
        <div className="bg-blue-50 rounded-xl p-8 md:p-10 shadow-sm">
          <p className="text-lg md:text-xl text-text leading-relaxed">
            Wasel introduces an AI-powered system that matches users with suitable job opportunities and suggests personalized training programs to fill skill gaps. It acts as a verified digital identity combining skills, education, and certifications in one secure platform. By working with universities, private companies, and government entities, it ensures transparent and trustworthy hiring. Unlike generic job sites, this platform focuses on verified data, skill-based matching, and continuous training — aligned with Kuwait Vision 2035.
          </p>
        </div>
      </div>
    </section>
  )
}

