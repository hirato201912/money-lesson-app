'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Clock, Battery, HelpCircle, Frown, ChevronRight } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide08Reality({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const problems = [
    { icon: Clock, title: '予習に追われる', description: '授業前に教科書を読む時間がない' },
    { icon: Battery, title: '部活後、家で集中できない', description: '疲れて帰宅、気づいたら寝てる' },
    { icon: HelpCircle, title: '質問できない', description: '先生に聞くタイミングがない、友達も忙しい' },
  ]

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-gray-700 to-gray-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">でも、一人で乗り越えるのは大変</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">今のうちに言っておくね</h2>
                  <div className="bg-gray-50 border-2 border-gray-400 rounded-xl p-8">
                    <p className="text-xl text-gray-700 mb-4">高校の勉強は、中学より</p>
                    <p className="text-3xl font-bold text-gray-900">めちゃくちゃ大変</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">高校生が抱える悩み</h2>
                  <div className="space-y-4">
                    {problems.map((problem, index) => {
                      const Icon = problem.icon
                      return (
                        <div key={index} className="bg-white shadow-lg rounded-xl p-5 border-l-4 border-gray-500">
                          <div className="flex items-start space-x-4">
                            <div className="bg-gray-200 rounded-xl p-3">
                              <Icon className="w-8 h-8 text-gray-700" />
                            </div>
                            <div>
                              <h3 className="text-lg font-bold text-gray-900 mb-1">{index + 1}. {problem.title}</h3>
                              <p className="text-gray-600">{problem.description}</p>
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
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">結果</h2>
                  <div className="space-y-3">
                    <div className="bg-gray-100 rounded-xl p-5"><p className="text-xl font-bold text-gray-800">時間がない</p></div>
                    <div className="bg-gray-200 rounded-xl p-5"><p className="text-xl font-bold text-gray-800">疲れてる</p></div>
                    <div className="bg-gray-300 rounded-xl p-5"><p className="text-xl font-bold text-gray-800">わからないことが溜まる</p></div>
                    <div className="bg-red-500 rounded-xl p-6"><p className="text-2xl font-bold text-white">気づいたら手遅れ</p></div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <Frown className="w-16 h-16 mx-auto mb-8 text-gray-600" />
                  <div className="bg-gradient-to-r from-gray-600 to-gray-800 rounded-xl p-12">
                    <p className="text-4xl font-black text-white mb-4">一人で頑張るのは、</p>
                    <p className="text-5xl font-black text-yellow-300">かなりキツイ</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-8 py-4 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep < 3 && (
              <button onClick={nextStep} className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>{currentStep === 0 ? '抱える悩み' : currentStep === 1 ? '結果' : '続きを見る'}</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 3 && onNext && (
              <button onClick={onNext} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
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
