import { ReactNode } from 'react'
import { twJoin } from 'tailwind-merge'

interface AsyncButtonProps {
  type: 'primary' | 'secondary'
  isLoading?: boolean
  children?: ReactNode
}

const BUTTON_VARIANT = {
  primary: 'text-white bg-green-700 border border-transparent',
  secondary: 'text-green-700 bg-transparent border border-green-700'
}

const sizes = {
  sm: 'w-6 h-6',
  md: 'w-8 h-8',
  lg: 'w-12 h-12'
}

interface LoadingProps {
  size: keyof typeof sizes
}

function Loading ({ size }: LoadingProps) {
  return (
    <div className={twJoin(
      'border-2 border-white/20 border-t-white rounded-full animate-spin',
      sizes[size]
    )} />
  )
}

export function AsyncButton ({ type, isLoading, children }: AsyncButtonProps) {
  return (
    <button
      disabled={isLoading}
      className={twJoin(
        'rounded-full px-5 py-2 w-80 flex items-center justify-center disabled:cursor-not-allowed',
        BUTTON_VARIANT[type],
        isLoading ? 'opacity-75' : ''
      )}
    >
      {isLoading ? <Loading size='sm' /> : children}
    </button>
  );
}
