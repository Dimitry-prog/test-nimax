import { ChangeEvent } from "react";
import { cn } from "@/app/utils/cn";

type ToggleProps = {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  checked?: boolean;
  error?: string;
  classes?: string;
};

const Toggle = ({ onChange, checked, error, classes, ...restProps }: ToggleProps) => {
  return (
    <div className={cn('flex flex-col gap-1', classes)}>
      <label className="relative inline-flex items-center cursor-pointer">
        <input
          checked={checked}
          onChange={onChange}
          type="checkbox"
          className="sr-only peer"
          {...restProps}
        />
        <div
          className="w-11 h-6 bg-gray-dark peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue rounded-full peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-dark after:border after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-green"
        />
      </label>
      {error && <span className="text-xs text-red">{error}</span>}
    </div>

  )
};

export default Toggle;