import { useEffect, useRef, useState } from 'react'
import { Icon } from '../ui/Icon'

interface FullSpecsModalProps {
  isOpen: boolean
  onClose: () => void
  bikeName: string
}

interface SpecItem {
  label: string
  value: string
  humanization: string
}

interface SpecCategory {
  id: string
  title: string
  icon: string
  specs: SpecItem[]
}

// Comprehensive specs data with humanization
const fullSpecsData: SpecCategory[] = [
  {
    id: 'engine',
    title: 'Engine & Performance',
    icon: 'engine',
    specs: [
      {
        label: 'Engine Type',
        value: 'Single-cylinder, 4-stroke, DOHC, Liquid-cooled, FI',
        humanization: 'Efficient combustion = better mileage + smoother power delivery'
      },
      {
        label: 'Displacement',
        value: '248.77 cc',
        humanization: 'Perfect balance of power and economy for touring'
      },
      {
        label: 'Max Power',
        value: '27 PS @ 8500 rpm',
        humanization: 'Top speed ~132 km/h, ample power for overtaking'
      },
      {
        label: 'Max Torque',
        value: '23.5 Nm @ 6500 rpm',
        humanization: 'Quick acceleration, handles inclines easily'
      },
      {
        label: 'Transmission',
        value: '6-speed with Slipper Clutch',
        humanization: 'Relaxed highway cruising, smooth downshifts'
      },
      {
        label: 'Top Speed',
        value: '~132 km/h',
        humanization: 'Comfortable cruising at 100-110 km/h all day'
      },
      {
        label: 'Mileage (ARAI)',
        value: '35 kmpl',
        humanization: 'Real world: 40+ highway, 30-35 city'
      },
      {
        label: 'Cooling System',
        value: 'Liquid Cooled',
        humanization: 'Less heat in traffic, consistent performance'
      }
    ]
  },
  {
    id: 'chassis',
    title: 'Chassis & Suspension',
    icon: 'tool',
    specs: [
      {
        label: 'Frame',
        value: 'Beam Perimeter',
        humanization: 'High rigidity, better handling in corners'
      },
      {
        label: 'Front Suspension',
        value: '37mm USD Fork, 135mm travel',
        humanization: 'Improved stability, absorbs bumps well'
      },
      {
        label: 'Rear Suspension',
        value: 'Adjustable Monoshock with Nitrox',
        humanization: 'Customize ride for load and terrain'
      },
      {
        label: 'Ground Clearance',
        value: '157 mm',
        humanization: 'Handles speed bumps and rough roads'
      },
      {
        label: 'Wheelbase',
        value: '1453 mm',
        humanization: 'Long wheelbase = stability over agility'
      }
    ]
  },
  {
    id: 'brakes',
    title: 'Brakes & Safety',
    icon: 'shield',
    specs: [
      {
        label: 'Front Brake',
        value: '300mm Disc',
        humanization: 'Strong stopping power when loaded'
      },
      {
        label: 'Rear Brake',
        value: '230mm Disc',
        humanization: 'Balanced braking feel'
      },
      {
        label: 'ABS',
        value: 'Dual-channel',
        humanization: 'Prevents wheel lock-up, safer emergency stops'
      },
      {
        label: 'Traction Control',
        value: 'Switchable ETC',
        humanization: 'Grip control on slippery surfaces'
      },
      {
        label: 'Front Tyre',
        value: '100/80-17 Tubeless',
        humanization: 'Good grip, puncture-resistant'
      },
      {
        label: 'Rear Tyre',
        value: '130/70-17 Tubeless',
        humanization: 'Wide contact patch for stability'
      }
    ]
  },
  {
    id: 'dimensions',
    title: 'Dimensions',
    icon: 'cube',
    specs: [
      {
        label: 'Length',
        value: '2156 mm',
        humanization: 'Long, touring-oriented stance'
      },
      {
        label: 'Width',
        value: '836 mm',
        humanization: 'Comfortable for filtering through traffic'
      },
      {
        label: 'Height',
        value: '1112 mm',
        humanization: 'Good wind protection posture'
      },
      {
        label: 'Seat Height',
        value: '800 mm',
        humanization: 'Accessible for most riders (5\'6"+)'
      },
      {
        label: 'Kerb Weight',
        value: '180 kg',
        humanization: 'Stable on highway, needs muscle in parking'
      },
      {
        label: 'Fuel Capacity',
        value: '13 L',
        humanization: '450-500 km real touring range'
      }
    ]
  },
  {
    id: 'features',
    title: 'Features & Electricals',
    icon: 'bolt',
    specs: [
      {
        label: 'Headlamp',
        value: 'Full LED with AHO',
        humanization: 'Brighter, safer night riding'
      },
      {
        label: 'Display',
        value: 'Digital LCD Console',
        humanization: 'Clear info with gear position indicator'
      },
      {
        label: 'Ride Modes',
        value: 'Road, Rain, Sport, Off-Road',
        humanization: 'Adapt performance to any condition'
      },
      {
        label: 'Tail Lamp',
        value: 'Full LED',
        humanization: 'Modern look, better visibility'
      },
      {
        label: 'Exhaust',
        value: 'Twin-barrel',
        humanization: 'Deep, throaty exhaust note'
      },
      {
        label: 'Seat',
        value: 'Premium German material',
        humanization: 'Comfortable for long hours'
      },
      {
        label: 'Storage',
        value: 'In-built bungee straps',
        humanization: 'Secure luggage without extra accessories'
      },
      {
        label: 'USB Charging',
        value: 'Yes',
        humanization: 'Keep phone charged for navigation'
      }
    ]
  }
]

export default function FullSpecsModal({ isOpen, onClose, bikeName }: FullSpecsModalProps) {
  const [activeCategory, setActiveCategory] = useState('engine')
  const contentRef = useRef<HTMLDivElement>(null)
  const sectionRefs = useRef<{ [key: string]: HTMLElement | null }>({})

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  // Scroll to section when pill is clicked
  const scrollToSection = (categoryId: string) => {
    setActiveCategory(categoryId)
    const section = sectionRefs.current[categoryId]
    if (section && contentRef.current) {
      const headerHeight = 120 // Account for sticky header
      const sectionTop = section.offsetTop - headerHeight
      contentRef.current.scrollTo({ top: sectionTop, behavior: 'smooth' })
    }
  }

  // Track scroll position to update active pill
  const handleScroll = () => {
    if (!contentRef.current) return
    const scrollPosition = contentRef.current.scrollTop + 150

    for (const category of fullSpecsData) {
      const section = sectionRefs.current[category.id]
      if (section) {
        const sectionTop = section.offsetTop
        const sectionBottom = sectionTop + section.offsetHeight
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveCategory(category.id)
          break
        }
      }
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full h-[95vh] bg-white rounded-t-3xl animate-slideUp overflow-hidden flex flex-col">
        {/* Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
          {/* Title Row */}
          <div className="flex items-center justify-between px-4 py-4">
            <div>
              <h2 className="text-lg font-bold text-gray-900 font-['Outfit']">
                {bikeName}
              </h2>
              <p className="text-sm text-gray-500">Full Specs & Features</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            >
              <Icon name="x" size={20} className="text-gray-600" />
            </button>
          </div>

          {/* Category Pills */}
          <div className="px-4 pb-3 overflow-x-auto scrollbar-hide">
            <div className="flex gap-2">
              {fullSpecsData.map((category) => (
                <button
                  key={category.id}
                  onClick={() => scrollToSection(category.id)}
                  className={`flex-shrink-0 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                    activeCategory === category.id
                      ? 'bg-[#e53935] text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Icon name={category.icon} size={14} />
                  <span>{category.title.split(' ')[0]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Content */}
        <div 
          ref={contentRef}
          onScroll={handleScroll}
          className="flex-1 overflow-y-auto px-4 pb-8"
        >
          {fullSpecsData.map((category) => (
            <section
              key={category.id}
              ref={(el) => { sectionRefs.current[category.id] = el }}
              className="pt-6"
            >
              {/* Category Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#e53935]/10 flex items-center justify-center">
                  <Icon name={category.icon} size={18} className="text-[#e53935]" />
                </div>
                <h3 className="text-base font-bold text-gray-900">{category.title}</h3>
              </div>

              {/* Spec Cards */}
              <div className="space-y-3">
                {category.specs.map((spec, index) => (
                  <div
                    key={index}
                    className="p-4 bg-gray-50 rounded-xl border border-gray-100"
                  >
                    {/* Label */}
                    <div className="text-xs text-gray-500 font-medium mb-1">
                      {spec.label}
                    </div>
                    
                    {/* Value */}
                    <div className="text-sm font-bold text-gray-900 mb-2">
                      {spec.value}
                    </div>
                    
                    {/* Divider */}
                    <div className="border-t border-gray-200 my-2"></div>
                    
                    {/* Humanization */}
                    <div className="flex items-start gap-2">
                      <span className="text-[#e53935] text-xs mt-0.5">💡</span>
                      <span className="text-xs text-gray-600 leading-relaxed">
                        {spec.humanization}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          ))}

          {/* Bottom Padding */}
          <div className="h-8"></div>
        </div>
      </div>

      {/* Animation Styles */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.3s ease-out forwards;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  )
}

