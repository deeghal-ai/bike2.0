import { useState } from 'react'
import type { BikeData, DayStory as DayStoryType, TimelineItem } from '../../types/bike'

interface DayStoryProps {
  data: BikeData
}

const verdictConfig = {
  dominates: {
    label: 'Dominates',
    bg: 'bg-emerald-500',
    bgLight: 'bg-emerald-50',
    text: 'text-emerald-600',
    border: 'border-emerald-200',
    icon: '🏆'
  },
  competes: {
    label: 'Competes',
    bg: 'bg-blue-500',
    bgLight: 'bg-blue-50',
    text: 'text-blue-600',
    border: 'border-blue-200',
    icon: '⚔️'
  },
  struggles: {
    label: 'Struggles',
    bg: 'bg-amber-500',
    bgLight: 'bg-amber-50',
    text: 'text-amber-600',
    border: 'border-amber-200',
    icon: '⚠️'
  }
}

function TimelineCard({ item, index, isLast }: { 
  item: TimelineItem
  index: number
  isLast: boolean
}) {
  const getTimelineColor = () => {
    if (index === 0) return 'bg-gradient-to-b from-indigo-500 to-purple-500'
    if (isLast) return 'bg-gradient-to-b from-purple-400 to-orange-400'
    return 'bg-gray-300'
  }

  return (
    <div 
      className="relative pl-10 animate-fadeIn"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Timeline connector line */}
      {!isLast && (
        <div className="absolute left-[14px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-gray-300 to-gray-200" />
      )}
      
      {/* Timeline dot */}
      <div className={`absolute left-1.5 top-3 w-4 h-4 rounded-full border-2 border-white shadow-md ${getTimelineColor()}`}>
        {index === 0 && (
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-white rounded-full animate-ping" />
        )}
      </div>

      {/* Content card */}
      <div className="timeline-card bg-white rounded-2xl p-4 border border-gray-100 shadow-sm">
        {/* Time & Distance Header */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
            {item.time}
          </span>
          {item.distance && (
            <>
              <span className="text-gray-300">•</span>
              <span className="text-xs text-gray-400">{item.distance}</span>
            </>
          )}
        </div>

        {/* Title */}
        <h4 className="text-base font-bold text-gray-800 mb-3 leading-tight">
          {item.title}
        </h4>

        {/* Points */}
        <div className="space-y-2 mb-3">
          {item.points.map((point, pointIndex) => (
            <div
              key={pointIndex}
              className={`flex items-start gap-2 text-sm ${
                point.type === 'positive' ? 'text-emerald-600' : 'text-amber-600'
              }`}
            >
              <span className="flex-shrink-0 mt-0.5 text-xs">
                {point.type === 'positive' ? '✓' : '⚠'}
              </span>
              <span className="leading-snug">{point.text}</span>
            </div>
          ))}
        </div>

        {/* Owner Quote */}
        {item.quote && (
          <div className="mt-3 quote-card rounded-xl p-3 border-l-3 border-indigo-400 overflow-hidden">
            <p className="text-xs text-gray-600 italic pl-5 relative z-10 leading-relaxed">
              {item.quote.text}
            </p>
            <p className="text-[10px] text-gray-400 mt-1.5 pl-5 font-medium">
              — {item.quote.author}
            </p>
          </div>
        )}

        {/* Scenario Tag */}
        {item.scenarioTag && (
          <div className={`mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 ${
            verdictConfig[item.scenarioTag.verdict].bgLight
          } ${verdictConfig[item.scenarioTag.verdict].text} ${verdictConfig[item.scenarioTag.verdict].border} border verdict-${item.scenarioTag.verdict}`}>
            <span>{verdictConfig[item.scenarioTag.verdict].icon}</span>
            <span className="font-semibold">{item.scenarioTag.scenario}</span>
            {item.scenarioTag.vsRivals && (
              <span className="opacity-70 text-[10px]">vs {item.scenarioTag.vsRivals}</span>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

function SummaryHeroCard({ story }: { story: DayStoryType }) {
  const config = verdictConfig[story.verdict]
  
  return (
    <div className={`rounded-2xl p-4 mb-5 bg-gradient-to-br ${story.gradient} relative overflow-hidden animate-slideUp`}>
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full translate-y-1/2 -translate-x-1/2" />
      
      {/* Header */}
      <div className="relative z-10">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-white/70 text-xs font-medium tracking-wider uppercase">
              {story.tagline}
            </span>
            <h3 className="text-xl font-bold text-white mt-0.5">
              {story.name}
            </h3>
          </div>
          <div className={`${config.bg} px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg verdict-${story.verdict}`}>
            <span className="text-sm">{config.icon}</span>
            <span className="text-white text-xs font-bold">{story.summary.verdict}</span>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-white/70 text-[10px] uppercase tracking-wide mb-1">Comfort</div>
            <div className="text-white text-lg font-bold">{story.summary.comfortRating}</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-white/70 text-[10px] uppercase tracking-wide mb-1">Mileage</div>
            <div className="text-white text-lg font-bold">{story.summary.avgMileage}</div>
          </div>
          <div className="bg-white/15 backdrop-blur-sm rounded-xl p-3 text-center">
            <div className="text-white/70 text-[10px] uppercase tracking-wide mb-1">Timeline</div>
            <div className="text-white text-lg font-bold">{story.timeline.length} pts</div>
          </div>
        </div>

        {/* Best/Worst Moments */}
        <div className="mt-4 space-y-2">
          <div className="flex items-start gap-2 bg-white/10 rounded-lg p-2.5">
            <span className="text-lg">✨</span>
            <div>
              <div className="text-white/60 text-[10px] uppercase tracking-wide">Best Moment</div>
              <div className="text-white text-xs font-medium">{story.summary.bestMoment}</div>
            </div>
          </div>
          <div className="flex items-start gap-2 bg-black/10 rounded-lg p-2.5">
            <span className="text-lg">💭</span>
            <div>
              <div className="text-white/60 text-[10px] uppercase tracking-wide">Reality Check</div>
              <div className="text-white text-xs font-medium">{story.summary.worstMoment}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function DayStory({ data }: DayStoryProps) {
  const { dayStories } = data
  const [activeStoryId, setActiveStoryId] = useState(dayStories[0].id)
  
  const activeStory = dayStories.find(s => s.id === activeStoryId) || dayStories[0]

  return (
    <div className="px-4">
      {/* Story Selector Pills */}
      <div className="flex gap-2 mb-5 overflow-x-auto hide-scrollbar pb-1">
        {dayStories.map((story) => {
          const isActive = activeStoryId === story.id
          const config = verdictConfig[story.verdict]
          
          return (
            <button
              key={story.id}
              onClick={() => setActiveStoryId(story.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-2xl text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? `bg-gradient-to-r ${story.gradient} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <span className="text-base">{story.icon}</span>
              <span>{story.name}</span>
              {!isActive && (
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${config.bgLight} ${config.text}`}>
                  {config.label}
                </span>
              )}
            </button>
          )
        })}
      </div>

      {/* Summary Hero Card */}
      <SummaryHeroCard story={activeStory} />

      {/* Timeline */}
      <div className="relative">
        <div className="space-y-4">
          {activeStory.timeline.map((item, index) => (
            <TimelineCard
              key={index}
              item={item}
              index={index}
              isLast={index === activeStory.timeline.length - 1}
            />
          ))}
        </div>
      </div>

      {/* Story Conclusion */}
      <div className="mt-6 bg-gradient-to-r from-gray-50 to-slate-50 rounded-2xl p-4 border border-gray-100">
        <div className="flex items-center gap-3">
          <div className={`w-12 h-12 rounded-xl ${verdictConfig[activeStory.verdict].bg} flex items-center justify-center text-2xl shadow-lg`}>
            {verdictConfig[activeStory.verdict].icon}
          </div>
          <div>
            <div className="text-xs text-gray-500 uppercase tracking-wide">Story Verdict</div>
            <div className="text-lg font-bold text-gray-800">{activeStory.summary.verdict}</div>
            <div className="text-xs text-gray-500 mt-0.5">
              for {activeStory.name.toLowerCase()} use case
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

