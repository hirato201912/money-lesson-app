'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { School, ArrowRight, ChevronRight } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide08Reality({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-6">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-6 py-4 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl font-bold text-center">さて、高校の話をしよう</h1>
        </div>

        <div className="flex-1 bg-white px-6 py-4 overflow-hidden">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center max-w-3xl"
                >
                  <School className="w-20 h-20 mx-auto mb-6 text-indigo-600" />
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">高校に入ったら...</h2>
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 border-4 border-indigo-400 rounded-2xl p-8 mb-6">
                    <p className="text-2xl font-bold text-gray-900 mb-4">
                      今までとは違う世界が待ってる
                    </p>
                    <ArrowRight className="w-12 h-12 mx-auto text-indigo-600" />
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-5">
                    <p className="text-xl text-gray-700">
                      でも、心配しなくて大丈夫
                    </p>
                    <p className="text-lg text-gray-600 mt-2">
                      これから大事な話をするね
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-6 py-3 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {onNext && (
              <button
                onClick={onNext}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors"
              >
                <span>次のスライドへ</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
