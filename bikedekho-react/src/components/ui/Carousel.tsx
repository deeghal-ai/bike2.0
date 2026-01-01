import { useRef, useState, useEffect } from 'react'
import type { ReactNode } from 'react'

interface CarouselProps {
  children: ReactNode[]
  className?: string
  showDots?: boolean
}

export function Carousel({ children, className = '', showDots = true }: CarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const handleScroll = () => {
      const scrollLeft = track.scrollLeft
      const itemWidth = track.firstElementChild?.clientWidth || 300
      const gap = 12
      const index = Math.round(scrollLeft / (itemWidth + gap))
      setActiveIndex(index)
    }

    track.addEventListener('scroll', handleScroll)
    return () => track.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToIndex = (index: number) => {
    const track = trackRef.current
    if (!track) return
    const itemWidth = track.firstElementChild?.clientWidth || 300
    const gap = 12
    track.scrollTo({
      left: (itemWidth + gap) * index,
      behavior: 'smooth'
    })
  }

  return (
    <div className={className}>
      <div
        ref={trackRef}
        className="flex gap-3 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-4"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {children.map((child, index) => (
          <div
            key={index}
            className="flex-shrink-0 snap-start"
            style={{ width: 'calc(100% - 32px)', minWidth: '280px', maxWidth: '340px' }}
          >
            {child}
          </div>
        ))}
      </div>

      {showDots && (
        <div className="flex justify-center gap-1.5 mt-2">
          {children.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                index === activeIndex
                  ? 'bg-[#e53935] w-5'
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}
