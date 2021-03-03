import { atom } from "recoil";
import { Todo } from "../types/Todo";

export const todoListState = atom<Todo[]>({
  key: "todoList",
  default: [
    {
      title: "Example1",
      state: 1,
      priority: 1,
      description: "An example task which I should do until tomorrow.",
    },
    {
      title: "Example2",
      state: 2,
      priority: 2,
      description: "An example task which I should do until tomorrow.",
    },
    {
      title: "Example3",
      state: 3,
      priority: 3,
      description: "An example task which I should do until tomorrow.",
    },
  ],
});
