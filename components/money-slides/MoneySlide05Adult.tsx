'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Briefcase, GraduationCap, Home, Shield, CreditCard, ChevronRight } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide05Adult({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [visibleExamples, setVisibleExamples] = useState(0)

  const examples = [
    { icon: Briefcase, title: 'ブラック企業', description: '残業代込みで月給25万円', result: '実質時給1250円' },
    { icon: GraduationCap, title: '奨学金', description: '給付型を知らない', result: '400万円の借金' },
    { icon: Home, title: '住宅ローン', description: '金利1%と2%の差', result: '700万円の差' },
    { icon: Shield, title: '保険', description: '不要な保険に月3万円', result: '30年で1080万円' },
    { icon: CreditCard, title: 'リボ払い', description: '月3000円でOK', result: '10万→12万以上' },
  ]

  useEffect(() => {
    if (currentStep === 1 && visibleExamples < examples.length) {
      const timer = setTimeout(() => {
        setVisibleExamples(prev => prev + 1)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [currentStep, visibleExamples, examples.length])

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">大人になると、もっとヤバい</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">本当に怖いのはここから</h2>
                  <div className="bg-red-50 border-2 border-red-400 rounded-xl p-8">
                    <p className="text-xl text-gray-700 mb-4">中学生のうちは、まだ小さな話</p>
                    <p className="text-2xl font-bold text-red-600">大人になると、桁が違う</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-4xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">知らないと損する大人の罠</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {examples.map((example, index) => {
                      const Icon = example.icon
                      return (
                        <div key={index} className={`bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 rounded-xl p-4 transition-opacity duration-300 ${index < visibleExamples ? 'opacity-100' : 'opacity-0'}`}>
                          <div className="flex items-start space-x-3">
                            <Icon className="w-7 h-7 text-red-600 flex-shrink-0 mt-1" />
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-1">{example.title}</h3>
                              <p className="text-sm text-gray-700 mb-2">{example.description}</p>
                              <p className="text-base font-bold text-red-600">→ {example.result}</p>
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <div className="bg-gradient-to-r from-red-600 to-orange-600 rounded-xl p-12">
                    <p className="text-3xl font-bold text-white mb-4">知らないだけで、</p>
                    <p className="text-5xl md:text-6xl font-black text-yellow-300 mb-4">人生で</p>
                    <p className="text-5xl md:text-6xl font-black text-white mb-4">数千万円</p>
                    <p className="text-4xl md:text-5xl font-black text-white">損する</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-8 py-4 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep === 0 && (
              <button onClick={nextStep} className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>具体例を見る</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 1 && visibleExamples === examples.length && (
              <button onClick={nextStep} className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>衝撃の事実</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 2 && onNext && (
              <button onClick={onNext} className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
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
