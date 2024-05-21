import { NumericFormat } from "react-number-format";
import { CrossCircledIcon } from "@radix-ui/react-icons";
// Utils
import { cn } from "../../../../../app/utils/cn";

type InputProps = {
  className?: string;
  value?: string | number;
  error?: string;
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
};

export function InputCurrency({ value, placeholder, className, error, onChange }: InputProps) {
  return (
    <div className="relative">
      <NumericFormat
        defaultValue={value}
        thousandSeparator="."
        decimalSeparator=","
        placeholder={placeholder}
        onChange={onChange}
        className={cn(
          "w-full !text-gray-800 text-[32px] font-bold tracking-[-0.5px] !outline-none",
          className
        )}
      />

      {error && (
        <div className="flex mt-1 gap-2 items-center text-red-900 text-xs">
          <CrossCircledIcon />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}
