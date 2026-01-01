import { usePersona } from '../../contexts/PersonaContext'
import type { BikeData, PersonaType } from '../../types/bike'

interface PersonaMatchProps {
  data: BikeData
}

export default function PersonaMatch({ data }: PersonaMatchProps) {
  const { currentPersona } = usePersona()
  const { personas } = data

  const getPersonaData = (persona: PersonaType) => {
    switch (persona) {
      case 'weekend':
        return personas.weekendWarrior
      case 'commuter':
        return personas.dailyCommuter
      case 'value':
        return personas.valueHunter
      case 'enthusiast':
        return personas.enthusiast
      default:
        return personas.weekendWarrior
    }
  }

  const personaData = getPersonaData(currentPersona)
  const { matchScore, matchLabel, description, highlights, concerns } = personaData

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'text-green-600 border-green-500'
    if (score >= 70) return 'text-blue-600 border-blue-500'
    if (score >= 55) return 'text-amber-600 border-amber-500'
    return 'text-red-600 border-red-500'
  }

  const getScoreBg = (score: number) => {
    if (score >= 85) return 'bg-green-50'
    if (score >= 70) return 'bg-blue-50'
    if (score >= 55) return 'bg-amber-50'
    return 'bg-red-50'
  }

  const getExplanation = (persona: PersonaType) => {
    const explanations: Record<PersonaType, string> = {
      weekend: "70% of 850+ Dominar 250 owners are weekend tourers who specifically chose this bike for long-distance capability. The bike excels at exactly what you want to do.",
      commuter: "The 180kg weight and front-heavy steering make city commuting tolerable but not ideal. Both owners and experts rate city usability 2-2.5/5. Consider lighter options like Gixxer 250.",
      value: "This bike offers the most features per rupee in the 250cc segment. Riding modes, traction control, slipper clutch, and ABS – all under ₹1.85L. Unbeatable value proposition.",
      enthusiast: "Good power for the segment, but 180kg and touring-focused geometry mean the Duke 250 is better for aggressive riding. This bike prioritizes comfort over agility."
    }
    return explanations[persona]
  }

  return (
    <div className="px-4 py-4 bg-white">
      <div className={`rounded-2xl p-4 ${getScoreBg(matchScore)} border border-gray-200`}>
        {/* Score Row */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-16 h-16 rounded-full border-3 flex items-center justify-center font-bold text-xl bg-white ${getScoreColor(matchScore)}`}
            style={{ borderWidth: '3px' }}
          >
            {matchScore}%
          </div>
          <div>
            <div className={`text-lg font-semibold ${getScoreColor(matchScore).split(' ')[0]}`}>
              {matchLabel}
            </div>
            <div className="text-sm text-gray-600">{description}</div>
          </div>
        </div>

        {/* Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-2">
              {highlights.slice(0, 3).map((highlight, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-green-100 text-green-700 text-xs"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3}>
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Concerns (for lower match scores) */}
        {concerns && concerns.length > 0 && matchScore < 75 && (
          <div className="mb-3">
            <div className="flex flex-wrap gap-2">
              {concerns.slice(0, 2).map((concern, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-md bg-amber-100 text-amber-700 text-xs"
                >
                  <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" y1="9" x2="12" y2="13" />
                    <line x1="12" y1="17" x2="12.01" y2="17" />
                  </svg>
                  {concern}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Explanation */}
        <div className="text-xs text-gray-600 leading-relaxed">
          <span className="font-semibold text-gray-800">Why this score:</span>{' '}
          {getExplanation(currentPersona)}
        </div>
      </div>
    </div>
  )
}
