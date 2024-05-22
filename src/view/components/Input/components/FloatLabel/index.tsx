type FloatLabelProps = {
  inputId?: string;
  label?: string;
};

export function FloatLabel({ inputId, label }: FloatLabelProps) {
  return (
    <label
      htmlFor={inputId}
      className="absolute text-xs top-1.5 left-5 pointer-events-none text-gray-800 peer-placeholder-shown:text-base peer-placeholder-shown:top-4 transition-all"
    >
      {label ?? "Enter value"}
    </label>
  );
}
