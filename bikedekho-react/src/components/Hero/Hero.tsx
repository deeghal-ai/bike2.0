import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Button } from '../ui/Button'
import { Icon } from '../ui/Icon'
import PersonaMatchBadge from './PersonaMatchBadge'

interface HeroProps {
  data: BikeData
}

export default function Hero({ data }: HeroProps) {
  const [activeSlide, setActiveSlide] = useState(0)
  const { basic, costDefaults } = data

  const formatPrice = (price: number) => {
    if (price >= 100000) {
      return `₹${(price / 100000).toFixed(2).replace(/\.?0+$/, '')} Lakh`
    }
    return `₹${price.toLocaleString('en-IN')}`
  }

  const slides = [
    { id: 1, type: 'main' },
    { id: 2, type: 'angle' },
    { id: 3, type: 'detail' },
    { id: 4, type: 'action' }
  ]

  return (
    <section className="relative bg-white">
      {/* Image Gallery */}
      <div className="relative h-72 bg-white overflow-hidden">
        {/* Main Image */}
        <div className="absolute inset-0 flex items-center justify-center p-4">
          <img 
            src="/download.jpeg" 
            alt={basic.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Start Engine Button */}
        <div className="absolute top-4 left-4">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 text-white text-xs font-medium shadow-lg hover:bg-black transition-colors">
            <Icon name="play" size={12} />
            START ENGINE
          </button>
        </div>

        {/* Wishlist Button */}
        <button className="absolute top-4 right-20 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 shadow-sm hover:bg-white hover:text-red-500 transition-colors">
          <Icon name="heart" size={18} />
        </button>

        {/* Persona Match Badge - Floating */}
        <PersonaMatchBadge data={data} />

        {/* Navigation Arrow */}
        <button className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-gray-600 shadow-sm hover:bg-white transition-colors">
          <Icon name="chevronRight" size={16} />
        </button>

        {/* Gallery Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === activeSlide ? 'bg-[#e53935] w-5' : 'bg-gray-400/50'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quick View Buttons */}
      <div className="flex gap-2 px-4 py-3 overflow-x-auto hide-scrollbar bg-white border-b border-gray-100">
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700 whitespace-nowrap hover:bg-gray-200 transition-colors">
          <Icon name="image" size={14} />
          Photos
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700 whitespace-nowrap hover:bg-gray-200 transition-colors">
          <Icon name="palette" size={14} />
          Colors
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gray-100 border border-gray-200 text-sm text-gray-700 whitespace-nowrap hover:bg-gray-200 transition-colors">
          <Icon name="cube" size={14} />
          360° View
        </button>
        <button className="flex items-center gap-1.5 px-3 py-2 rounded-full bg-gradient-to-r from-[#e53935] to-[#c62828] text-sm text-white whitespace-nowrap shadow-sm">
          <Icon name="bolt" size={14} />
          Ask AI
        </button>
      </div>

      {/* Hero Info */}
      <div className="px-4 py-4 bg-white">
        {/* Title with Share */}
        <div className="flex items-start justify-between mb-2">
          <h1 className="text-2xl font-bold text-gray-900 font-['Outfit']">
            {basic.name}
          </h1>
          <button className="p-2 -mr-2 text-gray-400 hover:text-gray-600">
            <Icon name="share" size={18} />
          </button>
        </div>

        {/* Ratings */}
        <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
          <div className="flex items-center gap-1.5">
            <div className="flex items-center gap-1 text-amber-500">
              <Icon name="star" size={16} />
              <span className="font-bold text-gray-900">4.5</span>
            </div>
            <span className="text-xs text-gray-500">User Reviews (141)</span>
          </div>
          <div className="w-px h-4 bg-gray-200" />
          <div className="flex items-center gap-1.5">
            <span className="font-bold text-gray-900">3.8</span>
            <span className="text-xs text-[#e53935]">Expert Review</span>
          </div>
        </div>

        {/* Price Section */}
        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 mb-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs text-gray-500">Ex-Showroom Price in {basic.price.exShowroom.city}</span>
            <button className="text-xs text-blue-600 font-medium flex items-center gap-0.5">
              Change
              <Icon name="chevronDown" size={12} />
            </button>
          </div>
          <div className="flex items-baseline gap-2 mb-3">
            <span className="text-2xl font-bold text-gray-900 font-['Outfit']">
              {formatPrice(basic.price.exShowroom.max)}
            </span>
            <button className="text-sm text-blue-600 font-medium hover:underline">
              View On Road Price
            </button>
          </div>
          <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-gray-200">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">
                EMI ₹{costDefaults.emiAmount.toLocaleString('en-IN')}/month
              </span>
              <Icon name="info" size={14} className="text-gray-400" />
            </div>
            <button className="text-sm text-blue-600 font-medium hover:underline">
              Get EMI Offers
            </button>
          </div>
        </div>

        {/* Primary CTA */}
        <Button variant="primary" size="lg" fullWidth className="mb-3">
          Get Year End Offers
        </Button>

        <p className="text-center text-xs text-gray-500">
          ✨ Hurry up to lock festive offers!
        </p>
      </div>
    </section>
  )
}
