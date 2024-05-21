import { ComponentProps, forwardRef } from "react";
// Icons
import { CrossCircledIcon } from "@radix-ui/react-icons";
// Utils
import { cn } from "../../../app/utils/cn";

interface InputProps extends ComponentProps<"input"> {
  name: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ name, id, className, placeholder, error, ...props }: InputProps, ref) => {
    const inputId = id ?? name;

    return (
      <div className="relative">
        <input
          {...props}
          ref={ref}
          name={name}
          id={inputId}
          className={cn(
            "w-full h-14 px-5 pt-4 rounded-3xl bg-primary-50 peer placeholder-shown:pt-0 focus:border-gray-700 outline-none transition-all",
            error && "!bg-red-100",
            className
          )}
          placeholder=" "
        />

        <label
          htmlFor={inputId}
          className="absolute text-xs top-1.5 left-5 pointer-events-none text-gray-800 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 transition-all"
        >
          {placeholder ?? name}
        </label>

        {error && (
          <div className="flex mt-1 gap-2 items-center text-red-900 text-xs">
            <CrossCircledIcon />
            <span>{error}</span>
          </div>
        )}
      </div>
    );
  }
);
