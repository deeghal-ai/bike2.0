import { useState } from 'react'
import type { BikeData } from '../../../types/bike'
import { Card, CardHeader, CardLabel } from '../../ui/Card'
import { Badge } from '../../ui/Badge'
import { ProgressBar } from '../../ui/ProgressBar'

interface MileageMysteryCardProps {
  data: BikeData
}

export default function MileageMysteryCard({ data }: MileageMysteryCardProps) {
  const { mileageMystery, specs, costDefaults } = data
  const [ridingStyle, setRidingStyle] = useState<'city' | 'mixed' | 'highway'>('mixed')
  const [monthlyKm, setMonthlyKm] = useState(1000)

  const fuelTank = parseInt(specs.dimensions.fuelCapacity) || 13
  const fuelPrice = costDefaults.fuelPrice

  const getMileageForStyle = (style: 'city' | 'mixed' | 'highway') => {
    switch (style) {
      case 'city': return mileageMystery.realRange.min
      case 'highway': return mileageMystery.realRange.max - 2
      case 'mixed': return Math.round((mileageMystery.realRange.min + mileageMystery.realRange.max) / 2)
    }
  }

  const currentMileage = getMileageForStyle(ridingStyle)
  const monthlyFuelCost = Math.round((monthlyKm / currentMileage) * fuelPrice)
  const yearlyFuelCost = monthlyFuelCost * 12

  const getBarColor = (color: string) => {
    switch (color) {
      case 'green': return 'positive'
      case 'red': return 'negative'
      case 'yellow': return 'warning'
      case 'orange': return 'warning'
      default: return 'default'
    }
  }

  const ridingStyles = [
    { id: 'city' as const, label: 'City', icon: '🏙️', mileage: mileageMystery.realRange.min },
    { id: 'mixed' as const, label: 'Mixed', icon: '🔄', mileage: Math.round((mileageMystery.realRange.min + mileageMystery.realRange.max) / 2) },
    { id: 'highway' as const, label: 'Highway', icon: '🛣️', mileage: mileageMystery.realRange.max - 2 }
  ]

  return (
    <Card variant="highlight" className="h-full">
      <CardHeader>
        <CardLabel>Mileage Reality</CardLabel>
        <Badge variant="muted" size="sm">Owner Data</Badge>
      </CardHeader>

      <div className="text-center mb-2">
        <span className="text-2xl">⛽</span>
        <h3 className="text-base font-bold text-gray-900 mt-1">The Mileage Mystery</h3>
      </div>

      {/* Quick Stats Row */}
      <div className="grid grid-cols-3 gap-1 mb-2">
        <div className="p-1.5 bg-blue-50 rounded-lg border border-blue-200 text-center">
          <div className="text-[9px] text-blue-600">Tank</div>
          <div className="text-xs font-bold text-gray-800">{fuelTank}L</div>
        </div>
        <div className="p-1.5 bg-green-50 rounded-lg border border-green-200 text-center">
          <div className="text-[9px] text-green-600">Hwy Range</div>
          <div className="text-xs font-bold text-gray-800">{Math.round(fuelTank * (mileageMystery.realRange.max - 2))}km</div>
        </div>
        <div className="p-1.5 bg-amber-50 rounded-lg border border-amber-200 text-center">
          <div className="text-[9px] text-amber-600">City Range</div>
          <div className="text-xs font-bold text-gray-800">{Math.round(fuelTank * mileageMystery.realRange.min)}km</div>
        </div>
      </div>

      {/* Claimed vs Real */}
      <div className="flex items-center justify-between mb-2 p-1.5 rounded-lg bg-gray-50 border border-gray-200">
        <div className="text-center flex-1">
          <div className="text-[9px] text-gray-500">Claimed</div>
          <div className="text-xs font-bold text-gray-800">{mileageMystery.claimed} kmpl</div>
        </div>
        <div className="text-gray-300 text-xs">→</div>
        <div className="text-center flex-1">
          <div className="text-[9px] text-amber-600">Reality</div>
          <div className="text-xs font-bold text-amber-700">{mileageMystery.realRange.min}-{mileageMystery.realRange.max}</div>
        </div>
      </div>

      {/* All Mileage Bars */}
      <div className="space-y-1.5 mb-2">
        {mileageMystery.scenarios.map((scenario, index) => (
          <div key={index}>
            <div className="flex justify-between items-center mb-0.5">
              <span className="text-[9px] text-gray-500">{scenario.style}</span>
              <span className={`text-[9px] font-medium ${
                scenario.color === 'green' ? 'text-green-600' :
                scenario.color === 'red' ? 'text-red-600' :
                'text-amber-600'
              }`}>
                {scenario.range}
              </span>
            </div>
            <ProgressBar
              value={scenario.percentage}
              max={100}
              color={getBarColor(scenario.color) as 'positive' | 'negative' | 'warning' | 'default'}
              size="sm"
            />
          </div>
        ))}
      </div>

      {/* Interactive Calculator - Always visible */}
      <div className="p-2 bg-emerald-50 rounded-lg border border-emerald-200 mb-2">
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-sm">🧮</span>
          <span className="text-[10px] font-semibold text-emerald-700">Your Monthly Cost</span>
        </div>

        {/* Riding Style Selector */}
        <div className="flex gap-1 mb-2">
          {ridingStyles.map((style) => (
            <button
              key={style.id}
              onClick={() => setRidingStyle(style.id)}
              className={`flex-1 p-1 rounded border text-center transition-all ${
                ridingStyle === style.id
                  ? 'border-emerald-500 bg-white'
                  : 'border-gray-200 bg-gray-50'
              }`}
            >
              <div className="text-xs">{style.icon}</div>
              <div className={`text-[8px] ${
                ridingStyle === style.id ? 'text-emerald-700 font-medium' : 'text-gray-500'
              }`}>
                {style.mileage}kmpl
              </div>
            </button>
          ))}
        </div>

        {/* Monthly KM Slider */}
        <div className="flex items-center gap-1.5 mb-2">
          <span className="text-[9px] text-gray-600">km:</span>
          <input
            type="range"
            min="300"
            max="2000"
            step="100"
            value={monthlyKm}
            onChange={(e) => setMonthlyKm(parseInt(e.target.value))}
            className="flex-1 h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
          />
          <span className="text-[10px] font-bold text-emerald-600 w-10 text-right">{monthlyKm}</span>
        </div>

        {/* Cost Results */}
        <div className="grid grid-cols-2 gap-1.5">
          <div className="p-1.5 bg-white rounded border border-gray-200 text-center">
            <div className="text-[8px] text-gray-500">Monthly</div>
            <div className="text-sm font-bold text-emerald-600">₹{monthlyFuelCost.toLocaleString()}</div>
          </div>
          <div className="p-1.5 bg-white rounded border border-gray-200 text-center">
            <div className="text-[8px] text-gray-500">Yearly</div>
            <div className="text-sm font-bold text-gray-800">₹{yearlyFuelCost.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Insight */}
      <div className="flex items-start gap-1 p-1.5 rounded-lg bg-amber-50 border border-amber-200">
        <span className="text-xs">💡</span>
        <span className="text-[9px] text-amber-700 leading-tight">{mileageMystery.insight}</span>
      </div>
    </Card>
  )
}
