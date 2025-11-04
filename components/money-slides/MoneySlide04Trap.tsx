'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Music, Smartphone, ArrowRight, ChevronRight, AlertCircle } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide04Trap({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const examples = [
    {
      title: 'ゲームの課金',
      icon: Gamepad2,
      color: 'from-purple-500 to-pink-500',
      steps: [
        '最初は無料！',
        'でも強くなるにはガチャ',
        '確率0.5%のレアキャラ',
        '気づいたら月1万円',
      ],
    },
    {
      title: 'サブスク（Netflix、Spotify等）',
      icon: Music,
      color: 'from-green-500 to-teal-500',
      steps: [
        '最初の1ヶ月無料！',
        '自動更新で毎月引き落とし',
        '解約方法がわかりにくい',
        '使ってないのに年間1万円以上',
      ],
    },
    {
      title: 'スマホの契約',
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
      steps: [
        '「最初の3ヶ月だけ安い」が小さく書いてある',
        '4ヶ月目から料金倍',
        'でも気づかない',
        '年間で数万円の差',
      ],
    },
  ]

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-700 via-orange-600 to-yellow-600 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-6xl bg-white/96 rounded-3xl shadow-2xl overflow-hidden"
      >
        {/* ヘッダー */}
        <div className="bg-gradient-to-r from-red-600 via-orange-600 to-yellow-600 text-white p-6">
          <h1 className="text-4xl font-bold text-center">
            「むずっ！！」の罠
          </h1>
        </div>

        {/* メインコンテンツ */}
        <div className="p-8 min-h-[500px]">
          <AnimatePresence mode="wait">
            {/* ステップ0：導入 */}
            {currentStep === 0 && (
              <motion.div
                key="step0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                className="text-center"
              >
                <h2 className="text-4xl font-bold text-gray-800 mb-6">
                  世の中は、わざと複雑に作られてる
                </h2>
                <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-8 max-w-3xl mx-auto">
                  <p className="text-3xl font-bold text-red-600 mb-4">なぜ？</p>
                  <p className="text-2xl text-gray-800">
                    「むずっ！！」と思った人から、
                  </p>
                  <p className="text-3xl font-bold text-red-600 mt-2">
                    お金を取りやすいから
                  </p>
                </div>
              </motion.div>
            )}

            {/* ステップ1-3：中学生が共感する事例 */}
            {currentStep >= 1 && currentStep <= 3 && (
              <motion.div
                key={`step${currentStep}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
              >
                {(() => {
                  const example = examples[currentStep - 1]
                  const Icon = example.icon
                  return (
                    <div className="max-w-4xl mx-auto">
                      <div className={`bg-gradient-to-r ${example.color} rounded-2xl p-6 mb-6 text-white`}>
                        <div className="flex items-center justify-center space-x-4 mb-4">
                          <Icon className="w-12 h-12" />
                          <h3 className="text-3xl font-bold">{example.title}</h3>
                        </div>
                      </div>
                      <div className="space-y-4">
                        {example.steps.map((step, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-white shadow-lg rounded-xl p-4 flex items-center space-x-4"
                          >
                            <div className={`w-10 h-10 rounded-full bg-gradient-to-r ${example.color} flex items-center justify-center text-white font-bold`}>
                              {index + 1}
                            </div>
                            <p className="text-xl text-gray-800 font-semibold">{step}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </motion.div>
            )}

            {/* ステップ4：共通パターン */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-8">
                  共通するパターン
                </h2>
                <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-8">
                  <div className="bg-orange-100 rounded-xl p-6 flex-1 max-w-xs">
                    <p className="text-xl font-bold text-orange-700">複雑にする</p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                  <div className="bg-red-100 rounded-xl p-6 flex-1 max-w-xs">
                    <p className="text-xl font-bold text-red-700">「むずっ！！」</p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                  <div className="bg-yellow-100 rounded-xl p-6 flex-1 max-w-xs">
                    <p className="text-xl font-bold text-yellow-700">理解を諦める</p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                  <div className="bg-purple-100 rounded-xl p-6 flex-1 max-w-xs">
                    <p className="text-xl font-bold text-purple-700">言いなり</p>
                  </div>
                  <ArrowRight className="w-8 h-8 text-gray-400 rotate-90 md:rotate-0" />
                  <div className="bg-red-500 rounded-xl p-6 flex-1 max-w-xs">
                    <p className="text-xl font-bold text-white">お金を取られる</p>
                  </div>
                </div>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded max-w-3xl mx-auto">
                  <div className="flex items-start">
                    <AlertCircle className="w-8 h-8 text-red-600 mr-4 flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-2xl font-bold text-gray-800 mb-2">
                        大人になったら、
                      </p>
                      <p className="text-xl text-gray-700">
                        あらゆる場面で同じことが起きる
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* コントロール */}
        <div className="bg-slate-50 border-t p-4">
          <div className="flex justify-center">
            {currentStep < 4 && (
              <button
                onClick={nextStep}
                className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white px-6 py-3 rounded-xl font-bold flex items-center space-x-2"
              >
                <span>{currentStep === 0 ? '具体例を見る' : currentStep < 3 ? '次の例を見る' : '共通パターンを見る'}</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
            {currentStep === 4 && onNext && (
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
