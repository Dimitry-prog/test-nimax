import { ChangeEvent, InputHTMLAttributes } from "react";
import { cn } from "@/app/utils/cn";

type InputProps = {
  label?: string;
  name?: string;
  type: string;
  placeholder?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  classes?: string,
} & InputHTMLAttributes<HTMLInputElement>

const Input = ({ label, name, type, placeholder, onChange, error, classes, ...restProps }: InputProps) => (
  <>
    {label && type !== 'radio' && <p>{label}</p>}
    <div className="flex flex-col gap-1">
      <label className={cn(type === 'radio' && 'flex items-center')}>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          className={cn('w-full p-2 text-md text-black rounded border border-gray-light bg-white', error && 'text-red bg-red-extra-light border-red-light', type === 'radio' && 'peer sr-only', classes)}
          {...restProps}
        />
        {type === 'radio' && <span
            className='w-2 h-2 ml-1 rounded-full bg-white ring-1 ring-offset-4 ring-black peer-checked:ring-black peer-checked:bg-black'/>}
        {type === 'radio' && <span className='ml-3 text-sm'>{restProps.value}</span>}
      </label>
      {error && <span className="text-xs text-red">{error}</span>}
    </div>
  </>
);

export default Input;