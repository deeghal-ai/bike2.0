import { ReactNode, ButtonHTMLAttributes } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-xl transition-all duration-200 flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-[#e53935] hover:bg-[#c62828] text-white shadow-sm',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-800 border border-gray-200',
    ghost: 'bg-transparent hover:bg-gray-100 text-gray-600 hover:text-gray-900',
    outline: 'bg-transparent border border-gray-300 hover:border-gray-400 text-gray-700 hover:bg-gray-50'
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base'
  }

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}
