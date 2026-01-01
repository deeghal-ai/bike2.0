import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { ProgressBar } from '../ui/ProgressBar'
import { Icon } from '../ui/Icon'

interface MileageMysteryProps {
  data: BikeData
}

export default function MileageMystery({ data }: MileageMysteryProps) {
  const { mileageMystery, basic, specs, costDefaults } = data
  
  // Interactive calculator state
  const [monthlyKm, setMonthlyKm] = useState(costDefaults.monthlyKm)
  const [ridingStyle, setRidingStyle] = useState<'city' | 'mixed' | 'highway'>('mixed')
  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false)
  
  // Get fuel tank capacity as number
  const fuelTank = parseInt(specs.dimensions.fuelCapacity) || 13
  const fuelPrice = costDefaults.fuelPrice

  // Calculate mileage based on riding style
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
  
  // Range calculations
  const cityRange = Math.round(fuelTank * mileageMystery.realRange.min)
  const highwayRange = Math.round(fuelTank * (mileageMystery.realRange.max - 2))

  // Rival comparison
  const rivalMileage = currentMileage - 3 // Assume rival is less efficient
  const rivalMonthlyCost = Math.round((monthlyKm / rivalMileage) * fuelPrice)
  const monthlySavings = rivalMonthlyCost - monthlyFuelCost

  const getBarColor = (color: string) => {
    switch (color) {
      case 'green': return 'positive'
      case 'red': return 'negative'
      case 'yellow': return 'warning'
      case 'orange': return 'warning'
      default: return 'default'
    }
  }

  const getColorClass = (color: string) => {
    switch (color) {
      case 'green': return 'text-green-600 bg-green-50 border-green-200'
      case 'red': return 'text-red-600 bg-red-50 border-red-200'
      case 'yellow': return 'text-amber-600 bg-amber-50 border-amber-200'
      case 'orange': return 'text-orange-600 bg-orange-50 border-orange-200'
      default: return 'text-gray-600 bg-gray-50 border-gray-200'
    }
  }

  const ridingStyles = [
    { id: 'city' as const, label: 'City', icon: '🏙️' },
    { id: 'mixed' as const, label: 'Mixed', icon: '🔄' },
    { id: 'highway' as const, label: 'Highway', icon: '🛣️' }
  ]

  return (
    <div className="space-y-4">
      {/* Main Infographic Card */}
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-200 overflow-hidden">
        {/* Header */}
        <div className="p-4 bg-gradient-to-r from-amber-500 to-orange-500">
          <div className="flex items-center gap-3">
            <span className="text-3xl">⛽</span>
            <div className="text-white">
              <h3 className="text-lg font-bold">Real World Mileage</h3>
              <p className="text-xs opacity-90">Based on owner-reported data</p>
            </div>
          </div>
        </div>

        <div className="p-4">
          {/* Tank & Range Summary */}
          <div className="grid grid-cols-3 gap-2 mb-4">
            <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 text-center">
              <div className="text-2xl mb-1">🪫</div>
              <div className="text-xs text-blue-600 mb-0.5">Tank Size</div>
              <div className="text-lg font-bold text-gray-800">{fuelTank}L</div>
            </div>
            <div className="p-3 bg-green-50 rounded-xl border border-green-200 text-center">
              <div className="text-2xl mb-1">🛣️</div>
              <div className="text-xs text-green-600 mb-0.5">Highway Range</div>
              <div className="text-lg font-bold text-gray-800">{highwayRange}km</div>
            </div>
            <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 text-center">
              <div className="text-2xl mb-1">🏙️</div>
              <div className="text-xs text-amber-600 mb-0.5">City Range</div>
              <div className="text-lg font-bold text-gray-800">{cityRange}km</div>
            </div>
          </div>

          {/* Claimed vs Real */}
          <div className="flex gap-3 mb-4">
            <div className="flex-1 p-3 bg-gray-50 rounded-xl border border-gray-200 text-center">
              <div className="text-xs text-gray-500 mb-1">{basic.brand} Claims</div>
              <div className="text-xl font-bold text-gray-800">{mileageMystery.claimed} kmpl</div>
            </div>
            <div className="flex-1 p-3 bg-amber-50 rounded-xl border border-amber-200 text-center">
              <div className="text-xs text-amber-600 mb-1">Reality Spread</div>
              <div className="text-xl font-bold text-amber-700">
                {mileageMystery.realRange.min}-{mileageMystery.realRange.max} kmpl
              </div>
            </div>
          </div>

          {/* Spread Alert */}
          <div className="mb-4 p-2.5 bg-amber-50 rounded-lg border border-amber-200 flex items-center gap-2">
            <Icon name="warning" size={16} className="text-amber-600 flex-shrink-0" />
            <span className="text-xs text-amber-700 font-medium">
              {mileageMystery.spread} kmpl variation depending on riding style!
            </span>
          </div>

          {/* Scenario Breakdown */}
          <div className="space-y-3 mb-4">
            {mileageMystery.scenarios.map((scenario, index) => (
              <div key={index} className={`p-3 rounded-xl border ${getColorClass(scenario.color)}`}>
                <div className="flex justify-between items-center mb-2">
                  <div>
                    <span className="text-sm font-medium">{scenario.style}</span>
                    <p className="text-[10px] opacity-75">{scenario.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold">{scenario.range}</span>
                    <div className="text-[10px] opacity-75">
                      ~{Math.round(fuelTank * parseInt(scenario.range))}km range
                    </div>
                  </div>
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

          {/* Insight */}
          <div className="flex items-start gap-2 p-3 rounded-xl bg-blue-50 border border-blue-200">
            <span className="text-lg">💡</span>
            <div>
              <span className="text-sm font-medium text-blue-800">Key Insight:</span>
              <span className="text-sm text-blue-700 ml-1">{mileageMystery.insight}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Cost Calculator - Collapsible */}
      <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl border border-emerald-200 overflow-hidden">
        {/* Calculator Header - Clickable */}
        <button 
          onClick={() => setIsCalculatorOpen(!isCalculatorOpen)}
          className="w-full p-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-left"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🧮</span>
              <div className="text-white">
                <h3 className="text-lg font-bold">Fuel Cost Calculator</h3>
                <p className="text-xs opacity-90">Calculate your actual running cost</p>
              </div>
            </div>
            <Icon 
              name={isCalculatorOpen ? 'chevronUp' : 'chevronDown'} 
              size={24} 
              className="text-white/80" 
            />
          </div>
        </button>

        {/* Collapsible Content */}
        {isCalculatorOpen && (
        <div className="p-4">
          {/* Riding Style Selector */}
          <div className="mb-4">
            <label className="text-xs font-medium text-gray-700 mb-2 block">Your Riding Style</label>
            <div className="flex gap-2">
              {ridingStyles.map((style) => (
                <button
                  key={style.id}
                  onClick={() => setRidingStyle(style.id)}
                  className={`flex-1 p-2.5 rounded-xl border-2 transition-all ${
                    ridingStyle === style.id
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 bg-white hover:border-gray-300'
                  }`}
                >
                  <div className="text-xl mb-1">{style.icon}</div>
                  <div className={`text-xs font-medium ${
                    ridingStyle === style.id ? 'text-emerald-700' : 'text-gray-600'
                  }`}>
                    {style.label}
                  </div>
                  <div className={`text-[10px] ${
                    ridingStyle === style.id ? 'text-emerald-600' : 'text-gray-400'
                  }`}>
                    ~{getMileageForStyle(style.id)} kmpl
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Monthly KM Slider */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <label className="text-xs font-medium text-gray-700">Monthly Distance</label>
              <span className="text-sm font-bold text-emerald-600">{monthlyKm} km/month</span>
            </div>
            <input
              type="range"
              min="200"
              max="3000"
              step="100"
              value={monthlyKm}
              onChange={(e) => setMonthlyKm(parseInt(e.target.value))}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-500"
            />
            <div className="flex justify-between text-[10px] text-gray-400 mt-1">
              <span>200 km</span>
              <span>3000 km</span>
            </div>
          </div>

          {/* Cost Results */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            <div className="p-3 bg-white rounded-xl border border-gray-200 text-center">
              <div className="text-xs text-gray-500 mb-1">Monthly Fuel Cost</div>
              <div className="text-2xl font-bold text-gray-800">₹{monthlyFuelCost.toLocaleString()}</div>
              <div className="text-[10px] text-gray-400">@ ₹{fuelPrice}/L</div>
            </div>
            <div className="p-3 bg-white rounded-xl border border-gray-200 text-center">
              <div className="text-xs text-gray-500 mb-1">Yearly Fuel Cost</div>
              <div className="text-2xl font-bold text-gray-800">₹{yearlyFuelCost.toLocaleString()}</div>
              <div className="text-[10px] text-gray-400">12 months</div>
            </div>
          </div>

          {/* Fuel Needed */}
          <div className="p-3 bg-amber-50 rounded-xl border border-amber-200 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xl">⛽</span>
                <div>
                  <div className="text-sm font-medium text-gray-800">Monthly Fuel Needed</div>
                  <div className="text-xs text-gray-500">Based on {currentMileage} kmpl mileage</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-xl font-bold text-amber-700">
                  {Math.round(monthlyKm / currentMileage)}L
                </div>
                <div className="text-[10px] text-gray-500">
                  ~{Math.ceil(monthlyKm / currentMileage / fuelTank)} tank fills
                </div>
              </div>
            </div>
          </div>

          {/* Rival Comparison */}
          {monthlySavings > 0 && (
            <div className="p-3 bg-green-50 rounded-xl border border-green-200">
              <div className="flex items-center gap-2">
                <span className="text-xl">💰</span>
                <div>
                  <div className="text-sm font-medium text-green-800">
                    You save ₹{monthlySavings}/month vs {costDefaults.vsRival.name}
                  </div>
                  <div className="text-xs text-green-600">
                    That's ₹{monthlySavings * 12}/year in fuel savings alone!
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
        )}
      </div>
    </div>
  )
}
