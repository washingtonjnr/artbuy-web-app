import { Logo } from "../Logo";

type LaunchScreenProps = {
  isLoading: boolean;
};

export function LaunchScreen({ isLoading }: LaunchScreenProps) {
  return (
    isLoading && (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-4 w-full h-full fixed top-0 left-0 bg-primary-900">
          <Logo className="text-white" />
        </div>
      </div>
    )
  );
}
