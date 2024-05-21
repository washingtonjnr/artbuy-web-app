// Components
import { Dropdown } from "../Dropdown";
// Hooks
import { ExitIcon } from "@radix-ui/react-icons";

export function Menu() {
  return (
    <Dropdown.Root>
      <Dropdown.Trigger>
        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-50 ">
          {/* <span className="text-teal-900 font-medium" title={user.name}>
            {letters}
          </span> */}
          menu
        </div>
      </Dropdown.Trigger>

      <Dropdown.Content className="w-32">
        <Dropdown.Item className="flex items-center justify-between">
          <span>Exit</span>
          <ExitIcon className="w-4 h-4 mr-2" />
        </Dropdown.Item>
      </Dropdown.Content>
    </Dropdown.Root>
  );
}
