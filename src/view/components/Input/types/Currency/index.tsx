import { NumericFormat } from "react-number-format";
// Components
import { MessageError } from "../../components/MessageError";
// Utils
import { cn } from "../../../../../app/utils/cn";

type InputProps = {
  className?: string;
  value?: string | number;
  error?: string;
  placeholder?: string;
  onChange?(event: React.ChangeEvent<HTMLInputElement>): void;
};

export function InputCurrency({
  value,
  placeholder,
  className,
  error,
  onChange,
}: InputProps) {
  return (
    <div className="relative">
      <NumericFormat
        defaultValue={value}
        thousandSeparator="."
        decimalSeparator=","
        placeholder={placeholder}
        onChange={onChange}
        className={cn(
          "w-full h-14 px-5 pt-4 rounded-3xl bg-primary-50 peer placeholder-shown:pt-0 focus:border-gray-700 outline-none transition-all",
          error && "!bg-red-100",
          className
        )}
      />

      {error && <MessageError message={error} />}
    </div>
  );
}
