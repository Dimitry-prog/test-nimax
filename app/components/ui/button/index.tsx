import { ReactNode } from "react";
import { cn } from "@/app/utils/cn";

type ButtonProps = {
  children: ReactNode
  onClick?: () => void;
  type: 'button' | 'submit'
  disabled?: boolean;
  classes?: string,
}

const Button = ({ children, onClick, type, disabled = false, classes }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn('w-full py-[10px] px-[14px] text-white text-sm font-medium rounded bg-blue hover:bg-blue-light focus:ring-2 focus:ring-offset-2 ring-blue transition-all duration-500', disabled && 'bg-gray-dark pointer-events-none cursor-not-allowed', classes)}
    >
      {children}
    </button>
  )
};

export default Button;