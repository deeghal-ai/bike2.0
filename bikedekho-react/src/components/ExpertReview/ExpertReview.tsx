import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'
import SurprisingInsights from './SurprisingInsights'

interface ExpertReviewProps {
  data: BikeData
}

export default function ExpertReview({ data }: ExpertReviewProps) {
  const [showFullPros, setShowFullPros] = useState(false)
  const [showFullCons, setShowFullCons] = useState(false)
  const { quotes } = data

  // Expert review ratings - would come from data in real app
  const expertRating = 3.8
  const categoryRatings = [
    { label: 'Design & Quality', rating: 4.0 },
    { label: 'Features & Practicality', rating: 3.5 },
    { label: 'Rider & Pillion Comfort', rating: 3.5 },
    { label: 'Engine & Performance', rating: 4.0 }
  ]

  // Get pros and cons from quotes
  const pros = quotes.praises.slice(0, 3).map(p => ({
    title: p.category,
    detail: p.quotes[0]?.text || ''
  }))

  const cons = quotes.complaints.slice(0, 2).map(c => ({
    title: c.category,
    detail: c.quotes[0]?.text || ''
  }))

  return (
    <section className="py-6 bg-white">
      {/* Expert Rating Header */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] mb-4">
          Expert Review
        </h2>

        <div className="flex items-center gap-4">
          {/* Rating Badge */}
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#e53935] to-[#c62828]">
            <div className="text-center text-white">
              <div className="text-xl font-bold">{expertRating}</div>
              <Icon name="star" size={14} className="mx-auto" />
            </div>
          </div>

          {/* Expert Info */}
          <div className="flex-1">
            <p className="text-sm text-gray-600">Extensively tested and reviewed</p>
            <p className="text-sm text-gray-600">by <span className="font-semibold text-gray-800">Expert Team</span></p>
          </div>

          {/* Expert Avatar Placeholder */}
          <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
            <Icon name="users" size={20} className="text-gray-400" />
          </div>
        </div>
      </div>

      {/* Expert Verdict */}
      <div className="px-4 mb-6">
        <div className="flex items-center gap-2 text-xs text-[#e53935] font-semibold mb-2">
          <span>EXPERT VERDICT</span>
          <div className="flex-1 h-px bg-gradient-to-r from-[#e53935]/30 to-transparent" />
          <span className="text-lg">"</span>
        </div>
        <p className="text-sm text-gray-700 leading-relaxed">
          {data.verdict.summary.split('.').slice(0, 2).join('.')}...
          <button className="text-blue-600 font-medium ml-1">Read More</button>
        </p>
      </div>

      {/* Category Ratings */}
      <div className="px-4 mb-6 flex gap-2 overflow-x-auto hide-scrollbar">
        {categoryRatings.map((cat, index) => (
          <div key={index} className="flex-shrink-0 p-3 bg-gray-50 rounded-xl border border-gray-200 min-w-[100px]">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-base font-bold text-gray-900">{cat.rating}</span>
              <Icon name="star" size={12} className="text-[#e53935]" />
            </div>
            <div className="text-[10px] text-gray-500 leading-tight">{cat.label}</div>
          </div>
        ))}
      </div>

      {/* Road Test Photos */}
      <div className="px-4 mb-6">
        <h3 className="text-base font-semibold text-gray-900 mb-3">Road Test Photos</h3>
        <div className="relative h-48 rounded-xl bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center overflow-hidden">
          <span className="text-gray-400 text-sm">Road Test Photo</span>
          <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 shadow-sm">
            <Icon name="chevronRight" size={16} />
          </button>
        </div>
      </div>

      {/* Good Things */}
      <div className="px-4 mb-4">
        <div className="p-4 bg-green-50 rounded-xl border border-green-200">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="thumbsUp" size={18} className="text-green-600" />
            <span className="text-sm font-semibold text-gray-800">Good Things</span>
          </div>
          <ul className="space-y-2">
            {pros.slice(0, showFullPros ? pros.length : 2).map((pro, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">{pro.title}</span>
              </li>
            ))}
          </ul>
          {pros.length > 2 && (
            <button 
              onClick={() => setShowFullPros(!showFullPros)}
              className="mt-2 text-xs text-green-600 font-medium"
            >
              {showFullPros ? 'Show Less' : '... Read More'}
            </button>
          )}
        </div>
      </div>

      {/* Could Be Better */}
      <div className="px-4 mb-6">
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
          <div className="flex items-center gap-2 mb-3">
            <Icon name="thumbsDown" size={18} className="text-amber-600" />
            <span className="text-sm font-semibold text-gray-800">Could Be Better</span>
          </div>
          <ul className="space-y-2">
            {cons.slice(0, showFullCons ? cons.length : 2).map((con, index) => (
              <li key={index} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 flex-shrink-0" />
                <span className="text-sm text-gray-700">{con.title}</span>
              </li>
            ))}
          </ul>
          {cons.length > 2 && (
            <button 
              onClick={() => setShowFullCons(!showFullCons)}
              className="mt-2 text-xs text-amber-600 font-medium"
            >
              {showFullCons ? 'Show Less' : '... Read More'}
            </button>
          )}
        </div>
      </div>

      {/* Read Complete Expert Review */}
      <div className="px-4 mb-6 text-center">
        <button className="text-sm text-blue-600 font-medium hover:underline">
          Read Complete Expert Review
        </button>
      </div>

      {/* Divider */}
      <div className="h-2 bg-gray-100" />

      {/* Surprising Insights - Integrated */}
      <SurprisingInsights data={data} />
    </section>
  )
}

