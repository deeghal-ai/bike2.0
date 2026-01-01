import { useState } from 'react'
import type { BikeData } from '../../types/bike'
import { Icon } from '../ui/Icon'

interface UserReviewsProps {
  data: BikeData
}

export default function UserReviews({ data }: UserReviewsProps) {
  const [showAllReviews, setShowAllReviews] = useState(false)
  const { basic } = data

  // Review data - in real app this would come from API
  const overallRating = 4.5
  const totalReviews = 141
  
  const categoryRatings = [
    { label: 'Mileage', rating: 4.2 },
    { label: 'Maintenance Cost', rating: 4.2 },
    { label: 'Safety', rating: 4.6 },
    { label: 'Features and Styling', rating: 4.8 },
    { label: 'Comfort', rating: 4.6 },
    { label: 'Performance', rating: 4.9 }
  ]

  const popularMentions = [
    { label: 'Looks', count: 57 },
    { label: 'Comfort', count: 47 },
    { label: 'Performance', count: 46 }
  ]

  // Sample reviews
  const reviews = [
    {
      id: 1,
      author: 'Abhinav',
      date: '24 Dec 2025',
      rating: 4.7,
      title: 'Guerrilla Rider',
      content: 'Best purchase ever! It is my first bike...',
      helpful: { yes: 2, no: 1 }
    },
    {
      id: 2,
      author: 'Subhrajit',
      date: '30 Nov 2025',
      rating: 4.2,
      title: 'Nice Performance Bike',
      content: 'Nice bike with very good performance, sitting posture upright and commanding, mileage is good as its a big cc bike I can get around 30kmpl in highway and 24-26 kmpl in the city.',
      helpful: { yes: 2, no: 1 }
    }
  ]

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating)
    const hasHalf = rating % 1 >= 0.5
    return (
      <div className="flex items-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <Icon 
            key={i}
            name="star" 
            size={12} 
            className={i < fullStars ? 'text-[#e53935]' : i === fullStars && hasHalf ? 'text-[#e53935]/50' : 'text-gray-300'} 
          />
        ))}
      </div>
    )
  }

  return (
    <section className="py-6 bg-white">
      {/* Promo Banner */}
      <div className="px-4 mb-6">
        <div className="p-4 bg-gradient-to-r from-amber-50 to-orange-50 rounded-xl border border-amber-200">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-bold text-gray-900 mb-1">
                Rate & Review your ride for a chance to win
              </h3>
              <p className="text-sm text-gray-600">a ₹5000 Amazon gift voucher</p>
              <button className="mt-2 px-4 py-1.5 border border-[#e53935] text-[#e53935] rounded-lg text-sm font-medium hover:bg-red-50 transition-colors">
                Write a Review
              </button>
              <p className="text-[10px] text-gray-400 mt-1">T & C Apply</p>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Icon key={i} name="star" size={24} className="text-gray-300" />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Rating Section */}
      <div className="px-4 mb-6">
        <h2 className="text-xl font-bold text-gray-900 font-['Outfit'] mb-4">
          {basic.name} User Reviews
        </h2>

        <div className="flex items-center gap-4 mb-4">
          {/* Star Badge */}
          <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-[#e53935]">
            <div className="text-center text-white">
              <div className="text-xl font-bold">{overallRating}</div>
              <Icon name="star" size={14} className="mx-auto" />
            </div>
          </div>

          <div>
            <div className="text-lg font-bold text-gray-900">Excellent</div>
            <button className="text-sm text-gray-500 flex items-center gap-1">
              User Reviews ({totalReviews})
              <Icon name="chevronRight" size={14} />
            </button>
          </div>
        </div>

        {/* Category Ratings Grid */}
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 mb-4">
          {categoryRatings.map((cat, index) => (
            <div key={index} className="flex items-center justify-between">
              <span className="text-xs text-gray-600">{cat.rating} ★ {cat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Photos & Videos */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Photos & Videos</h3>
        <div className="flex gap-2 overflow-x-auto hide-scrollbar">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="w-20 h-20 flex-shrink-0 rounded-lg bg-gray-200 flex items-center justify-center">
              <Icon name="image" size={20} className="text-gray-400" />
            </div>
          ))}
        </div>
      </div>

      {/* Popular Mentions */}
      <div className="px-4 mb-6">
        <h3 className="text-sm font-semibold text-gray-800 mb-3">Popular Mentions</h3>
        <div className="flex gap-2 flex-wrap">
          <button className="px-3 py-1.5 bg-gray-100 rounded-full text-xs text-gray-600 border border-gray-200 flex items-center gap-1">
            More
            <Icon name="chevronDown" size={12} />
          </button>
          {popularMentions.map((mention, index) => (
            <button key={index} className="px-3 py-1.5 bg-white rounded-full text-xs text-gray-700 border border-gray-200 hover:border-gray-300">
              {mention.label} ({mention.count})
            </button>
          ))}
        </div>
      </div>

      {/* Reviews List */}
      <div className="px-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-800">{totalReviews} User Reviews</h3>
          <button className="text-xs text-gray-500 flex items-center gap-1">
            Sort:
            <Icon name="chevronDown" size={12} />
          </button>
        </div>

        <div className="space-y-4">
          {reviews.slice(0, showAllReviews ? reviews.length : 2).map((review) => (
            <div key={review.id} className="p-4 bg-gray-50 rounded-xl border border-gray-200">
              {/* Review Header */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-gray-600 text-sm font-medium">
                  {review.author.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-800">{review.author}</div>
                  <div className="text-[10px] text-gray-400">wrote on {review.date}</div>
                </div>
                <div className="ml-auto flex items-center gap-1">
                  <span className="text-sm font-bold text-gray-800">{review.rating}</span>
                  {renderStars(review.rating)}
                </div>
              </div>

              {/* Review Content */}
              <h4 className="text-sm font-semibold text-gray-800 mb-1">{review.title}</h4>
              <p className="text-xs text-gray-600 mb-3">
                {review.content}
                <button className="text-blue-600 font-medium ml-1">Read More</button>
              </p>

              {/* Helpful */}
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Was this review helpful?</span>
                <div className="flex items-center gap-3">
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-green-600">
                    {review.helpful.yes} <Icon name="thumbsUp" size={14} />
                  </button>
                  <button className="flex items-center gap-1 text-xs text-gray-500 hover:text-red-600">
                    {review.helpful.no} <Icon name="thumbsDown" size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button 
          onClick={() => setShowAllReviews(!showAllReviews)}
          className="w-full mt-4 text-center text-sm text-blue-600 font-medium hover:underline"
        >
          View More User Reviews
        </button>
      </div>
    </section>
  )
}

