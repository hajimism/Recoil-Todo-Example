export type Todo = {
  title: string;
  state: TaskState;
  priority: Priority;
  description: string;
};

type TaskState = "To do" | "Doing" | "DONE🎉";
type Priority = "☆" | "☆☆" | "☆☆☆";
