'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { CheckCircle, School, TrendingUp, Shield, Sparkles, ChevronRight } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide10Summary({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const summaryPoints = [
    '世の中は複雑 → 「むずっ！！」と思った人から搾取',
    '勉強する人は自分を守れる（資本主義の原則）',
    '高校での勉強が全てを決める',
    '一人は大変 → 塾でサポート',
    '高校の塾は中学と全く違う → 効率的',
  ]

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">まとめ + 秘密兵器の予告</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">今日の話、まとめ</h2>
                  <CheckCircle className="w-20 h-20 mx-auto text-blue-600 mb-6" />
                  <p className="text-xl text-gray-600">大事なポイントを振り返ろう</p>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">5つのポイント</h2>
                  <div className="grid grid-cols-1 gap-2">
                    {summaryPoints.map((point, index) => (
                      <div key={index} className="bg-white shadow rounded-lg p-3 border-l-4 border-blue-500 flex items-center space-x-3">
                        <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full w-8 h-8 flex items-center justify-center text-white font-bold flex-shrink-0 text-sm">
                          {index + 1}
                        </div>
                        <p className="text-sm font-semibold text-gray-800">{point}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-2xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">最後に</h2>
                  <div className="space-y-3">
                    <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-lg">
                      <p className="text-base text-gray-800">高校受験、頑張ってるよね</p>
                    </div>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded-lg">
                      <p className="text-base text-gray-800">でも、受かったらそこで終わりじゃない</p>
                    </div>
                    <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-lg">
                      <p className="text-base font-bold text-gray-900">そこからが本当のスタート</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-indigo-600 rounded-xl p-5 text-center">
                      <Shield className="w-10 h-10 mx-auto text-white mb-2" />
                      <p className="text-lg font-bold text-white">高校で、カモにならない人間になろう</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <Sparkles className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
                  <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">おまけ：秘密兵器の予告</h2>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
                      <p className="text-lg text-gray-900 mb-2">高校生指導には秘密兵器がある</p>
                      <p className="text-base text-gray-600 mb-2">それが何かは...</p>
                      <p className="text-xl font-bold text-orange-600">また別の機会に</p>
                    </div>
                    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-5">
                      <p className="text-xl font-bold text-white">楽しみにしててね</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl p-10">
                    <TrendingUp className="w-16 h-16 mx-auto text-white mb-4" />
                    <p className="text-3xl md:text-4xl font-black text-white mb-4">今日の授業、</p>
                    <p className="text-3xl md:text-4xl font-black text-yellow-300 mb-4">おつかれさま！</p>
                    <p className="text-lg text-white">これからも一緒に頑張ろう</p>
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
                  {currentStep === 0 && '5つのポイント'}
                  {currentStep === 1 && '最後のメッセージ'}
                  {currentStep === 2 && '秘密兵器の予告'}
                  {currentStep === 3 && '完了'}
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 4 && (
              <button onClick={() => window.location.reload()} className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>最初から見る</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
