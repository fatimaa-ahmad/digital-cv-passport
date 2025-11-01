'use client'

import { useEffect, useRef } from 'react'

export default function BusinessModelCanvas() {
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

  const canvasItems = [
    {
      title: 'Key Partners',
      items: [
        'Educational institutions',
        'Universities',
        'Private companies',
        'Ministry of Labor',
        'Public Authority of Manpower'
      ]
    },
    {
      title: 'Key Activities',
      items: [
        'Developing and maintaining the system',
        'AI-based job matching',
        'Data verification and integration'
      ]
    },
    {
      title: 'Value Propositions',
      items: [
        'Transparent recruitment',
        'Efficient hiring process',
        'Customized training'
      ]
    },
    {
      title: 'Customer Relationships',
      items: [
        'Personalized training',
        'Reduced recruitment time',
        'Skill-based hiring'
      ]
    },
    {
      title: 'Customer Segments',
      items: [
        'Graduates',
        'Job-seekers',
        'Employers',
        'Government agencies'
      ]
    },
    {
      title: 'Key Resources',
      items: [
        'AI algorithms',
        'Secure cloud storage',
        'Skilled technical team'
      ]
    },
    {
      title: 'Channels',
      items: [
        'Web platform',
        'Mobile app',
        'University portals'
      ]
    },
    {
      title: 'Cost Structure',
      items: [
        'Staff salaries & maintenance',
        'Marketing & partnerships',
        'System development'
      ]
    },
    {
      title: 'Revenue Streams',
      items: [
        'Employer subscriptions',
        'Premium job-seeker features'
      ]
    }
  ]

  return (
    <section
      id="canvas"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 text-center">
          Business Model Canvas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {canvasItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4">
                {item.title}
              </h3>
              <ul className="space-y-2">
                {item.items.map((listItem, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-base md:text-lg text-text leading-relaxed flex items-start"
                  >
                    <span className="text-primary mr-2">•</span>
                    <span>{listItem}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

