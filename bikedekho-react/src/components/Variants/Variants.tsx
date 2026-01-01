import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'
import TrueCostCalculator from './TrueCostCalculator'

interface VariantsProps {
  data: BikeData
}

export default function Variants({ data }: VariantsProps) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const { basic } = data

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

  // Extended variants data - in real app this would come from data
  const variants = [
    {
      name: `${basic.name} Analogue`,
      price: basic.price.exShowroom.min,
      savings: null,
      isBase: true,
      features: ['Analogue and Digital'],
      colors: ['#808080']
    },
    {
      name: `${basic.name} Dash`,
      price: basic.price.exShowroom.min + 10000,
      savings: 5363,
      isBase: false,
      features: ['Digital'],
      colors: ['#FFD700', '#1a1a1a', '#808080', '#4169E1']
    },
    {
      name: `${basic.name} Flash`,
      price: basic.price.exShowroom.max,
      savings: null,
      isTopModel: true,
      features: ['Digital'],
      colors: ['#4169E1', '#FFD700']
    }
  ]

  return (
    <section className="py-6 bg-white">
      {/* Section Header */}
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit']">
          {basic.name} Price
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          The price of {basic.name} in India starts at Rs. {formatPrice(basic.price.exShowroom.min)} and goes upto Rs. {formatPrice(basic.price.exShowroom.max)}.
        </p>
      </div>

      {/* Variant Cards */}
      <div className="px-4 space-y-3 mb-6">
        {variants.map((variant, index) => (
          <div
            key={index}
            className={`p-4 rounded-xl border transition-all ${
              selectedVariant === index
                ? 'border-[#e53935] bg-red-50/30'
                : 'border-gray-200 bg-white'
            }`}
          >
            {/* Variant Header */}
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="text-base font-semibold text-gray-800 underline decoration-1 cursor-pointer hover:text-[#e53935]">
                  {variant.name}
                </h3>
                {variant.isTopModel && (
                  <span className="text-xs text-gray-500">Top Model</span>
                )}
              </div>
              <div className="text-right">
                <div className="text-lg font-bold text-gray-900 font-['Outfit']">
                  {formatPrice(variant.price)}
                </div>
                {variant.savings && (
                  <div className="text-xs text-green-600 font-medium">
                    ₹{variant.savings.toLocaleString()} Saving vs Next Variant
                  </div>
                )}
              </div>
            </div>

            {/* Key Features */}
            <div className="mb-3">
              <div className="text-xs font-semibold text-gray-700 mb-1.5">Key Features</div>
              {variant.features.map((feature, fIndex) => (
                <div key={fIndex} className="flex items-center gap-1.5 text-xs text-gray-600">
                  <Icon name="check" size={14} className="text-green-500" />
                  {feature}
                </div>
              ))}
            </div>

            {/* Colors */}
            <div className="flex items-center gap-2 mb-3">
              {variant.colors.map((color, cIndex) => (
                <div
                  key={cIndex}
                  className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-3 border-t border-gray-100">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={selectedVariant === index}
                  onChange={() => setSelectedVariant(index)}
                  className="w-4 h-4 rounded border-gray-300 text-[#e53935] focus:ring-[#e53935]"
                />
                <span className="text-xs text-gray-600">Compare</span>
              </label>
              <button className="text-sm text-blue-600 font-medium hover:underline">
                View Offers
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div className="h-2 bg-gray-100" />

      {/* True Cost Calculator - Integrated from QuickInsights */}
      <div className="px-4 py-6">
        <TrueCostCalculator data={data} />
      </div>
    </section>
  )
}

