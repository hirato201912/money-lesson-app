'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { School, Calendar, Target, TrendingUp, CheckCircle, ChevronRight, Lightbulb, Shield } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide09Support({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">だから、塾でサポートする</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <School className="w-16 h-16 mx-auto mb-6 text-emerald-600" />
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">高校生になっても、塾を続けるメリット</h2>
                  <div className="bg-green-50 border-2 border-green-400 rounded-xl p-8">
                    <p className="text-xl text-gray-700">でも、この塾の高校生指導は、</p>
                    <p className="text-2xl font-bold text-gray-900 mt-2">中学とは全く違う</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-4xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">中学の塾 vs 高校の塾（この塾）</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 border-2 border-blue-300 rounded-xl p-5">
                      <h3 className="text-2xl font-bold text-blue-800 mb-4 text-center">中学</h3>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-gray-800">宿題を出す</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-gray-800">カリキュラム決定</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 text-center">
                          <p className="text-lg font-bold text-gray-800">週3回</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-5">
                      <h3 className="text-2xl font-bold text-emerald-800 mb-4 text-center">高校（この塾）</h3>
                      <div className="space-y-3">
                        <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-emerald-600 mr-2 flex-shrink-0" />
                          <p className="text-lg font-bold text-gray-900">宿題を出さない</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-emerald-600 mr-2 flex-shrink-0" />
                          <p className="text-lg font-bold text-gray-900">生徒が主導</p>
                        </div>
                        <div className="bg-white rounded-lg p-3 flex items-center justify-center">
                          <CheckCircle className="w-6 h-6 text-emerald-600 mr-2 flex-shrink-0" />
                          <p className="text-lg font-bold text-gray-900">週1回でOK</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl">
                  <div className="bg-yellow-50 border-4 border-yellow-400 rounded-2xl p-6">
                    <div className="flex items-center justify-center mb-4">
                      <Lightbulb className="w-12 h-12 text-yellow-600 mr-3" />
                      <h2 className="text-3xl font-black text-gray-900">なぜこのスタイル？</h2>
                    </div>
                    <div className="bg-white rounded-xl p-5 shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Calendar className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-xl font-bold text-gray-900 mb-2">部活や自分の時間で忙しいから</p>
                            <p className="text-base text-gray-700">生徒が困っていることを塾が助ける</p>
                          </div>
                        </div>
                        <div className="border-t-2 border-gray-100 pt-4"></div>
                        <div className="flex items-start space-x-3">
                          <Target className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
                          <div>
                            <p className="text-xl font-bold text-gray-900 mb-2">効率的にテストで点が取れる</p>
                            <p className="text-base text-gray-700">どんな勉強をしたらいいか、ノウハウを教える</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">塾を続けると、こんな安心が手に入る</h2>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                      <p className="text-base font-bold text-gray-900">効率よく点が取れる</p>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-4 text-center">
                      <CheckCircle className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-base font-bold text-gray-900">部活に没頭できる</p>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-4 text-center">
                      <Calendar className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                      <p className="text-base font-bold text-gray-900">予定を柔軟に調整</p>
                    </div>
                    <div className="bg-emerald-50 border-2 border-emerald-400 rounded-xl p-4 text-center">
                      <TrendingUp className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                      <p className="text-base font-bold text-gray-900">でも、成績は上がる</p>
                    </div>
                  </div>
                  <div className="bg-emerald-600 rounded-xl p-5 text-center">
                    <Shield className="w-12 h-12 mx-auto text-white mb-2" />
                    <p className="text-2xl font-bold text-white">無理なく、でも確実に成長できる</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-8 py-4 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep < 3 && (
              <button onClick={nextStep} className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>
                  {currentStep === 0 && '中学との違いを見る'}
                  {currentStep === 1 && 'なぜこのスタイル？'}
                  {currentStep === 2 && '安心できる理由'}
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
