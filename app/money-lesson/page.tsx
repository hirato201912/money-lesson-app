'use client'

import { useState } from 'react'
import MoneySlide01Intro from '../../components/money-slides/MoneySlide01Intro'
import MoneySlide02Complex from '../../components/money-slides/MoneySlide02Complex'
import MoneySlide03Trap from '../../components/money-slides/MoneySlide03Trap'
import MoneySlide05Adult from '../../components/money-slides/MoneySlide05Adult'
import MoneySlide06Solution from '../../components/money-slides/MoneySlide06Solution'
import MoneySlide07HighSchool from '../../components/money-slides/MoneySlide07HighSchool'
import MoneySlide08Reality from '../../components/money-slides/MoneySlide08Reality'
import MoneySlide09Support from '../../components/money-slides/MoneySlide09Support'
import MoneySlide09_5StartDash from '../../components/money-slides/MoneySlide09_5StartDash'
import MoneySlide10Summary from '../../components/money-slides/MoneySlide10Summary'

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
    <MoneySlide02Complex key="slide2" onNext={nextSlide} onPrev={prevSlide} />,
    <MoneySlide03Trap key="slide3" onNext={nextSlide} onPrev={prevSlide} />,
    <MoneySlide05Adult key="slide4" onNext={nextSlide} onPrev={prevSlide} />,
    <MoneySlide06Solution key="slide5" onNext={nextSlide} onPrev={prevSlide} />,
    <MoneySlide07HighSchool key="slide6" onNext={nextSlide} onPrev={prevSlide} />,
    <MoneySlide08Reality key="slide7" onNext={nextSlide} onPrev={prevSlide} />,
    <MoneySlide09_5StartDash key="slide8" onNext={nextSlide} onPrev={prevSlide} />,
    <MoneySlide09Support key="slide9" onNext={nextSlide} onPrev={prevSlide} />,
    <MoneySlide10Summary key="slide10" onNext={nextSlide} onPrev={prevSlide} />,
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