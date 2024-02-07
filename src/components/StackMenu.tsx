import { useRouter } from "next/navigation";
import React from "react";

interface StackMenuProps {
  onClose: () => void;
  onRename: () => void; // New prop for rename action
  stackid: number;
}

const StackMenu: React.FC<StackMenuProps> = ({
  onClose,
  onRename,
  stackid,
}) => {
  const router = useRouter();
  const handleSeeCards = () => {
    router.push(`/detail/cards?stack-id=${stackid}`);
  };

  return (
    <div className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      <ul>
        <li>
          <a onClick={handleSeeCards}>See Cards</a>
        </li>
        <li>
          <a onClick={onRename}>Rename</a>
        </li>
        <li>
          <a onClick={onClose}>Delete</a>
        </li>
        <li>
          <a onClick={onClose}>Cancel</a>
        </li>
      </ul>
    </div>
  );
};

export default StackMenu;
