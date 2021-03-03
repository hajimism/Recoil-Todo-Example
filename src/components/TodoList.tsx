import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "../selectors/SearchedTodoListSelector";
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

const TodoList: React.VFC = () => {
  // useRecoilValueにsearchedTodoListSelectorを渡す
  // 返される値はsearchedTodoListSelectorのget()で定義した通りTodo[]
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <table>
      <tr className="text-left">
        <th className="border p-1">Title</th>
        <th className="border p-1">State</th>
        <th className="border p-1">Priority</th>
      </tr>
      {list.map((todo, i: number) => {
        return <Task todo={todo} />;
      })}
    </table>
  );
};

export default TodoList;
