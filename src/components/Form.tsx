import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import {
  todoTitleFormState,
  todoStateState,
  todoPriorityState,
} from "../atoms/TodoTitleFormAtom";
import { todoListState } from "../atoms/TodoListAtom";
import { Todo, TaskState, Priority } from "../types/Todo";
import { useForm } from "react-hook-form";

// 新規TODOを追加するためのフォーム
const Form: React.VFC = () => {
  const { register, handleSubmit } = useForm();

  //   TODOのタイトルの値と更新関数
  const todoTitleForm = useRecoilValue<string>(todoTitleFormState);
  const setTodoTitle: SetterOrUpdater<string> = useSetRecoilState(
    todoTitleFormState
  );

  //   TODOの状態の値と更新関数
  const todoState = useRecoilValue<TaskState>(todoStateState);
  const setTodoState: SetterOrUpdater<TaskState> = useSetRecoilState(
    todoStateState
  );

  //   TODOの優先度の値と更新関数
  const todoPriority = useRecoilValue<Priority>(todoPriorityState);
  const setTodoPriority: SetterOrUpdater<Priority> = useSetRecoilState(
    todoPriorityState
  );

  //   TODOリストの値と更新関数
  const todoList: Todo[] = useRecoilValue(todoListState);
  const setTodoList: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState);

  const onSubmit = (data: Todo) => {
    setTodoTitle(data.title);
    setTodoState(data.state);
    setTodoPriority(data.priority);
    // TODOを追加
    setTodoList([
      ...todoList,
      {
        title: todoTitleForm,
        state: todoState,
        priority: todoPriority,
        description: "",
      },
    ]);
    setTodoTitle("");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="title" ref={register} placeholder="Add new task..." />

      <select name="state" ref={register}>
        <option value="">Select...</option>
        <option value="1">TODO</option>
        <option value="2">DOING</option>
        <option value="3">DONE</option>
      </select>

      <select name="priority" ref={register}>
        <option value="">Select...</option>
        <option value="1">☆</option>
        <option value="2">☆☆</option>
        <option value="3">☆☆☆</option>
      </select>

      <input type="submit" />
    </form>
  );
};

export default Form;
