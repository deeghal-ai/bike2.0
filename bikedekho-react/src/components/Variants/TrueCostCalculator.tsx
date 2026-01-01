import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface TrueCostCalculatorProps {
  data: BikeData
}

export default function TrueCostCalculator({ data }: TrueCostCalculatorProps) {
  const { basic, costDefaults } = data
  const [monthlyKm, setMonthlyKm] = useState(costDefaults.monthlyKm)
  const [isExpanded, setIsExpanded] = useState(false)

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

  const fuelCost = Math.round((monthlyKm / costDefaults.avgMileage) * costDefaults.fuelPrice)

  const monthlyBurn = [
    { 
      label: `EMI (${costDefaults.emiTenure} mo, ${formatPrice(costDefaults.downPayment)} down)`, 
      value: costDefaults.emiAmount,
      icon: 'calendar'
    },
    { 
      label: `Fuel (${monthlyKm}km @ ${costDefaults.avgMileage}kmpl)`, 
      value: fuelCost,
      icon: 'fuel',
      adjustable: true
    },
    { 
      label: 'Service (avg/month)', 
      value: costDefaults.serviceCostMonthly,
      icon: 'tool'
    },
    { 
      label: 'Insurance (monthly)', 
      value: costDefaults.insuranceMonthly,
      icon: 'shield'
    }
  ]

  const total = monthlyBurn.reduce((acc, item) => acc + item.value, 0)

  return (
    <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="p-4 bg-gradient-to-r from-[#e53935] to-[#c62828]">
        <div className="flex items-center gap-2 text-white">
          <span className="text-2xl">💰</span>
          <div>
            <h3 className="text-lg font-bold">True Ownership Cost</h3>
            <p className="text-xs opacity-90">What {basic.name} really costs per month</p>
          </div>
        </div>
      </div>

      {/* On-Road Price */}
      <div className="p-4 border-b border-gray-100">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-gray-500">Real On-Road Price</div>
            <div className="text-2xl font-bold text-gray-900 font-['Outfit']">
              {formatPrice(costDefaults.onRoadPrice)}
            </div>
          </div>
          <div className="text-right">
            <div className="text-xs text-gray-500">{basic.price.exShowroom.city}</div>
            <button className="text-xs text-blue-600 font-medium flex items-center gap-0.5">
              Change
              <Icon name="chevronDown" size={12} />
            </button>
          </div>
        </div>
      </div>

      {/* Monthly Breakdown */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-semibold text-gray-800">Monthly Burn Breakdown</span>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-xs text-gray-500 flex items-center gap-1"
          >
            {isExpanded ? 'Hide' : 'Show'} details
            <Icon name={isExpanded ? 'chevronUp' : 'chevronDown'} size={14} />
          </button>
        </div>

        {isExpanded && (
          <div className="space-y-3 mb-4">
            {monthlyBurn.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon name={item.icon} size={16} className="text-gray-400" />
                  <span className="text-xs text-gray-600">{item.label}</span>
                </div>
                <span className="text-sm text-gray-800 font-medium">{formatPrice(item.value)}</span>
              </div>
            ))}
          </div>
        )}

        {/* Km Slider */}
        {isExpanded && (
          <div className="mb-4 p-3 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-600">Monthly km driven</span>
              <span className="text-sm font-semibold text-gray-800">{monthlyKm} km</span>
            </div>
            <input
              type="range"
              min="500"
              max="3000"
              step="100"
              value={monthlyKm}
              onChange={(e) => setMonthlyKm(Number(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#e53935]"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>500 km</span>
              <span>3000 km</span>
            </div>
          </div>
        )}

        {/* Total */}
        <div className="flex items-center justify-between p-3 bg-green-50 rounded-xl border border-green-200">
          <span className="text-sm font-semibold text-gray-800">Total Monthly Cost</span>
          <span className="text-xl font-bold text-green-600 font-['Outfit']">{formatPrice(total)}</span>
        </div>
      </div>

      {/* Rival Comparison */}
      <div className="px-4 pb-4">
        <div className="flex items-center gap-2 p-3 rounded-xl bg-blue-50 border border-blue-200">
          <Icon name="chart" size={18} className="text-blue-600 flex-shrink-0" />
          <span className="text-xs text-blue-700">
            <strong>₹{costDefaults.vsRival.savingsPerMonth}/mo cheaper</strong> than {costDefaults.vsRival.name} • {costDefaults.vsRival.reason}
          </span>
        </div>
      </div>

      {/* Hidden Costs */}
      {costDefaults.hiddenCosts.length > 0 && (
        <div className="px-4 pb-4">
          <div className="text-xs font-semibold text-gray-700 mb-2">Hidden Costs to Know</div>
          <div className="space-y-2">
            {costDefaults.hiddenCosts.map((cost, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <span className="text-gray-500">{cost.item}</span>
                <span className="text-gray-700 font-medium">{cost.cost}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

