import { ComponentProps, forwardRef } from "react";
//
import { IMaskInput } from "react-imask";
// Components
import { cn } from "../../../../../app/utils/cn";
import { MessageError } from "../../components/MessageError";

interface InputProps extends ComponentProps<"input"> {
  value?: string;
  className?: string;
  placeholder?: string;
  mask: string;
  error?: string;
}

export const InputMask = forwardRef<HTMLInputElement, InputProps>(
  (
    { mask, error, className, value, placeholder, ...props }: InputProps,
    ref
  ) => {
    const hasValue = value != null && value.length > 0;

    return (
      <div className="relative">
        <IMaskInput
          {...props}
          radix="_"
          ref={ref}
          mask={mask}
          value={value}
          inputRef={ref}
          unmask={true}
          className={cn(
            "w-full h-14 px-5 pt-4 rounded-3xl bg-primary-50 focus:border-gray-700 outline-none transition-all",
            error && "!bg-red-100",
            !hasValue && "pt-0",
            className
          )}
        />

        <label
          className={cn(
            "absolute text-xs top-1.5 left-5 pointer-events-none text-gray-800 transition-all",
            !hasValue && "text-base top-4"
          )}
        >
          {placeholder}
        </label>

        {error && <MessageError message={error} />}
      </div>
    );
  }
);
