'use client'

import { useState } from 'react'
import MoneySlide01Intro from '../../components/money-slides/MoneySlide01Intro'
import MoneySlide02Quiz from '../../components/money-slides/MoneySlide02Quiz'

export default function MoneyLessonPage() {
  const [currentSlide, setCurrentSlide] = useState(1)

  const nextSlide = () => {
    setCurrentSlide(prev => prev + 1)
  }

  const prevSlide = () => {
    setCurrentSlide(prev => Math.max(1, prev - 1))
  }

  const slides = [
    <MoneySlide01Intro key="slide1" onNext={nextSlide} />,
    <MoneySlide02Quiz key="slide2" onNext={nextSlide} onPrev={prevSlide} />,
  ]

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {slides[currentSlide - 1]}
      
      <div className="fixed bottom-4 left-4 z-50 bg-black/70 text-white px-4 py-2 rounded-lg">
        <span className="text-sm">
          スライド {currentSlide} / {slides.length}
        </span>
        <div className="flex gap-2 mt-2">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm disabled:opacity-50"
          >
            前
          </button>
          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length}
            className="px-3 py-1 bg-gray-600 hover:bg-gray-500 rounded text-sm disabled:opacity-50"
          >
            次
          </button>
        </div>
      </div>
    </div>
  )
}