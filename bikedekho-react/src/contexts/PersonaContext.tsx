import { createContext, useContext, useState, ReactNode } from 'react'
import type { PersonaType } from '../types/bike'

interface PersonaContextType {
  currentPersona: PersonaType
  setPersona: (persona: PersonaType) => void
}

const PersonaContext = createContext<PersonaContextType | undefined>(undefined)

export function PersonaProvider({ children }: { children: ReactNode }) {
  const [currentPersona, setCurrentPersona] = useState<PersonaType>('weekend')

  const setPersona = (persona: PersonaType) => {
    setCurrentPersona(persona)
  }

  return (
    <PersonaContext.Provider value={{ currentPersona, setPersona }}>
      {children}
    </PersonaContext.Provider>
  )
}

export function usePersona() {
  const context = useContext(PersonaContext)
  if (context === undefined) {
    throw new Error('usePersona must be used within a PersonaProvider')
  }
  return context
}

