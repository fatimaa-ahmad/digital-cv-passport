'use client'

export default function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-white pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-6 sm:mb-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 sm:px-6 py-2 sm:py-2.5 backdrop-blur-sm">
            <svg
              className="w-4 h-4 sm:w-5 sm:h-5 text-primary"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
            <span className="text-sm sm:text-base font-semibold text-primary">
              AI Assistant Available - Click the chatbot button to get help!
            </span>
          </div>
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-4 sm:mb-6 animate-fade-in">
          Wasel
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-text mb-8 sm:mb-10 max-w-3xl mx-auto px-2 sm:px-0 animate-fade-in-delay">
          Empowering Kuwait's youth through verified digital identities and AI-driven employment solutions.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center animate-fade-in-delay-2 px-4 sm:px-0">
          <button
            onClick={() => scrollToSection('introduction')}
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-primary text-white rounded-lg font-semibold hover:bg-blue-700 active:bg-blue-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 touch-manipulation text-sm sm:text-base min-h-[44px]"
          >
            Learn More
          </button>
          <button
            onClick={() => scrollToSection('team')}
            className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-primary border-2 border-primary rounded-lg font-semibold hover:bg-blue-50 active:bg-blue-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 active:translate-y-0 touch-manipulation text-sm sm:text-base min-h-[44px]"
          >
            Join Us
          </button>
        </div>
      </div>
    </section>
  )
}

