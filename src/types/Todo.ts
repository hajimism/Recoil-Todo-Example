export type Todo = {
  title: string;
  state: TaskState;
  priority: Priority;
  description: string;
};

export type TaskState = keyof typeof States;
export type Priority = keyof typeof Priorities;

export const States = {
  1: { label: "TODO", color: "#fff9c4" },
  2: { label: "DOING", color: "#f8bbd0" },
  3: { label: "DONE🎉", color: "#90caf9" },
} as const;

export const Priorities = {
  1: { label: "☆", color: "#e0e0e0" },
  2: { label: "☆☆", color: "#ff9a8c" },
  3: { label: "☆☆☆", color: "#fdd835" },
} as const;
