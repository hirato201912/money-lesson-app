'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DollarSign, AlertTriangle, ChevronRight } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide01Intro({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      id: 1,
      text: "今日は、みんなの将来に関わる、とても大事な話をします",
      icon: DollarSign,
      color: "from-green-400 to-emerald-400"
    },
    {
      id: 2,
      text: "まず、質問。将来、",
      highlight: "いくら稼ぎたい？",
      icon: AlertTriangle,
      color: "from-blue-400 to-cyan-400"
    }
  ]

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-6xl bg-white/96 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 text-white p-6">
          <h1 className="text-4xl font-bold text-center">
            お金の授業
          </h1>
          <p className="text-center text-white/80 text-sm mt-2">
            中学3年生のための重要な話
          </p>
        </div>

        {/* メインコンテンツ */}
        <div className="p-8">
          <AnimatePresence>
            {currentStep === 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="text-center mb-8"
              >
                <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                  君の将来、
                </h2>
                <h2 className="text-4xl font-bold bg-gradient-to-r from-orange-500 to-red-600 bg-clip-text text-transparent">
                  本当に大丈夫？
                </h2>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ステップコンテンツ */}
          <div className="space-y-4 max-w-5xl mx-auto">
            {steps.map((step, index) => {
              const Icon = step.icon
              const isVisible = index < currentStep
              
              if (!isVisible) return null

              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -100 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white shadow-xl rounded-2xl p-6"
                >
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl bg-gradient-to-r ${step.color}`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-xl text-slate-700 font-semibold">
                      {step.text}
                      {step.highlight && (
                        <span className={`mx-1 px-3 py-1 bg-gradient-to-r ${step.color} text-white rounded-lg font-bold`}>
                          {step.highlight}
                        </span>
                      )}
                    </p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* コントロール */}
        <div className="bg-slate-50 border-t p-4">
          <div className="flex justify-center">
            {currentStep < steps.length && (
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2"
              >
                <span>続きを見る</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {currentStep === steps.length && onNext && (
              <button
                onClick={onNext}
                className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2"
              >
                <span>次のスライドへ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  )
}