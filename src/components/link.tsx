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
    <Link data-active={ativo} className="data-[active=true]:text-green-500 data-[active=true]:font-bold" {...props}>
      {children}
    </Link>
  )
}