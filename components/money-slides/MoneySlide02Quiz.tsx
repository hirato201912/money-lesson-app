'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Calculator, TrendingDown, ChevronRight, AlertCircle } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide02Quiz({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [userInput, setUserInput] = useState('')

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900 flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-6xl bg-white/96 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white p-6">
          <h1 className="text-4xl font-bold text-center">
            現実を突きつける：計算してみよう
          </h1>
        </div>

        {/* メインコンテンツ */}
        <div className="p-8">
          {/* ステップ0：希望年収を入力 */}
          <AnimatePresence mode="wait">
            {currentStep === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="text-center"
              >
                <Calculator className="w-16 h-16 mx-auto mb-6 text-purple-600" />
                <h2 className="text-3xl font-bold text-gray-800 mb-6">
                  Question ①
                </h2>
                <p className="text-2xl text-gray-700 mb-8">
                  自分の希望年収を書いて
                </p>
                <div className="max-w-md mx-auto">
                  <input
                    type="number"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="例：1000"
                    className="w-full text-4xl font-bold text-center border-4 border-purple-300 rounded-xl p-4 focus:outline-none focus:border-purple-500"
                  />
                  <p className="text-gray-500 mt-2">万円</p>
                </div>
              </motion.div>
            )}

            {/* ステップ1：×0.2の計算 */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Question ②
                </h2>
                <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-6">
                  <p className="text-2xl text-gray-700 mb-4 text-center">
                    その金額に <span className="text-4xl font-bold text-red-600">×0.2</span> をかけてみて
                  </p>
                  {userInput && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-center mt-6"
                    >
                      <p className="text-xl text-gray-600">計算結果</p>
                      <p className="text-5xl font-bold text-red-600">
                        {Math.floor(Number(userInput) * 0.2)} 万円
                      </p>
                      <p className="text-lg text-gray-600 mt-2">が最低でも消える</p>
                    </motion.div>
                  )}
                </div>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded">
                  <div className="flex items-start">
                    <AlertCircle className="w-6 h-6 text-yellow-600 mr-3 flex-shrink-0 mt-1" />
                    <p className="text-gray-700">
                      これが、税金と社会保険料で持っていかれる金額です
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* ステップ2：×0.3の計算 */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
                  Question ③
                </h2>
                <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-2xl p-8 mb-6">
                  <p className="text-2xl text-gray-700 mb-4 text-center">
                    でも、実際はもっと消える。今度は <span className="text-4xl font-bold text-red-600">×0.3</span> をかけてみて
                  </p>
                  {userInput && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="text-center mt-6"
                    >
                      <p className="text-xl text-gray-600">実際の消える金額</p>
                      <p className="text-6xl font-bold text-red-600">
                        {Math.floor(Number(userInput) * 0.3)} 万円
                      </p>
                      <TrendingDown className="w-12 h-12 mx-auto mt-4 text-red-500" />
                    </motion.div>
                  )}
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                  <p className="text-xl font-bold text-gray-800">
                    働いて稼いだお金の3割が、自動的に消える
                  </p>
                  <p className="text-gray-600 mt-2">これが現実です</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* コントロール */}
        <div className="bg-slate-50 border-t p-4">
          <div className="flex justify-center">
            {currentStep === 0 && userInput && (
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2"
              >
                <span>計算してみる</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {currentStep > 0 && currentStep < 2 && (
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2"
              >
                <span>次へ</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {currentStep === 2 && onNext && (
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