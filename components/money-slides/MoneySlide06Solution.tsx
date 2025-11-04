'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Book, Calculator as Calc, Lightbulb, Shield, ChevronRight, X } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide06Solution({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const powers = [
    { icon: Book, title: '読む力', benefits: '契約書を読める、ウソを見抜ける' },
    { icon: Calc, title: '計算する力', benefits: '利息・税金を計算、損に気づける' },
    { icon: Lightbulb, title: '考える力', benefits: '疑問を持つ、調べる、比較する' },
  ]

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">じゃあ、どうすればいい？</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">カモにならない方法</h2>
                  <div className="bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl p-10">
                    <p className="text-2xl text-white mb-3">答え：</p>
                    <p className="text-5xl md:text-6xl font-black text-white mb-3">勉強</p>
                    <p className="text-lg text-white/90">（でも、ただの暗記じゃない）</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-4xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">必要な力</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {powers.map((power, index) => {
                      const Icon = power.icon
                      return (
                        <div key={index} className="bg-blue-50 border-2 border-blue-300 rounded-xl p-4">
                          <div className="bg-blue-100 rounded-lg p-3 mb-3 flex justify-center">
                            <Icon className="w-10 h-10 text-blue-600" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{power.title}</h3>
                          <p className="text-sm text-gray-700 text-center">{power.benefits}</p>
                        </div>
                      )
                    })}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">逆に、勉強しないと...</h2>
                  <div className="space-y-3">
                    <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-lg flex items-center space-x-3">
                      <X className="w-6 h-6 text-red-500 flex-shrink-0" />
                      <p className="text-base font-bold text-gray-900">読めない → 騙される</p>
                    </div>
                    <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-lg flex items-center space-x-3">
                      <X className="w-6 h-6 text-orange-500 flex-shrink-0" />
                      <p className="text-base font-bold text-gray-900">計算できない → 損に気づかない</p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg flex items-center space-x-3">
                      <X className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                      <p className="text-base font-bold text-gray-900">考えられない → 言いなり</p>
                    </div>
                    <div className="bg-red-500 rounded-xl p-5 text-center">
                      <p className="text-2xl font-bold text-white">一生、カモ</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">資本主義の原則</h2>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl p-6">
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <Shield className="w-10 h-10 text-white" />
                        <p className="text-2xl font-bold text-white">勉強する人</p>
                      </div>
                      <p className="text-lg text-white">= 自分を守れる</p>
                    </div>
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6">
                      <div className="flex items-center justify-center space-x-3 mb-2">
                        <X className="w-10 h-10 text-white" />
                        <p className="text-2xl font-bold text-white">勉強しない人</p>
                      </div>
                      <p className="text-lg text-white">= 一生、搾取される</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-8 py-4 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep < 3 && (
              <button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>
                  {currentStep === 0 && '必要な力を見る'}
                  {currentStep === 1 && '勉強しないと...'}
                  {currentStep === 2 && '資本主義の原則'}
                </span>
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
