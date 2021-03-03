import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoTitleFormState } from "../atoms/TodoTitleFormAtom";
import { todoListState } from "../atoms/TodoListAtom";
import { Todo } from "../types/Todo";

const AddButton: React.VFC = () => {
  const todoList: Todo[] = useRecoilValue(todoListState);
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  const setTodoList: SetterOrUpdater<Todo[]> = useSetRecoilState(todoListState);
  const setTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(
    todoTitleFormState
  );

  const onClick = useCallback(() => {
    setTodoList([
      ...todoList,
      {
        title: todoTitleFormValue,
        state: "To do",
        priority: "☆☆☆",
        description: "",
      },
    ]);
    // タスクを追加したら入力欄は空にする
    setTitleFormValue("");
  }, [todoList, todoTitleFormValue, setTodoList, setTitleFormValue]);

  return (
    <button
      onClick={onClick}
      className="hover:bg-gray-100 cursor-pointer px-2 py-1"
    >
      Add
    </button>
  );
};

export default AddButton;
