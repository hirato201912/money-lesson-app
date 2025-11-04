'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, ChevronRight } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide03Complex({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [visibleItems, setVisibleItems] = useState(0)

  const complexItems = [
    'ボーナスに対する税率が違う',
    '年収が上がると税率も上がる',
    '配偶者の収入で控除が変わる',
    '子供がいると控除が減る',
    '医療費が10万円超えたら...',
    '住宅ローンを組むと...',
    'ふるさと納税で...',
    'iDeCoで...',
  ]

  useEffect(() => {
    if (currentStep === 1 && visibleItems < complexItems.length) {
      const timer = setTimeout(() => {
        setVisibleItems(prev => prev + 1)
      }, 200)
      return () => clearTimeout(timer)
    }
  }, [currentStep, visibleItems, complexItems.length])

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-600 via-red-600 to-pink-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-6xl bg-white/96 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white p-6">
          <h1 className="text-4xl font-bold text-center">
            でも、話はここで終わらない
          </h1>
        </div>

        {/* メインコンテンツ */}
        <div className="p-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* ステップ0：タイトル */}
            {currentStep === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="text-center"
              >
                <h2 className="text-5xl font-bold text-gray-800 mb-6">
                  実は、もっと複雑
                </h2>
                <AlertTriangle className="w-24 h-24 mx-auto text-orange-500 mb-6" />
                <p className="text-2xl text-gray-600">
                  税金の仕組みは、これだけじゃない...
                </p>
              </motion.div>
            )}

            {/* ステップ1：複雑な制度を高速表示 */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                  {complexItems.map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, scale: 0.8, rotateX: 90 }}
                      animate={index < visibleItems ? { opacity: 1, scale: 1, rotateX: 0 } : {}}
                      transition={{ duration: 0.3 }}
                      className="bg-gradient-to-r from-red-50 to-orange-50 border-l-4 border-red-500 p-4 rounded-lg"
                    >
                      <p className="text-lg font-semibold text-gray-800">{item}</p>
                    </motion.div>
                  ))}
                </div>

                {visibleItems === complexItems.length && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center space-y-4"
                  >
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-6">
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        これ、理解できる？
                      </p>
                      <p className="text-xl text-gray-700">
                        今、「むずっ！！」って思った人？
                      </p>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

            {/* ステップ2：衝撃の一言 */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <motion.div
                  animate={{
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                  }}
                  className="bg-gradient-to-r from-red-500 to-orange-500 rounded-3xl p-12 shadow-2xl"
                >
                  <p className="text-6xl md:text-7xl font-black text-white mb-6">
                    その瞬間、
                  </p>
                  <p className="text-6xl md:text-8xl font-black text-yellow-300">
                    あなたは国の
                  </p>
                  <p className="text-7xl md:text-9xl font-black text-white mt-4">
                    "カモ"
                  </p>
                  <p className="text-5xl md:text-6xl font-black text-white mt-4">
                    になる
                  </p>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* コントロール */}
        <div className="bg-slate-50 border-t p-4">
          <div className="flex justify-center">
            {currentStep === 0 && (
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2"
              >
                <span>どのくらい複雑か見てみる</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {currentStep === 1 && visibleItems === complexItems.length && (
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-red-500 to-pink-500 hover:from-red-600 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2 animate-pulse"
              >
                <span>続きを見る</span>
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
