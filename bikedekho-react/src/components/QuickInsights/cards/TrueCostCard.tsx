import { useState } from 'react'
import type { BikeData } from '../../../types/bike'
import { Card, CardHeader, CardLabel } from '../../ui/Card'
import { Icon } from '../../ui/Icon'

interface TrueCostCardProps {
  data: BikeData
}

export default function TrueCostCard({ data }: TrueCostCardProps) {
  const { basic, costDefaults, mileageMystery } = data
  const [monthlyKm, setMonthlyKm] = useState(costDefaults.monthlyKm)
  const [ridingStyle, setRidingStyle] = useState<'city' | 'mixed' | 'highway'>('mixed')

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

  const getMileageForStyle = (style: 'city' | 'mixed' | 'highway') => {
    switch (style) {
      case 'city': return mileageMystery.realRange.min
      case 'highway': return mileageMystery.realRange.max - 2
      case 'mixed': return Math.round((mileageMystery.realRange.min + mileageMystery.realRange.max) / 2)
    }
  }

  const currentMileage = getMileageForStyle(ridingStyle)
  const fuelCost = Math.round((monthlyKm / currentMileage) * costDefaults.fuelPrice)

  const monthlyBurn = [
    { label: 'EMI', value: costDefaults.emiAmount, icon: '💳' },
    { label: 'Fuel', value: fuelCost, icon: '⛽', isDynamic: true },
    { label: 'Service', value: costDefaults.serviceCostMonthly, icon: '🔧' },
    { label: 'Insurance', value: costDefaults.insuranceMonthly, icon: '📋' }
  ]

  const total = monthlyBurn.reduce((acc, item) => acc + item.value, 0)

  const ridingStyles = [
    { id: 'city' as const, label: 'City', mileage: mileageMystery.realRange.min },
    { id: 'mixed' as const, label: 'Mix', mileage: Math.round((mileageMystery.realRange.min + mileageMystery.realRange.max) / 2) },
    { id: 'highway' as const, label: 'Hwy', mileage: mileageMystery.realRange.max - 2 }
  ]

  return (
    <Card variant="highlight" className="h-full">
      <CardHeader>
        <CardLabel>True Cost</CardLabel>
        <button className="flex items-center gap-1 text-[10px] text-gray-500 hover:text-gray-700">
          {basic.price.exShowroom.city}
          <Icon name="chevronDown" size={12} />
        </button>
      </CardHeader>

      <div className="text-center mb-2">
        <span className="text-2xl">💰</span>
        <h3 className="text-base font-bold text-gray-900 mt-1">What It Really Costs</h3>
      </div>

      {/* On-Road Price */}
      <div className="bg-green-50 rounded-lg p-2 mb-3 text-center border border-green-200">
        <div className="text-[10px] text-green-700">Real On-Road Price</div>
        <div className="text-xl font-bold text-gray-900 font-['Outfit']">
          {formatPrice(costDefaults.onRoadPrice)}
        </div>
      </div>

      {/* Usage Selector */}
      <div className="p-2 bg-blue-50 rounded-lg border border-blue-200 mb-3">
        <div className="text-[10px] font-medium text-blue-700 mb-1.5">Your Usage Pattern</div>
        
        {/* Riding Style */}
        <div className="flex gap-1 mb-2">
          {ridingStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setRidingStyle(style.id)}
              className={`flex-1 py-1 px-1.5 rounded text-center transition-all ${
                ridingStyle === style.id
                  ? 'bg-blue-500 text-white'
                  : 'bg-white border border-gray-200 text-gray-600'
              }`}
            >
              <div className={`text-[9px] font-medium`}>{style.label}</div>
              <div className={`text-[8px] ${ridingStyle === style.id ? 'text-blue-100' : 'text-gray-400'}`}>
                {style.mileage}kmpl
              </div>
            </button>
          ))}
        </div>

        {/* Monthly KM */}
        <div className="flex items-center gap-2">
          <span className="text-[9px] text-gray-600">km/mo:</span>
          <input
            type="range"
            min="300"
            max="2500"
            step="100"
            value={monthlyKm}
            onChange={(e) => setMonthlyKm(parseInt(e.target.value))}
            className="flex-1 h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <span className="text-xs font-bold text-blue-600 w-10 text-right">{monthlyKm}</span>
        </div>
      </div>

      {/* Monthly Burn - Compact Grid */}
      <div className="mb-3">
        <div className="text-[10px] font-semibold text-gray-700 mb-1.5">Monthly Burn</div>
        <div className="grid grid-cols-2 gap-1.5">
          {monthlyBurn.map((item, index) => (
            <div 
              key={index} 
              className={`flex items-center justify-between p-1.5 rounded border ${
                item.isDynamic ? 'bg-blue-50 border-blue-200' : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center gap-1">
                <span className="text-xs">{item.icon}</span>
                <span className="text-[9px] text-gray-600">{item.label}</span>
              </div>
              <span className={`text-[10px] font-medium ${item.isDynamic ? 'text-blue-700' : 'text-gray-800'}`}>
                {formatPrice(item.value)}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Total */}
      <div className="flex justify-between items-center p-2 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg border border-green-200 mb-2">
        <span className="text-xs font-semibold text-gray-800">Total Monthly</span>
        <span className="text-lg font-bold text-green-600">{formatPrice(total)}</span>
      </div>

      {/* Rival Comparison */}
      <div className="flex items-center gap-1.5 p-2 rounded-lg bg-amber-50 border border-amber-200">
        <Icon name="chart" size={14} className="text-amber-600" />
        <span className="text-[10px] text-amber-700">
          ₹{costDefaults.vsRival.savingsPerMonth}/mo cheaper than {costDefaults.vsRival.name}
        </span>
      </div>
    </Card>
  )
}
