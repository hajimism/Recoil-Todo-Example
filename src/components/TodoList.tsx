import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "../selectors/SearchedTodoListSelector";
import { Todo } from "../types/Todo";
import Task from "./Task";

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
