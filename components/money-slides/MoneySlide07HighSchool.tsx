'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { School, TrendingUp, AlertTriangle, BookOpen, ChevronRight, ArrowRight } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide07HighSchool({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">高校での勉強が全てを決める</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <School className="w-16 h-16 mx-auto mb-6 text-orange-600" />
                  <h2 className="text-4xl font-bold text-gray-900 mb-8">中学の勉強だけじゃ足りない</h2>
                  <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-8">
                    <p className="text-xl text-gray-900">なぜ高校の勉強が重要か？</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">なぜ高校の勉強が重要か</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <BookOpen className="w-8 h-8 mr-3 text-blue-600" />
                        <h3 className="text-xl font-bold text-blue-800">中学</h3>
                      </div>
                      <p className="text-lg text-gray-700 mb-2">基礎的な読み書き計算</p>
                      <p className="text-gray-600">（準備段階）</p>
                    </div>

                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                      <div className="flex items-center mb-4">
                        <TrendingUp className="w-8 h-8 mr-3 text-red-600" />
                        <h3 className="text-xl font-bold text-red-800">高校</h3>
                      </div>
                      <p className="text-lg text-gray-900 mb-3 font-semibold">より専門的、実践的</p>
                      <ul className="space-y-2 text-sm">
                        <li className="flex"><span className="text-red-500 mr-2">•</span><span>数学：金利、確率、統計</span></li>
                        <li className="flex"><span className="text-red-500 mr-2">•</span><span>国語：複雑な文章</span></li>
                        <li className="flex"><span className="text-red-500 mr-2">•</span><span>社会：税金、年金</span></li>
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">ここで分かれ道</h2>
                  <div className="space-y-4">
                    <div className="bg-gray-800 text-white rounded-xl p-6">
                      <p className="text-2xl font-bold">高校生活</p>
                    </div>
                    <ArrowRight className="w-8 h-8 mx-auto text-gray-400 rotate-90" />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="bg-gradient-to-br from-red-500 to-red-700 rounded-xl p-8 text-white">
                        <AlertTriangle className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">サボる</h3>
                        <p className="text-xl">↓</p>
                        <p className="text-xl font-bold">カモ確定</p>
                      </div>
                      <div className="bg-gradient-to-br from-emerald-500 to-green-700 rounded-xl p-8 text-white">
                        <TrendingUp className="w-12 h-12 mx-auto mb-4" />
                        <h3 className="text-2xl font-bold mb-2">頑張る</h3>
                        <p className="text-xl">↓</p>
                        <p className="text-xl font-bold">自分で判断できる</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">大学受験の現実</h2>
                  <div className="space-y-4">
                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-6">
                      <p className="text-xl font-bold text-gray-900">高1からの成績が見られる（推薦）</p>
                    </div>
                    <div className="bg-red-500 rounded-xl p-8">
                      <p className="text-3xl font-bold text-white">「高3から」は通用しない</p>
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
              <button onClick={nextStep} className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>{currentStep === 0 ? '高校の勉強が重要な理由' : currentStep === 1 ? '分かれ道' : '大学受験の現実'}</span>
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
