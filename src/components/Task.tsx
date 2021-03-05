import { Todo, States, Priorities } from "../types/Todo";

interface TaskProps {
  todo: Todo;
}

const Task: React.VFC<TaskProps> = ({ todo }) => {
  const { title, state, priority } = todo;
  return (
    <tr className="">
      <td className="border p-1 w-96">{title}</td>
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
  );
};

export default Task;
