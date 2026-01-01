import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface ColorsProps {
  data: BikeData
}

export default function Colors({ data }: ColorsProps) {
  const { basic } = data
  const [selectedColor, setSelectedColor] = useState(0)

  // Extended colors for demo
  const colors = [
    { name: 'Playa Black', hex: '#1a1a1a' },
    { name: 'Lake Blue', hex: '#5B8FAD' },
    { name: 'Petrol Green', hex: '#5A6E5C' },
    { name: 'Smoke Grey', hex: '#6B7280' },
    { name: 'Royal Blue', hex: '#2563EB' },
    { name: 'Peach', hex: '#FDB88B' },
    { name: 'Gold', hex: '#EAB308' },
    ...basic.colors
  ].slice(0, 7)

  return (
    <div className="py-6 px-4">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] mb-4">
        {basic.name} Colours
      </h2>

      {/* Color Display */}
      <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-50 rounded-2xl mb-4 flex items-center justify-center overflow-hidden">
        {/* Bike Placeholder */}
        <div className="text-center">
          <div 
            className="w-48 h-32 mx-auto mb-2 rounded-lg flex items-center justify-center transition-all duration-300"
            style={{ 
              backgroundColor: colors[selectedColor]?.hex || '#ddd',
              opacity: 0.3 
            }}
          >
            <Icon name="image" size={40} className="text-gray-400" />
          </div>
          <span className="text-gray-500 text-sm">{basic.name}</span>
        </div>

        {/* Navigation Arrow */}
        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 shadow-sm hover:bg-white transition-colors">
          <Icon name="chevronRight" size={16} />
        </button>
      </div>

      {/* Color Name */}
      <div className="text-center mb-4">
        <span className="text-lg font-semibold text-gray-800">
          {colors[selectedColor]?.name || 'Select a color'}
        </span>
      </div>

      {/* Color Swatches */}
      <div className="flex justify-center gap-3 mb-4">
        {colors.map((color, index) => (
          <button
            key={index}
            onClick={() => setSelectedColor(index)}
            className={`w-9 h-9 rounded-full border-2 transition-all ${
              selectedColor === index
                ? 'border-gray-800 ring-2 ring-gray-800 ring-offset-2'
                : 'border-gray-200 hover:border-gray-400'
            }`}
            style={{ backgroundColor: color.hex }}
            title={color.name}
          >
            {selectedColor === index && (
              <Icon name="check" size={16} className="mx-auto text-white drop-shadow-md" />
            )}
          </button>
        ))}
      </div>

      {/* View All Colors Link */}
      <div className="text-center">
        <button className="text-sm text-blue-600 font-medium hover:underline">
          View All Colours
        </button>
      </div>
    </div>
  )
}

