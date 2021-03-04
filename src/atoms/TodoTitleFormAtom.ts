import { atom } from "recoil";
import { TaskState, Priority } from "../types/Todo";
export const todoTitleFormState = atom<string>({
  key: "todoTitleForm",
  default: "",
});

export const todoStateState = atom<TaskState>({
  key: "todoState",
  default: 1,
});

export const todoPriorityState = atom<Priority>({
  key: "todoPriority",
  default: 1,
});
