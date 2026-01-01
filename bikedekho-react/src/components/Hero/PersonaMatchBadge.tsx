import { usePersona } from '../../contexts/PersonaContext'
import type { BikeData, PersonaType } from '../../types/bike'

interface PersonaMatchBadgeProps {
  data: BikeData
}

export default function PersonaMatchBadge({ data }: PersonaMatchBadgeProps) {
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
  const { matchScore, matchLabel, name } = personaData

  const getScoreColor = (score: number) => {
    if (score >= 85) return 'bg-green-500'
    if (score >= 70) return 'bg-blue-500'
    if (score >= 55) return 'bg-amber-500'
    return 'bg-red-500'
  }

  const getScoreBg = (score: number) => {
    if (score >= 85) return 'from-green-500/90 to-green-600/90'
    if (score >= 70) return 'from-blue-500/90 to-blue-600/90'
    if (score >= 55) return 'from-amber-500/90 to-amber-600/90'
    return 'from-red-500/90 to-red-600/90'
  }

  return (
    <div className={`absolute top-4 right-4 px-3 py-2 rounded-xl bg-gradient-to-r ${getScoreBg(matchScore)} backdrop-blur-sm shadow-lg`}>
      <div className="flex items-center gap-2">
        <div className={`w-10 h-10 rounded-full ${getScoreColor(matchScore)} flex items-center justify-center text-white font-bold text-sm border-2 border-white/30`}>
          {matchScore}%
        </div>
        <div className="text-white">
          <div className="text-xs font-medium opacity-90">{matchLabel}</div>
          <div className="text-[10px] opacity-75">for {name}</div>
        </div>
      </div>
    </div>
  )
}

