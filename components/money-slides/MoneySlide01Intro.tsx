'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, DollarSign, TrendingDown, ChevronRight } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide01Intro({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [userInput, setUserInput] = useState('')

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">大人が教えてくれない本当の話</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <AlertTriangle className="w-16 h-16 mx-auto mb-6 text-orange-500" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">今日は、学校では絶対に教えてくれない話をする</h2>
                  <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-6">
                    <p className="text-xl md:text-2xl font-bold text-gray-900">でも、知らないと確実に損する話</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <DollarSign className="w-16 h-16 mx-auto mb-6 text-emerald-500" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">質問</h2>
                  <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-8">
                    <p className="text-2xl md:text-3xl font-bold text-gray-900">年収1000万円稼いだら、<br />全部もらえると思う？</p>
                    <p className="text-lg text-gray-600 mt-6">手を挙げてみて</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-3xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">答え</h2>
                  <div className="space-y-3">
                    <div className="bg-emerald-100 border-2 border-emerald-300 rounded-xl p-5">
                      <p className="text-base text-gray-700 mb-1">年収1000万円</p>
                      <p className="text-4xl font-black text-emerald-600">1000万円</p>
                    </div>
                    <TrendingDown className="w-10 h-10 mx-auto text-red-500" />
                    <div className="bg-gray-100 border-2 border-gray-300 rounded-xl p-5">
                      <p className="text-base text-gray-700 mb-1">実際に残る金額</p>
                      <p className="text-4xl font-black text-gray-900">約700万円</p>
                    </div>
                    <div className="bg-red-500 rounded-xl p-5">
                      <p className="text-3xl font-black text-white">300万円が消える</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-2xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">実際に計算してみよう</h2>
                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-300 rounded-xl p-6">
                    <p className="text-lg text-gray-900 mb-4 text-center">じゃあ、自分の希望年収で計算してみて</p>
                    <div className="max-w-md mx-auto">
                      <input
                        type="number"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="例：500"
                        className="w-full text-2xl font-bold text-center border-2 border-blue-400 rounded-xl p-3 focus:outline-none focus:border-blue-600"
                      />
                      <p className="text-gray-600 mt-2 text-center">万円</p>
                    </div>
                    {userInput && (
                      <div className="mt-4 bg-white rounded-xl p-4 border-2 border-red-300">
                        <p className="text-base text-gray-700 mb-1 text-center">消える金額（約3割）</p>
                        <p className="text-4xl font-black text-red-600 text-center">{Math.floor(Number(userInput) * 0.3)} 万円</p>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <div className="space-y-3">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-6">
                      <p className="text-xl md:text-2xl font-bold text-white mb-2">働いて稼いだお金の3割が</p>
                      <p className="text-2xl md:text-3xl font-black text-yellow-300">自動的に消える</p>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-5">
                      <p className="text-lg font-bold text-white mb-1">しかも、勝手に引かれる</p>
                      <p className="text-lg font-bold text-red-400">拒否できない</p>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-5">
                      <p className="text-xl font-bold text-gray-900">これが現実。これ、知ってた？</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-8 py-4 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep < 4 && (
              <button onClick={nextStep} className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>
                  {currentStep === 0 && '質問'}
                  {currentStep === 1 && '答えを見る'}
                  {currentStep === 2 && '計算してみる'}
                  {currentStep === 3 && '現実を知る'}
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 4 && onNext && (
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
