'use client'

import { useState } from 'react'

export default function ChatbotButton() {
  const [isOpen, setIsOpen] = useState(false)

  const handleToggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Floating Chatbot Button */}
      <button
        onClick={handleToggle}
        className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 bg-primary text-white rounded-full p-3 sm:p-4 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 active:scale-95 flex items-center justify-center group touch-manipulation"
        aria-label="Open AI Chatbot"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
          )}
        </svg>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] sm:text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center animate-pulse">
          AI
        </span>
      </button>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 left-4 sm:bottom-24 sm:right-6 sm:left-auto z-50 w-auto sm:w-80 h-[70vh] sm:h-96 max-h-[500px] bg-white rounded-lg shadow-2xl border border-gray-200 flex flex-col">
          {/* Chatbot Header */}
          <div className="bg-primary text-white p-3 sm:p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <svg
                className="w-4 h-4 sm:w-5 sm:h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <h3 className="font-semibold text-sm sm:text-base">AI Assistant</h3>
            </div>
            <button
              onClick={handleToggle}
              className="hover:bg-white/20 rounded p-1 transition-colors touch-manipulation min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Close chatbot"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chatbot Content */}
          <div className="flex-1 p-3 sm:p-4 overflow-y-auto bg-gray-50">
            <div className="space-y-4">
              <div className="bg-blue-100 rounded-lg p-3 text-xs sm:text-sm text-text">
                <p className="font-semibold mb-1">AI Assistant</p>
                <p>Hello! I'm your AI assistant. I'm here to help you navigate this page and answer any questions you may have about Wasel.</p>
              </div>
            </div>
          </div>

          {/* Chatbot Input */}
          <div className="p-3 sm:p-4 border-t border-gray-200">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-sm sm:text-base"
                disabled
              />
              <button
                className="bg-primary text-white px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg hover:bg-blue-700 active:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed touch-manipulation min-w-[44px]"
                disabled
              >
                <svg
                  className="w-4 h-4 sm:w-5 sm:h-5"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

