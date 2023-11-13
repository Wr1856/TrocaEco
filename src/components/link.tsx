"use client"
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

interface LinkCustomizavelProps extends LinkProps {
  children?: ReactNode
}

export function LinkCustomizavel ({ children, ...props }: LinkCustomizavelProps) {
  const pathname = usePathname()
  const linkPath = props.href
  const ativo = pathname === linkPath

  return(
    <Link aria-active={ativo} className="aria-[active=true]:text-green-500 aria-[active=true]:font-bold" {...props}>
      {children}
    </Link>
  )
}