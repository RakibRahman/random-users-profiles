import { UserAddIcon, RefreshIcon, ReplyIcon } from "@heroicons/react/solid";

const ActionButtons = ({ refresh, newUser, reset }) => {
  return (
    <div className="flex flex-col w-10 gap-2">
      <button onClick={newUser} className="bg-green-500 action-btn">
        {<UserAddIcon className="w-5 h-5" />}
      </button>
      <button onClick={refresh} className="bg-red-500 action-btn">
        {<RefreshIcon className="w-5 h-5" />}
      </button>

      <button onClick={reset} className="bg-blue-500 action-btn">
        {<ReplyIcon className="w-5 h-5" />}
      </button>
    </div>
  );
};
export default ActionButtons;
