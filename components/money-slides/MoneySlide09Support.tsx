'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Lightbulb, CheckCircle, ChevronRight, User, Zap, Heart, Star, Trophy, TrendingUp } from 'lucide-react'

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
      <div className="w-full max-w-5xl h-full flex flex-col py-6">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-4 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl font-bold text-center">高校でも塾を続けたら...</h1>
        </div>

        <div className="flex-1 bg-white px-6 py-4 overflow-hidden">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-3xl">
                  <Lightbulb className="w-16 h-16 mx-auto mb-4 text-blue-600" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-5">実は、高校の塾は中学と全然違う</h2>
                  <div className="bg-blue-50 border-4 border-blue-400 rounded-xl p-5">
                    <p className="text-xl text-gray-700 mb-2">中学みたいに</p>
                    <p className="text-2xl font-bold text-gray-900 mb-2">「宿題たくさん」「週3回通う」</p>
                    <p className="text-xl text-gray-700">じゃないんだ</p>
                  </div>
                  <div className="mt-4 bg-green-50 border-2 border-green-400 rounded-xl p-4">
                    <p className="text-lg font-bold text-emerald-600">
                      もっと効率的で、自分に合ったやり方がある
                    </p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-4xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-3 text-center">どう違うの？</h2>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-gray-50 border-2 border-gray-300 rounded-xl p-4">
                      <h3 className="text-xl font-bold text-gray-700 mb-3 text-center">中学の塾</h3>
                      <div className="space-y-2">
                        <div className="bg-white rounded-lg p-2">
                          <p className="text-sm font-bold text-gray-700 text-center">塾が決めた宿題</p>
                          <p className="text-xs text-gray-500 text-center">やらされてる感</p>
                        </div>
                        <div className="bg-white rounded-lg p-2">
                          <p className="text-sm font-bold text-gray-700 text-center">塾のペース</p>
                          <p className="text-xs text-gray-500 text-center">自分に合わない</p>
                        </div>
                        <div className="bg-white rounded-lg p-2">
                          <p className="text-sm font-bold text-gray-700 text-center">週3回通う</p>
                          <p className="text-xs text-gray-500 text-center">時間が取られる</p>
                        </div>
                      </div>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-4">
                      <h3 className="text-xl font-bold text-blue-800 mb-3 text-center">高校の塾（ここ）</h3>
                      <div className="space-y-2">
                        <div className="bg-white rounded-lg p-2 flex items-center">
                          <User className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-bold text-gray-900">自分で決める</p>
                            <p className="text-xs text-gray-600">困った時だけ相談</p>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2 flex items-center">
                          <Zap className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-bold text-gray-900">自分のペース</p>
                            <p className="text-xs text-gray-600">効率的に点を取る</p>
                          </div>
                        </div>
                        <div className="bg-white rounded-lg p-2 flex items-center">
                          <CheckCircle className="w-5 h-5 text-blue-600 mr-2 flex-shrink-0" />
                          <div>
                            <p className="text-sm font-bold text-gray-900">週1回でOK</p>
                            <p className="text-xs text-gray-600">部活と両立できる</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">続けている人は、こうなってる</h2>
                  <div className="grid grid-cols-2 gap-2 mb-3">
                    <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-3 text-center">
                      <Zap className="w-8 h-8 text-blue-600 mx-auto mb-1" />
                      <p className="text-sm font-bold text-gray-900">効率よく点が取れる</p>
                    </div>
                    <div className="bg-green-50 border-2 border-green-400 rounded-xl p-3 text-center">
                      <Heart className="w-8 h-8 text-green-600 mx-auto mb-1" />
                      <p className="text-sm font-bold text-gray-900">部活にも全力</p>
                    </div>
                    <div className="bg-purple-50 border-2 border-purple-400 rounded-xl p-3 text-center">
                      <Star className="w-8 h-8 text-purple-600 mx-auto mb-1" />
                      <p className="text-sm font-bold text-gray-900">余裕がある</p>
                    </div>
                    <div className="bg-green-50 border-2 border-green-400 rounded-xl p-3 text-center">
                      <TrendingUp className="w-8 h-8 text-green-600 mx-auto mb-1" />
                      <p className="text-sm font-bold text-gray-900">成績も右肩上がり</p>
                    </div>
                  </div>
                  <div className="bg-blue-600 rounded-xl p-4 text-center">
                    <p className="text-xl font-bold text-white">無理なく、でも確実に結果が出る</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl text-center">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-indigo-600" />
                  <h2 className="text-3xl font-bold text-gray-900 mb-5">選択肢として、考えてみてほしい</h2>
                  <div className="space-y-3">
                    <div className="bg-indigo-50 border-2 border-indigo-400 rounded-xl p-4">
                      <p className="text-lg font-bold text-gray-900 mb-2">
                        今まで頑張ってきたなら、
                      </p>
                      <p className="text-xl font-bold text-indigo-600">
                        高校でもっと輝ける可能性がある
                      </p>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl p-5">
                      <Lightbulb className="w-12 h-12 mx-auto text-white mb-2" />
                      <p className="text-2xl font-bold text-white mb-1">
                        合格後も、学び続ける道がある
                      </p>
                      <p className="text-base text-blue-100">
                        それが自分にとって良い選択か、考えてみてほしい
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-6 py-3 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep < 3 && (
              <button onClick={nextStep} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>
                  {currentStep === 0 && 'どう違うの？'}
                  {currentStep === 1 && '続けている人は...'}
                  {currentStep === 2 && '選択肢として'}
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 3 && onNext && (
              <button onClick={onNext} className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
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
