import { ExitIcon } from "@radix-ui/react-icons";
// Components
import { Dropdown } from "../Dropdown";
// Hooks
import { useAuth } from "../../../app/hooks/useAuth";

export function Menu() {
  const { onSignout } = useAuth();

  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white ">
          <span
            className="font-medium text-primary-500"
            // title={user.name}
          >
            WJ
            {/* {letters} */}
          </span>
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content className="w-32">
        <Dropdown.Item
          className="flex items-center justify-between"
          onSelect={onSignout}
        >
          <span>Exit</span>
          <ExitIcon className="w-4 h-4 mr-2" />
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
