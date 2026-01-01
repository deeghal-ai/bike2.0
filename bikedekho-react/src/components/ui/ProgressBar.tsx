interface ProgressBarProps {
  value: number
  max?: number
  color?: 'default' | 'positive' | 'warning' | 'negative' | 'info' | 'primary'
  size?: 'sm' | 'md'
  showValue?: boolean
  label?: string
  className?: string
}

export function ProgressBar({
  value,
  max = 100,
  color = 'default',
  size = 'md',
  showValue = false,
  label,
  className = ''
}: ProgressBarProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100))

  const colors = {
    default: 'bg-gray-400',
    primary: 'bg-[#e53935]',
    positive: 'bg-green-500',
    warning: 'bg-amber-500',
    negative: 'bg-red-500',
    info: 'bg-blue-500'
  }

  const sizes = {
    sm: 'h-1.5',
    md: 'h-2'
  }

  return (
    <div className={`w-full ${className}`}>
      {(label || showValue) && (
        <div className="flex justify-between items-center mb-1">
          {label && <span className="text-xs text-gray-500">{label}</span>}
          {showValue && <span className="text-xs font-medium text-gray-700">{value}</span>}
        </div>
      )}
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizes[size]}`}>
        <div
          className={`${colors[color]} ${sizes[size]} rounded-full transition-all duration-500 ease-out`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
