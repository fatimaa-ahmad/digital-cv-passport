'use client'

import { useEffect, useRef } from 'react'

export default function VisionMission() {
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
      id="vision-mission"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 sm:mb-10 md:mb-12 text-center">
          Business Vision & Mission
        </h2>
        <div className="space-y-6 sm:space-y-8">
          <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
              Vision
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-text leading-relaxed">
              To be the top digital platform in Kuwait that uses verified digital identity to ensure transparent and effective employment opportunities for all job-seeking individuals.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 sm:p-8 md:p-10 shadow-sm">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3 sm:mb-4">
              Mission
            </h3>
            <p className="text-base sm:text-lg md:text-xl text-text leading-relaxed">
              To achieve its vision, the platform will utilize AI algorithms and secure cloud storage to make the hiring process transparent and efficient, collaborating with universities, private companies, and government centers.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

