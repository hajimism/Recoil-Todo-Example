import { useCallback } from "react";
import { useRecoilState } from "recoil";
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

  const [todoTitleForm, setTodoTitle] = useRecoilState<string>(
    todoTitleFormState
  );
  const [todoState, setTodoState] = useRecoilState<TaskState>(todoStateState);
  const [todoPriority, setTodoPriority] = useRecoilState<Priority>(
    todoPriorityState
  );
  const [todoList, setTodoList] = useRecoilState<Todo[]>(todoListState);

  const onSubmit = (data: Todo) => {
    setTodoState(data.state);
    setTodoPriority(data.priority);
    // TODOを追加
    setTodoList([
      ...todoList,
      {
        title: todoTitleForm ? todoTitleForm : "",
        state: todoState ? todoState : 1,
        priority: todoPriority ? todoPriority : 1,
        description: "",
      },
    ]);
    setTodoTitle("");
  };

  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // 先に取得したsetTodoTitleFormValueに対して更新したい値を渡して実行
      setTodoTitle(event.target.value);
    },
    [setTodoTitle]
  );

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="title"
        ref={register}
        onChange={onChange}
        placeholder="Add new task..."
        className="hover:bg-gray-100 cursor-pointer m-4 mb-2 px-2 py-1"
      />

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

      <input
        type="submit"
        value="Add"
        className="hover:bg-gray-100 cursor-pointer m-4 mb-2 px-2 py-1"
      />
    </form>
  );
};

export default Form;
