import { atom } from "recoil";
import { Todo } from "../types/Todo";

export const todoListState = atom<Todo[]>({
  key: "todoList",
  default: [
    {
      title: "Example",
      state: "Doing",
      priority: "☆☆",
      description: "An example task which I should do until tomorrow.",
    },
  ],
});
