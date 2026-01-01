import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface VisualCompareProps {
  data: BikeData
}

export default function VisualCompare({ data }: VisualCompareProps) {
  const { rivals, basic } = data

  // Create comparison bikes array with current bike first
  const allBikes = [
    {
      id: basic.id,
      name: basic.name,
      price: `₹${(basic.price.exShowroom.max / 100000).toFixed(2)}L`,
      isCurrentBike: true,
      badge: 'Best for Touring',
      badgeType: 'positive' as const,
      rating: 4.5,
      reviewCount: 141,
      mileage: data.specs.performance.mileageArai,
      engine: data.specs.engine.displacement
    },
    ...rivals.map(rival => ({
      id: rival.id,
      name: rival.name,
      price: rival.price,
      isCurrentBike: false,
      badge: rival.badge,
      badgeType: rival.badgeType,
      rating: 4.4,
      reviewCount: 734,
      mileage: rival.id === 'vstrom-sx' ? '45+ kmpl' : rival.id === 'gixxer-250' ? '40 kmpl' : '35 kmpl',
      engine: rival.id === 'ktm-250-duke' ? '250 cc' : '349 cc'
    }))
  ]

  return (
    <div className="px-4">
      {/* Horizontal Scroll Carousel */}
      <div className="overflow-x-auto hide-scrollbar -mx-4 px-4">
        <div className="flex gap-3" style={{ width: 'max-content' }}>
          {allBikes.map((bike) => (
            <div
              key={bike.id}
              className={`w-[160px] flex-shrink-0 rounded-xl border overflow-hidden ${
                bike.isCurrentBike
                  ? 'border-[#e53935] bg-red-50/30'
                  : 'border-gray-200 bg-white'
              }`}
            >
              {/* Currently Viewing Badge */}
              {bike.isCurrentBike && (
                <div className="bg-gray-800 text-white text-[10px] font-medium text-center py-1">
                  Currently Viewing
                </div>
              )}

              {/* Bike Image Placeholder */}
              <div className="h-24 bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center">
                <Icon name="image" size={32} className="text-gray-300" />
              </div>

              {/* Bike Info */}
              <div className="p-3">
                <h4 className="text-sm font-semibold text-gray-800 mb-1 line-clamp-2">
                  {bike.name}
                </h4>
                <div className="text-base font-bold text-gray-900 mb-1">
                  {bike.price}
                  <span className="text-[10px] text-gray-400 font-normal">*Onwards</span>
                </div>
                {!bike.isCurrentBike && (
                  <button className="text-xs text-green-600 font-medium mb-2">
                    Check Offers
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Comparison Table */}
      <div className="mt-6 bg-white rounded-xl border border-gray-200 overflow-hidden">
        {/* Table Header */}
        <div className="grid grid-cols-4 bg-gray-50 border-b border-gray-200">
          <div className="p-3 text-xs font-semibold text-gray-500">Specs</div>
          {allBikes.slice(0, 3).map((bike) => (
            <div key={bike.id} className="p-3 text-xs font-semibold text-gray-700 text-center">
              {bike.name.split(' ').slice(-1)[0]}
            </div>
          ))}
        </div>

        {/* Rating Row */}
        <div className="grid grid-cols-4 border-b border-gray-100">
          <div className="p-3 text-xs text-gray-500">Rating</div>
          {allBikes.slice(0, 3).map((bike) => (
            <div key={bike.id} className="p-3 text-xs text-center">
              <div className="flex items-center justify-center gap-1">
                <span className="font-medium text-gray-800">{bike.rating}</span>
                <Icon name="star" size={10} className="text-amber-500" />
              </div>
              <div className="text-[10px] text-gray-400">
                User Review ({bike.reviewCount})
              </div>
            </div>
          ))}
        </div>

        {/* Mileage Row */}
        <div className="grid grid-cols-4 border-b border-gray-100">
          <div className="p-3 text-xs text-gray-500">Mileage</div>
          {allBikes.slice(0, 3).map((bike) => (
            <div key={bike.id} className="p-3 text-xs font-medium text-gray-800 text-center">
              {bike.mileage}
            </div>
          ))}
        </div>

        {/* Engine Row */}
        <div className="grid grid-cols-4">
          <div className="p-3 text-xs text-gray-500">Engine</div>
          {allBikes.slice(0, 3).map((bike) => (
            <div key={bike.id} className="p-3 text-xs font-medium text-gray-800 text-center">
              {bike.engine}
            </div>
          ))}
        </div>
      </div>

      {/* View Full Comparison Link */}
      <div className="mt-4 text-center">
        <button className="text-sm text-blue-600 font-medium hover:underline">
          View Full Comparison →
        </button>
      </div>
    </div>
  )
}

