import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface GalleryProps {
  data: BikeData
}

export default function Gallery({ data }: GalleryProps) {
  const { basic } = data

  // Placeholder gallery images
  const galleryImages = [
    { id: 1, type: 'main', label: 'Front View' },
    { id: 2, type: 'side', label: 'Side View' },
    { id: 3, type: 'rear', label: 'Rear View' },
    { id: 4, type: 'detail', label: 'Details' },
    { id: 5, type: 'action', label: 'Action Shot' },
    { id: 6, type: 'dashboard', label: 'Dashboard' }
  ]

  return (
    <div className="py-6 px-4">
      {/* Header */}
      <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] mb-4">
        {basic.name} Gallery
      </h2>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        {galleryImages.slice(0, 4).map((image, index) => (
          <div
            key={image.id}
            className={`relative rounded-xl bg-gradient-to-br from-gray-100 to-gray-50 flex items-center justify-center overflow-hidden ${
              index === 0 ? 'col-span-2 h-40' : 'h-28'
            }`}
          >
            <Icon name="image" size={index === 0 ? 40 : 24} className="text-gray-300" />
            
            {/* Label */}
            <div className="absolute bottom-2 left-2 px-2 py-1 bg-black/50 rounded text-[10px] text-white font-medium">
              {image.label}
            </div>

            {/* Image count on last visible image */}
            {index === 3 && galleryImages.length > 4 && (
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <span className="text-white font-bold text-lg">+{galleryImages.length - 4}</span>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* View All Photos Link */}
      <div className="text-center">
        <button className="text-sm text-blue-600 font-medium hover:underline">
          View All Photos
        </button>
      </div>
    </div>
  )
}

