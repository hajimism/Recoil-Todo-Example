import { atom } from "recoil";
import { Todo } from "../types/Todo";

export const todoListState = atom<Todo[]>({
  // keyは"todoList"
  key: "todoList",
  // 初期値として3件のタスクを持つ配列を宣言
  default: [{ title: "one" }, { title: "two" }, { title: "three" }],
});
