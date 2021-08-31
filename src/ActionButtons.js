import { UserAddIcon, RefreshIcon, ReplyIcon } from "@heroicons/react/solid";
import Tippy from "@tippyjs/react";
const ActionButtons = ({ refresh, newUser, reset }) => {
  return (
    <div className="flex w-auto gap-2 p-2 my-4 ">
      <Tippy content="Add New User" delay={500}>
        <button onClick={newUser} className="bg-green-500 action-btn">
          {<UserAddIcon className="w-5 h-5" />}
        </button>
      </Tippy>
      <Tippy content="Refresh" delay={500}>
        <button onClick={refresh} className="bg-red-500 action-btn">
          {<RefreshIcon className="w-5 h-5" />}
        </button>
      </Tippy>

      <Tippy content="Reset" delay={500}>
        <button onClick={reset} className="bg-blue-500 action-btn">
          {<ReplyIcon className="w-5 h-5" />}
        </button>
      </Tippy>
    </div>
  );
};
export default ActionButtons;
