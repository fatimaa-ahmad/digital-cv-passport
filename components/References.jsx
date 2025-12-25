'use client'

import { useEffect, useRef } from 'react'

export default function References() {
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

  const references = [
    'Gouider, A. (2022). Impact of economic freedom on youth unemployment in the Gulf Cooperation Council countries. Montenegrin Journal of Economics, 18(3), 67–75.',
    'SUPPLY, T. I. O. L., & CORRIDORS, D. I. A. Abu Dhabi Dialogue.'
  ]

  return (
    <section
      id="references"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-6 sm:mb-8 text-center">
          References
        </h2>
        <div className="bg-blue-50 rounded-xl p-6 sm:p-8 md:p-10 shadow-sm">
          <ul className="space-y-3 sm:space-y-4">
            {references.map((ref, index) => (
              <li
                key={index}
                className="text-sm sm:text-base md:text-lg text-text leading-relaxed"
              >
                {ref}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

