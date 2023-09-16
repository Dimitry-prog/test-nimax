import { ChangeEvent, InputHTMLAttributes } from "react";
import { cn } from "@/app/utils/cn";

type CheckboxProps = {
  name?: string;
  type: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  classes?: string,
} & InputHTMLAttributes<HTMLInputElement>

const Checkbox = ({ name, type, placeholder, onChange, error, classes, ...restProps }: CheckboxProps) => {
  return (
    <div className={cn("flex gap-2", classes)}>
      <input
        name={name}
        type={type}
        onChange={onChange}
        className={cn('relative peer shrink-0 appearance-none w-4 h-4 border border-black bg-white checked:border-0')}
        {...restProps}
      />
      <svg
        className="absolute w-4 h-4 hidden peer-checked:block pointer-events-none"
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <rect width="16" height="16" fill="white"/>
        <rect x="0.5" y="0.5" width="15" height="15" rx="1.5" stroke="black"/>
        <path d="M12.3017 5.11188L7.00006 10.9999L4.33924 8.60412" stroke="black" strokeWidth="2"
              strokeLinecap="round"/>
      </svg>
      {error && <span className="text-xs text-red">{error}</span>}
    </div>
  )
};

export default Checkbox;