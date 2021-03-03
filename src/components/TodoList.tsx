import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "../selectors/SearchedTodoListSelector";
import { Todo } from "../types/Todo";

interface TaskProps {
  todo: Todo;
}
const Task: React.VFC<TaskProps> = ({ todo }) => {
  const { title, state, priority } = todo;
  return (
    <tr className="">
      <td className="border p-1 w-96">{title}</td>
      <td className="border p-1 w-20">{state}</td>
      <td className="border p-1 w-20">{priority}</td>
    </tr>
  );
};

const TodoList: React.VFC = () => {
  // useRecoilValueにsearchedTodoListSelectorを渡す
  // 返される値はsearchedTodoListSelectorのget()で定義した通りTodo[]
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <div>
      <p>タスク一覧</p>

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
    </div>
  );
};

export default TodoList;
