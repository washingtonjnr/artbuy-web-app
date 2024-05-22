import { CrossCircledIcon } from "@radix-ui/react-icons";

export function MessageError({ message }: { message: string }) {
  return (
    <div className="text-left flex mt-1 gap-2 items-center text-red-900 text-xs">
      <CrossCircledIcon className="w-4" />

      <div className="flex-1">{message}</div>
    </div>
  );
}
