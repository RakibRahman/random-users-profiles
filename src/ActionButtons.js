import { UserAddIcon, RefreshIcon } from "@heroicons/react/solid";

const ActionButtons = ({ refresh, newUser }) => {
  return (
    <div className="flex gap-2">
      <button
        onClick={refresh}
        className="px-2 py-1 text-white bg-red-500 rounded-md"
      >
        {<RefreshIcon className="w-5 h-5" />}
      </button>
      <button
        onClick={newUser}
        className="px-2 py-1 text-white bg-green-500 rounded-md"
      >
        {<UserAddIcon className="w-5 h-5" />}
      </button>
    </div>
  );
};
export default ActionButtons;
