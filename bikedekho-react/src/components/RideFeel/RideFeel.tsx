import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface RideFeelProps {
  data: BikeData
}

export default function RideFeel({ data }: RideFeelProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [viewMode, setViewMode] = useState<'solo' | 'pillion'>('solo')
  const { rideFeel } = data

  const currentItems = viewMode === 'solo' ? rideFeel.soloRider : rideFeel.withPillion

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
      <div className="py-6 px-4">
      {/* Collapsed State */}
      {!isExpanded ? (
        <div className="relative">
          <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-1">
              <span className="text-2xl">🏍️</span>
              <h3 className="text-base font-bold text-gray-900">How Does It Feel to Ride?</h3>
            </div>
            <p className="text-xs text-gray-500 ml-9">Solo comfort vs. 2-up touring</p>
          </div>
          
          {/* Floating Expand Button */}
          <button
            onClick={() => setIsExpanded(true)}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-all duration-200 shadow-md hover:shadow-lg"
            aria-label="Expand ride feel section"
          >
            <Icon name="chevronDown" size={18} />
          </button>
        </div>
      ) : (
        /* Expanded State */
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-gradient-to-br from-blue-50 to-white">
            <div className="flex items-center gap-2">
              <span className="text-2xl">🏍️</span>
              <h3 className="text-base font-bold text-gray-900">How Does It Feel to Ride?</h3>
            </div>
            <button
              onClick={() => setIsExpanded(false)}
              className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 text-gray-600 transition-colors"
              aria-label="Collapse ride feel section"
            >
              <Icon name="x" size={18} />
            </button>
          </div>

          {/* Tab Toggles */}
          <div className="flex flex-col sm:flex-row gap-2 p-4 bg-gray-50 border-b border-gray-200">
            <button
              onClick={() => setViewMode('solo')}
              className={`flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                viewMode === 'solo'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2">🏍️</span>
              Solo Rider
            </button>
            <button
              onClick={() => setViewMode('pillion')}
              className={`flex-1 px-4 py-2.5 rounded-lg font-medium text-sm transition-all duration-200 ${
                viewMode === 'pillion'
                  ? 'bg-blue-500 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              <span className="mr-2">👥</span>
              With Pillion
            </button>
          </div>

          {/* Content Area */}
          <div className="p-4 space-y-3 animate-in fade-in duration-300">
            {currentItems.map((item, index) => {
              const bgColor =
                item.sentiment === 'positive'
                  ? 'bg-green-50 border-green-200'
                  : item.sentiment === 'warning'
                  ? 'bg-yellow-50 border-yellow-200'
                  : 'bg-gray-50 border-gray-200'

              const iconColor =
                item.sentiment === 'positive'
                  ? 'text-green-600'
                  : item.sentiment === 'warning'
                  ? 'text-yellow-600'
                  : 'text-gray-600'

              return (
                <div
                  key={`${viewMode}-${index}`}
                  className={`${bgColor} border rounded-lg p-3 transition-all duration-200 hover:shadow-sm`}
                  style={{ 
                    animation: `fadeInUp 0.3s ease-out ${index * 0.05}s both` 
                  }}
                >
                  <div className="flex items-start gap-3">
                    <span className={`${iconColor} text-base flex-shrink-0 mt-0.5`}>
                      {item.icon}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-semibold text-gray-800 mb-1">
                        {item.title}
                      </div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        {item.description}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      )}
      </div>
    </>
  )
}

