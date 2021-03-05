import { Todo } from "../types/Todo";
import { useToggle } from "../hooks/useToggle";
import TaskModal from "./TaskModal";
import { StateProperty, PriorityProperty } from "./Properties";

interface TaskProps {
  todo: Todo;
}

const Task: React.VFC<TaskProps> = ({ todo }) => {
  const { title, state, priority } = todo;
  const [isOpen, setIsOpen] = useToggle(false);
  return (
    <>
      <tr className="">
        <td className="border p-1 w-96 flex justify-between">
          <span>{title}</span>
          <span
            onClick={setIsOpen}
            className="hover:bg-gray-100 cursor-pointer px-2 rounded"
          >
            open
          </span>
        </td>
        <td className="border p-1 w-20">
          <StateProperty state={state} />
        </td>
        <td className="border p-1 w-20">
          <PriorityProperty priority={priority} />
        </td>
      </tr>
      {isOpen && <TaskModal todo={todo} toggle={setIsOpen} />}
    </>
  );
};

export default Task;
