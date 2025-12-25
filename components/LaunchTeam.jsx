'use client'

import { useEffect, useRef } from 'react'

export default function LaunchTeam() {
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

  const teamMembers = [
    {
      name: 'Student 1',
      description: 'Inspired by the need to address unemployment among Kuwaiti youth. Responsible for interface design and user experience. (Strength: creativity; Weakness: marketing).'
    },
    {
      name: 'Student 2',
      description: 'Focused on improving youth job opportunities. Handles partnerships with universities and organizations. (Strength: communication; Weakness: technical).'
    },
    {
      name: 'Student 3',
      description: 'Experienced in data analysis and marketing. Manages user engagement and social media. (Strength: marketing; Weakness: public speaking).'
    },
    {
      name: 'Student 4',
      description: 'Interested in AI and cybersecurity. Ensures platform safety and technical reliability. (Strength: technical; Weakness: marketing).'
    }
  ]

  return (
    <section
      id="team"
      ref={sectionRef}
      className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8 bg-white"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-8 sm:mb-10 md:mb-12 text-center">
          Launch Team
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-blue-50 rounded-xl p-5 sm:p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-primary mb-3 sm:mb-4">
                {member.name}
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-text leading-relaxed">
                {member.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

