import { selectOption } from "@/app/utils/constants";
import { ChangeEvent, SelectHTMLAttributes } from "react";
import { cn } from "@/app/utils/cn";

type SelectProps = {
  onChange?: (e: ChangeEvent<HTMLSelectElement>) => void;
  defaultValue?: string;
  label: string;
  error?: string;
  classes?: string;
} & SelectHTMLAttributes<HTMLSelectElement>

const Select = ({ onChange, defaultValue, error, classes, label, ...restProps }: SelectProps) => {
  return (
    <div className={cn(classes)}>
      <select
        defaultValue={defaultValue}
        onChange={onChange}
        className={cn('w-full p-2 text-md text-black rounded border border-gray-light bg-white', error && 'text-red bg-red-extra-light border-red-light')}
        {...restProps}
      >
        <option disabled value=''>{label}</option>
        {selectOption.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
      {error && <span className="text-xs text-red">{error}</span>}
    </div>

  )
};

export default Select;