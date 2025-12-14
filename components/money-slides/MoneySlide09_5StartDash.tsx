'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Trophy,
  Rocket,
  Star,
  TrendingUp,
  Heart,
  Users,
  ChevronRight,
  AlertCircle,
  AlertTriangle,
  TrendingDown,
  BookOpen,
  Crown
} from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide09_5StartDash({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-6">
        <div className="bg-gradient-to-r from-orange-600 to-pink-600 text-white px-6 py-4 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl font-bold text-center">合格したら終わり？</h1>
        </div>

        <div className="flex-1 bg-white px-6 py-4 overflow-hidden">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div
                  key="step0"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center max-w-3xl"
                >
                  <AlertCircle className="w-16 h-16 mx-auto mb-4 text-orange-600" />
                  <h2 className="text-4xl font-black text-gray-900 mb-5">
                    ちょっと待った！
                  </h2>
                  <div className="bg-gradient-to-r from-orange-100 to-pink-100 border-4 border-orange-400 rounded-2xl p-5">
                    <p className="text-2xl font-bold text-gray-900 mb-3">
                      「高校受験、受かったら<br />塾は行かなくていいや」
                    </p>
                    <div className="bg-white rounded-full px-5 py-2 border-2 border-orange-500 inline-block">
                      <p className="text-lg font-bold text-orange-600">本当にそう思う？</p>
                    </div>
                  </div>
                  <div className="mt-5 bg-yellow-50 border-2 border-yellow-400 rounded-xl p-4">
                    <p className="text-lg text-gray-700">
                      立ち止まって、冷静に考えてみよう
                    </p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-center max-w-3xl"
                >
                  <AlertTriangle className="w-14 h-14 mx-auto mb-3 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">高校の勉強、実は...</h2>
                  <div className="grid grid-cols-3 gap-2 mb-4">
                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-3 text-center">
                      <TrendingDown className="w-10 h-10 mx-auto text-red-600 mb-1" />
                      <p className="text-3xl font-black text-red-600">60%</p>
                      <p className="text-xs font-bold text-gray-800">1学期でつまずく</p>
                    </div>
                    <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-3 text-center">
                      <BookOpen className="w-10 h-10 mx-auto text-orange-600 mb-1" />
                      <p className="text-3xl font-black text-orange-600">3倍</p>
                      <p className="text-xs font-bold text-gray-800">学習量が増える</p>
                    </div>
                    <div className="bg-red-50 border-2 border-red-400 rounded-xl p-3 text-center">
                      <AlertTriangle className="w-10 h-10 mx-auto text-red-600 mb-1" />
                      <p className="text-3xl font-black text-red-600">70%</p>
                      <p className="text-xs font-bold text-gray-800">数学で挫折</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="grid grid-cols-2 gap-2">
                      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-2 text-left">
                        <p className="text-sm font-bold text-gray-900">授業スピードが速い</p>
                      </div>
                      <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-2 text-left">
                        <p className="text-sm font-bold text-gray-900">範囲が膨大</p>
                      </div>
                      <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-2 text-left">
                        <p className="text-sm font-bold text-gray-900">部活で時間がない</p>
                      </div>
                      <div className="bg-orange-50 border-l-4 border-orange-500 rounded-lg p-2 text-left">
                        <p className="text-sm font-bold text-gray-900">質問できる人がいない</p>
                      </div>
                    </div>
                    <div className="bg-gray-800 rounded-xl p-4">
                      <p className="text-xl font-bold text-white">一人で乗り越えるのは本当に大変</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-3xl w-full"
                >
                  <div className="text-center mb-3">
                    <Rocket className="w-14 h-14 mx-auto mb-2 text-blue-600" />
                    <h2 className="text-2xl font-bold text-gray-900">だから、スタートダッシュが重要</h2>
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-500 rounded-xl p-4 mb-3">
                    <p className="text-lg font-bold text-gray-900 text-center mb-2">
                      高校最初のテストで成功したら...
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white border-2 border-green-400 rounded-lg p-2 text-center">
                        <Trophy className="w-8 h-8 mx-auto text-green-600 mb-1" />
                        <p className="text-sm font-bold text-gray-900">自信UP</p>
                      </div>
                      <div className="bg-white border-2 border-green-400 rounded-lg p-2 text-center">
                        <Users className="w-8 h-8 mx-auto text-green-600 mb-1" />
                        <p className="text-sm font-bold text-gray-900">評価UP</p>
                      </div>
                      <div className="bg-white border-2 border-green-400 rounded-lg p-2 text-center">
                        <Star className="w-8 h-8 mx-auto text-green-600 mb-1" />
                        <p className="text-sm font-bold text-gray-900">好循環</p>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="bg-pink-50 border-2 border-pink-400 rounded-lg p-2 text-center">
                      <Heart className="w-8 h-8 mx-auto text-pink-600 mb-1" />
                      <p className="text-sm font-bold text-gray-900">部活に全力</p>
                    </div>
                    <div className="bg-purple-50 border-2 border-purple-400 rounded-lg p-2 text-center">
                      <Users className="w-8 h-8 mx-auto text-purple-600 mb-1" />
                      <p className="text-sm font-bold text-gray-900">友達と充実</p>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-400 rounded-lg p-2 text-center">
                      <Trophy className="w-8 h-8 mx-auto text-blue-600 mb-1" />
                      <p className="text-sm font-bold text-gray-900">自己肯定感UP</p>
                    </div>
                    <div className="bg-green-50 border-2 border-green-400 rounded-lg p-2 text-center">
                      <TrendingUp className="w-8 h-8 mx-auto text-green-600 mb-1" />
                      <p className="text-sm font-bold text-gray-900">成績も上昇</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="max-w-3xl text-center"
                >
                  <Star className="w-14 h-14 mx-auto mb-3 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">その先の未来</h2>
                  <div className="bg-indigo-50 border-2 border-indigo-500 rounded-xl p-4 mb-3">
                    <p className="text-lg font-bold text-gray-900 mb-2">
                      スタートダッシュできたら...
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-xs font-bold text-indigo-600">高2・高3も<br />安定</p>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-xs font-bold text-indigo-600">大学受験<br />選択肢拡大</p>
                      </div>
                      <div className="bg-white rounded-lg p-2">
                        <p className="text-xs font-bold text-indigo-600">夢を<br />追いかけられる</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gradient-to-r from-pink-500 to-purple-500 rounded-xl p-4 mb-2">
                    <Crown className="w-10 h-10 mx-auto text-white mb-2" />
                    <p className="text-xl font-bold text-white">人生の選択肢が広がる</p>
                  </div>
                  <div className="bg-blue-50 border-2 border-blue-400 rounded-xl p-3">
                    <p className="text-base font-bold text-gray-900">
                      高校受験で合格してからが、本当のスタート
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-6 py-3 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep < 3 && (
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors"
              >
                <span>
                  {currentStep === 0 && '高校の現実を見る'}
                  {currentStep === 1 && 'スタートダッシュの重要性'}
                  {currentStep === 2 && 'その先の未来'}
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 3 && onNext && (
              <button
                onClick={onNext}
                className="bg-gradient-to-r from-orange-600 to-pink-600 hover:from-orange-700 hover:to-pink-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors"
              >
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
