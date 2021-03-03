import { useRecoilValue } from "recoil";
import { searchedTodoListSelector } from "../selectors/SearchedTodoListSelector";
import { Todo } from "../types/Todo";

interface TaskProps {
  todo: Todo;
}
const Task: React.VFC<TaskProps> = ({ todo }) => {
  const { title, state, priority } = todo;
  return (
    <div>
      <div>{title}</div>
      <div>{state}</div>
      <div>{priority}</div>
    </div>
  );
};

const TodoList: React.VFC = () => {
  // useRecoilValueにsearchedTodoListSelectorを渡す
  // 返される値はsearchedTodoListSelectorのget()で定義した通りTodo[]
  const list: Todo[] = useRecoilValue(searchedTodoListSelector);
  return (
    <div>
      <p>タスク一覧</p>
      <ul>
        {list.map((todo, i: number) => {
          return (
            <li key={`${todo.title}_${i}`}>
              <Task todo={todo} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
