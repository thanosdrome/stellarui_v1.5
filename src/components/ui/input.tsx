import * as React from "react"

import { cn } from "../../lib/utils"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-[4rem] w-full rounded-[0.6rem] border border-input bg-background px-[1.2rem] py-[0.8rem] text-[1.4rem] ring-offset-background file:border-0 file:bg-transparent file:text-[1.4rem] file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-[0.2rem] focus-visible:ring-ring focus-visible:ring-offset-[0.2rem] disabled:cursor-not-allowed disabled:opacity-50",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }