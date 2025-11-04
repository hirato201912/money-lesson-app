'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Gamepad2, Music, Smartphone, ArrowDown, ChevronRight, AlertCircle } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide03Trap({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)

  const examples = [
    {
      title: 'ゲームの課金',
      icon: Gamepad2,
      color: 'purple',
      steps: ['最初は無料！', 'でも強くなるにはガチャ', '確率0.5%のレアキャラ', '気づいたら月1万円'],
    },
    {
      title: 'サブスク（Netflix、Spotify等）',
      icon: Music,
      color: 'emerald',
      steps: ['最初の1ヶ月無料！', '自動更新で毎月引き落とし', '解約方法がわかりにくい', '使ってないのに年間1万円以上'],
    },
    {
      title: 'スマホの契約',
      icon: Smartphone,
      color: 'blue',
      steps: ['「最初の3ヶ月だけ安い」が小さく書いてある', '4ヶ月目から料金倍', 'でも気づかない', '年間で数万円の差'],
    },
  ]

  const nextStep = () => {
    setCurrentStep(prev => prev + 1)
  }

  return (
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">「むずっ！！」の罠</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">世の中は、わざと複雑に作られてる</h2>
                  <div className="bg-red-50 border-2 border-red-400 rounded-xl p-8">
                    <p className="text-2xl font-bold text-red-600 mb-4">なぜ？</p>
                    <p className="text-xl text-gray-900">「むずっ！！」と思った人から、</p>
                    <p className="text-2xl font-bold text-red-600 mt-2">お金を取りやすいから</p>
                  </div>
                </motion.div>
              )}

              {currentStep >= 1 && currentStep <= 3 && (
                <motion.div key={`step${currentStep}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-2xl w-full">
                  {(() => {
                    const example = examples[currentStep - 1]
                    const Icon = example.icon
                    return (
                      <div>
                        <div className={`bg-gradient-to-r from-${example.color}-600 to-${example.color}-500 rounded-xl p-6 mb-6 text-white`}>
                          <div className="flex items-center justify-center space-x-4">
                            <Icon className="w-12 h-12" />
                            <h3 className="text-2xl md:text-3xl font-bold">{example.title}</h3>
                          </div>
                        </div>
                        <div className="space-y-3">
                          {example.steps.map((step, index) => (
                            <div key={index} className="bg-gray-50 border-l-4 border-gray-400 p-4 rounded-lg flex items-center space-x-4">
                              <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-white font-bold flex-shrink-0">
                                {index + 1}
                              </div>
                              <p className="text-lg font-semibold text-gray-900">{step}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )
                  })()}
                </motion.div>
              )}

              {currentStep === 4 && (
                <motion.div key="step4" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-xl">
                  <h2 className="text-xl font-bold text-gray-900 mb-4">共通するパターン</h2>
                  <div className="bg-red-50 border-2 border-red-300 rounded-xl p-4 space-y-2">
                    <div className="bg-white rounded-lg p-2">
                      <p className="text-base font-bold text-orange-700">複雑にする</p>
                    </div>
                    <ArrowDown className="w-6 h-6 mx-auto text-gray-600" />
                    <div className="bg-white rounded-lg p-2">
                      <p className="text-base font-bold text-red-700">「むずっ！！」</p>
                    </div>
                    <ArrowDown className="w-6 h-6 mx-auto text-gray-600" />
                    <div className="bg-white rounded-lg p-2">
                      <p className="text-base font-bold text-gray-700">理解を諦める → 言いなり</p>
                    </div>
                    <ArrowDown className="w-6 h-6 mx-auto text-gray-600" />
                    <div className="bg-red-600 rounded-lg p-3">
                      <p className="text-lg font-bold text-white">お金を取られる</p>
                    </div>
                  </div>
                </motion.div>
              )}

              {currentStep === 5 && (
                <motion.div key="step5" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <div className="bg-red-50 border-2 border-red-500 rounded-xl p-8 mb-6">
                    <AlertCircle className="w-16 h-16 text-red-600 mx-auto mb-4" />
                    <p className="text-2xl font-bold text-gray-900 mb-3">大人になったら、</p>
                    <p className="text-xl text-gray-700">あらゆる場面で同じことが起きる</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-8">
                    <p className="text-3xl font-bold text-white mb-3">だから今から</p>
                    <p className="text-4xl font-bold text-yellow-300">対策が必要</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-8 py-4 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep < 5 && (
              <button onClick={nextStep} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>
                  {currentStep === 0 && '具体例を見る'}
                  {currentStep >= 1 && currentStep < 3 && '次の例を見る'}
                  {currentStep === 3 && '共通パターンを見る'}
                  {currentStep === 4 && '続きを見る'}
                </span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 5 && onNext && (
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
