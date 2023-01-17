import { ReactNode } from "react"
import { Slot } from "@radix-ui/react-slot"
import { clsx } from 'clsx'

interface TextProps {
  children: ReactNode
  size?: "sm" | "lg"
  className?: string
  asChild?: boolean
}


export function Text({children, size = 'sm', className, asChild}: TextProps) {
  const Comp = asChild ? Slot : 'span'
  return (
    <Comp className={clsx(
      'text-black',
      {
        'text-my-sm': size == 'sm',
        'text-my-lg': size == 'lg',
      }
    )}>
      {children}
    </Comp>
  )
}