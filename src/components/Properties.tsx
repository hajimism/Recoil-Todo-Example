import { Todo, States, Priorities } from "../types/Todo";

type StatePropertyProp = Pick<Todo, "state">;

export const StateProperty = ({ state }: StatePropertyProp) => {
  return (
    <div
      className="inline-block px-1 rounded"
      style={{ background: `${States[state].color}` }}
    >
      {States[state].label}
    </div>
  );
};

type PriorityPropertyProp = Pick<Todo, "priority">;

export const PriorityProperty = ({ priority }: PriorityPropertyProp) => {
  return (
    <div
      className="inline-block px-1 rounded"
      style={{ background: `${Priorities[priority].color}` }}
    >
      {Priorities[priority].label}
    </div>
  );
};
