import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { todoTitleFormState } from "../atoms/TodoTitleFormAtom";

const TitleForm: React.VFC = () => {
  // useRecoilValueでtodoTitleFormStateの値を取得
  const todoTitleFormValue: string = useRecoilValue(todoTitleFormState);
  // useSetRecoilStateでtodoTitleFormStateの値を更新するSetter関数を取得
  const setTodoTitleFormValue: SetterOrUpdater<string> = useSetRecoilState(
    todoTitleFormState
  );
  // テキストフィールドのonChange処理
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      // 先に取得したsetTodoTitleFormValueに対して更新したい値を渡して実行
      setTodoTitleFormValue(event.target.value);
    },
    [setTodoTitleFormValue]
  );

  return (
    <input
      type="text"
      value={todoTitleFormValue}
      onChange={onChange}
      name="title"
      placeholder="Add new task..."
      className="hover:bg-gray-100 cursor-pointer m-4 mb-2 px-2 py-1"
    />
  );
};

export default TitleForm;
