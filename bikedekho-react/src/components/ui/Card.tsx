import { ReactNode } from 'react'

interface CardProps {
  children: ReactNode
  className?: string
  variant?: 'default' | 'elevated' | 'highlight'
}

export function Card({ children, className = '', variant = 'default' }: CardProps) {
  const baseStyles = 'rounded-2xl p-4'
  
  const variants = {
    default: 'bg-white border border-gray-200 shadow-sm',
    elevated: 'bg-white border border-gray-100 shadow-md',
    highlight: 'bg-gradient-to-br from-white to-gray-50 border border-gray-200 shadow-sm'
  }

  return (
    <div className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </div>
  )
}

interface CardHeaderProps {
  children: ReactNode
  className?: string
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`flex items-center justify-between mb-3 ${className}`}>
      {children}
    </div>
  )
}

interface CardLabelProps {
  children: ReactNode
  className?: string
}

export function CardLabel({ children, className = '' }: CardLabelProps) {
  return (
    <span className={`text-xs font-medium text-gray-500 uppercase tracking-wide ${className}`}>
      {children}
    </span>
  )
}
