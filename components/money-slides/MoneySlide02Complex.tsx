'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertTriangle, ChevronRight, TrendingDown, DollarSign, HelpCircle } from 'lucide-react'

interface SlideProps {
  onNext?: () => void
  onPrev?: () => void
}

export default function MoneySlide02Complex({ onNext }: SlideProps) {
  const [currentStep, setCurrentStep] = useState(0)
  const [visibleItems, setVisibleItems] = useState(0)
  const [showKamoModal, setShowKamoModal] = useState(false)

  const whereMoneyGoes = [
    { item: '所得税', amount: '約80万円', desc: '国に払う税金' },
    { item: '住民税', amount: '約60万円', desc: '市・県に払う税金' },
    { item: '年金', amount: '約100万円', desc: '老後のため' },
    { item: '健康保険', amount: '約60万円', desc: '病院3割負担' },
  ]

  const complexItems = [
    'ボーナスに対する税率が違う',
    '年収が上がると税率も上がる',
    '配偶者の収入で控除が変わる',
    '子供がいると控除が変わる',
    '医療費が10万円超えたら...',
    '住宅ローンを組むと...',
  ]

  useEffect(() => {
    if (currentStep === 2 && visibleItems < complexItems.length) {
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
    <div className="h-screen bg-gradient-to-br from-slate-50 to-blue-50 flex items-center justify-center p-4">
      <div className="w-full max-w-5xl h-full flex flex-col py-8">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white px-8 py-6 rounded-t-2xl flex-shrink-0">
          <h1 className="text-3xl md:text-4xl font-bold text-center">でも、話はここで終わらない</h1>
        </div>

        <div className="flex-1 bg-white px-8 py-6 overflow-y-auto">
          <div className="h-full flex items-center justify-center">
            <AnimatePresence mode="wait">
              {currentStep === 0 && (
                <motion.div key="step0" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">300万円、どこに消えてる？</h2>
                  <DollarSign className="w-20 h-20 mx-auto text-orange-600 mb-6" />
                  <div className="bg-orange-50 border-2 border-orange-400 rounded-xl p-8">
                    <p className="text-2xl text-gray-900 mb-3">年収1000万円から</p>
                    <p className="text-3xl font-bold text-red-600 mb-3">300万円が消える</p>
                    <p className="text-xl text-gray-700">その内訳を見てみよう</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 1 && (
                <motion.div key="step1" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">300万円の内訳</h2>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {whereMoneyGoes.map((item, index) => (
                      <div key={index} className="bg-red-50 border-l-4 border-red-500 rounded-lg p-3">
                        <div className="flex justify-between items-center mb-1">
                          <p className="text-base font-bold text-gray-900">{item.item}</p>
                          <p className="text-base font-bold text-red-600">{item.amount}</p>
                        </div>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-5 text-center">
                    <TrendingDown className="w-10 h-10 mx-auto text-white mb-2" />
                    <p className="text-xl font-bold text-white mb-1">合計 約300万円</p>
                    <p className="text-base text-white/90">手元に残るのは700万円だけ</p>
                  </div>
                </motion.div>
              )}

              {currentStep === 2 && (
                <motion.div key="step2" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="max-w-3xl w-full">
                  <h2 className="text-2xl font-bold text-gray-900 mb-4 text-center">でも実は、もっと複雑</h2>
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    {complexItems.map((item, index) => (
                      <div key={index} className={`bg-red-50 border-l-4 border-red-500 p-3 rounded-lg transition-opacity duration-300 ${index < visibleItems ? 'opacity-100' : 'opacity-0'}`}>
                        <p className="text-sm font-semibold text-gray-900">{item}</p>
                      </div>
                    ))}
                  </div>
                  {visibleItems === complexItems.length && (
                    <div className="bg-yellow-50 border-2 border-yellow-400 rounded-xl p-5">
                      <AlertTriangle className="w-10 h-10 mx-auto text-yellow-600 mb-2" />
                      <p className="text-xl font-bold text-gray-900 mb-2 text-center">これ、理解できる？</p>
                      <p className="text-lg text-gray-700 text-center">今、「むずっ！！」って思った人？</p>
                    </div>
                  )}
                </motion.div>
              )}

              {currentStep === 3 && (
                <motion.div key="step3" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="text-center max-w-2xl">
                  <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-xl p-10">
                    <p className="text-2xl md:text-3xl font-black text-white mb-3">「むずっ！！」と思った瞬間、</p>
                    <p className="text-3xl md:text-5xl font-black text-yellow-300 mb-3">あなたは</p>
                    <p className="text-4xl md:text-6xl font-black text-white mb-3">"カモ"</p>
                    <p className="text-2xl md:text-3xl font-black text-white mb-6">になる</p>
                    <button onClick={() => setShowKamoModal(true)} className="text-sm text-white/70 hover:text-white underline flex items-center justify-center mx-auto">
                      <HelpCircle className="w-4 h-4 mr-1" />
                      「カモ」って何？
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <div className="bg-white border-t-2 border-gray-200 px-8 py-4 rounded-b-2xl flex-shrink-0">
          <div className="flex justify-center">
            {currentStep === 0 && (
              <button onClick={nextStep} className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>内訳を見る</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 1 && (
              <button onClick={nextStep} className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>さらに複雑な話</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            )}
            {currentStep === 2 && visibleItems === complexItems.length && (
              <button onClick={nextStep} className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-bold flex items-center space-x-2 transition-colors">
                <span>続きを見る</span>
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

      {/* カモの説明モーダル */}
      {showKamoModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setShowKamoModal(false)}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-white rounded-xl p-6 max-w-md" onClick={(e) => e.stopPropagation()}>
            <p className="text-xl font-bold text-gray-900 mb-3">「カモ」って何？</p>
            <p className="text-base text-gray-700 mb-2">騙されやすい人、</p>
            <p className="text-base text-gray-700 mb-4">お金を取られやすい人のこと</p>
            <div className="bg-gray-50 rounded-lg p-3 mb-4">
              <p className="text-sm text-gray-600">例：詐欺師が「このカモなら簡単に騙せる」</p>
            </div>
            <button onClick={() => setShowKamoModal(false)} className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700">
              閉じる
            </button>
          </motion.div>
        </div>
      )}
    </div>
  )
}
