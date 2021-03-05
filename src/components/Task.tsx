import { Todo, States, Priorities } from "../types/Todo";
import { useToggle } from "../hooks/useToggle";
import TaskModal from "./TaskModal";

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
          <span onClick={setIsOpen}>open</span>
        </td>
        <td className="border p-1 w-20">
          <div
            className="inline-block px-1 rounded"
            style={{ background: `${States[state].color}` }}
          >
            {States[state].label}
          </div>
        </td>
        <td className="border p-1 w-20">
          <div
            className="inline-block px-1 rounded"
            style={{ background: `${Priorities[priority].color}` }}
          >
            {Priorities[priority].label}
          </div>
        </td>
      </tr>
      {isOpen && <TaskModal todo={todo} toggle={setIsOpen} />}
    </>
  );
};

export default Task;
