import { ComponentProps, forwardRef } from "react";
// Components
import { MessageError } from "./components/MessageError";
// Utils
import { cn } from "../../../app/utils/cn";
import { FloatLabel } from "./components/FloatLabel";

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

        <FloatLabel inputId={inputId} label={placeholder ?? name} />

        {error && <MessageError message={error} />}
      </div>
    );
  }
);
