import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface FAQProps {
  data: BikeData
}

export default function FAQ({ data }: FAQProps) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<'faq' | 'latest'>('faq')
  const { basic } = data

  // FAQ items - in real app this would come from data
  const faqs = [
    {
      question: `What is the cost of ${basic.name}?`,
      answer: `The ${basic.name} starts at ₹${(basic.price.exShowroom.min / 100000).toFixed(2)} Lakh and goes up to ₹${(basic.price.exShowroom.max / 100000).toFixed(2)} Lakh (ex-showroom).`
    },
    {
      question: `Which bikes is better ${basic.name} or Royal Enfield Classic 350?`,
      answer: `Both bikes serve different purposes. The ${basic.name} is better for touring with its refined engine and highway stability, while the Classic 350 offers a more relaxed, classic riding experience.`
    },
    {
      question: `What is the mileage of ${basic.name}?`,
      answer: `The ${basic.name} delivers a claimed mileage of ${data.specs.performance.mileageArai}. Real-world mileage varies between ${data.mileageMystery.realRange.min}-${data.mileageMystery.realRange.max} kmpl depending on riding conditions.`
    },
    {
      question: `What are different variants for ${basic.name}?`,
      answer: `The ${basic.name} is available in ${basic.variants.length} variant(s): ${basic.variants.map(v => v.name).join(', ')}.`
    },
    {
      question: `What will the EMI or down payment for ${basic.name}?`,
      answer: `With a down payment of ₹${(data.costDefaults.downPayment / 1000).toFixed(0)}K, the EMI for ${basic.name} works out to approximately ₹${data.costDefaults.emiAmount.toLocaleString()}/month for ${data.costDefaults.emiTenure} months.`
    },
    {
      question: `What are the latest December offers available on ${basic.name}?`,
      answer: `Check with your nearest dealer for the latest festive offers and discounts available on ${basic.name}.`
    },
    {
      question: `What is the engine displacement of ${basic.name}?`,
      answer: `The ${basic.name} is powered by a ${data.specs.engine.displacement} ${data.specs.engine.type} engine producing ${data.specs.engine.maxPower} and ${data.specs.engine.maxTorque}.`
    }
  ]

  return (
    <section className="py-6 bg-white">
      {/* Ask Anything Section */}
      <div className="px-4 mb-6">
        <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-base font-bold text-gray-900">Ask anything and everything</h3>
              <p className="text-xs text-gray-500">Ask anything & get answer in 48 hours</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
              <Icon name="users" size={24} className="text-gray-400" />
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Write your question here"
              className="flex-1 px-4 py-2.5 bg-white border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-[#e53935]"
            />
            <button className="px-4 py-2.5 bg-[#e53935] text-white text-sm font-medium rounded-lg hover:bg-[#c62828] transition-colors">
              Ask Question
            </button>
          </div>
        </div>
      </div>

      {/* Section Header */}
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit']">
          {basic.name} Questions & answers
        </h2>
      </div>

      {/* Tabs */}
      <div className="px-4 mb-4">
        <div className="flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('faq')}
            className={`pb-2 text-sm font-medium transition-colors ${
              activeTab === 'faq'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            FAQ
          </button>
          <button
            onClick={() => setActiveTab('latest')}
            className={`pb-2 text-sm font-medium transition-colors ${
              activeTab === 'latest'
                ? 'text-gray-900 border-b-2 border-gray-900'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            Latest Questions
          </button>
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="px-4">
        <div className="divide-y divide-gray-100">
          {faqs.map((faq, index) => (
            <div key={index} className="py-3">
              <button
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                className="w-full flex items-start justify-between gap-3 text-left"
              >
                <span className="text-sm text-gray-800">
                  Q) {faq.question}
                </span>
                <Icon
                  name={expandedIndex === index ? 'minus' : 'plus'}
                  size={18}
                  className="text-gray-400 flex-shrink-0 mt-0.5"
                />
              </button>
              {expandedIndex === index && (
                <div className="mt-2 pl-4 text-sm text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* View All FAQs Link */}
      <div className="px-4 mt-4 text-center">
        <button className="text-sm text-blue-600 font-medium hover:underline">
          View All FAQs
        </button>
      </div>
    </section>
  )
}

