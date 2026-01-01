import type { BikeData } from '../../types/bike'

interface CityPricesProps {
  data: BikeData
}

export default function CityPrices({ data }: CityPricesProps) {
  const { basic } = data

  // City prices - in real app this would come from API
  const cityPrices = [
    { city: 'Bangalore', price: 331883 },
    { city: 'Mumbai', price: 312640 },
    { city: 'Pune', price: 308727 },
    { city: 'Hyderabad', price: 308727 },
    { city: 'Chennai', price: 309014 },
    { city: 'Ahmedabad', price: 293631 },
    { city: 'Lucknow', price: 303599 },
    { city: 'Patna', price: 303599 },
    { city: 'Chandigarh', price: 303599 },
    { city: 'Kolkata', price: 303886 }
  ]

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`
  }

  return (
    <section className="py-6 bg-gray-50">
      {/* Header */}
      <div className="px-4 mb-4">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit']">
          {basic.name} Price in India
        </h2>
      </div>

      {/* Price Table */}
      <div className="px-4">
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          {/* Table Header */}
          <div className="flex justify-between items-center px-4 py-3 bg-gray-50 border-b border-gray-200">
            <span className="text-xs font-semibold text-gray-500 uppercase">City</span>
            <span className="text-xs font-semibold text-gray-500 uppercase">Starting On-Road Price</span>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-100">
            {cityPrices.map((item, index) => (
              <div key={index} className="flex justify-between items-center px-4 py-3">
                <span className="text-sm text-blue-600 font-medium underline cursor-pointer hover:text-blue-800">
                  {item.city}
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  {formatPrice(item.price)}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* View More Cities Link */}
      <div className="px-4 mt-4 text-center">
        <button className="text-sm text-blue-600 font-medium hover:underline">
          View More Cities
        </button>
      </div>
    </section>
  )
}

