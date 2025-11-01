'use client'

import { useEffect, useRef } from 'react'

export default function Introduction() {
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
      id="introduction"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 text-center">
          Introduction
        </h2>
        <div className="bg-blue-50 rounded-xl p-8 md:p-10 shadow-sm">
          <p className="text-lg md:text-xl text-text leading-relaxed">
            The Digital CV Passport is an innovative online platform designed to reduce unemployment in Kuwait by making the hiring process transparent, fair, and faster. It serves as a verified digital identity that gathers education, certifications, and work experience all in one secure place. The platform automatically matches users with suitable job opportunities using AI, recommends personalized training programs to fill skill gaps, and connects them with employers — ensuring every candidate is job-ready.
          </p>
        </div>
      </div>
    </section>
  )
}

