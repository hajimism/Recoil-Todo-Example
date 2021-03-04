import * as React from "react";
import { States, TaskState } from "../types/Todo";

export interface StateItemProps {
  key: TaskState;
}

const StateItem: React.VFC<StateItemProps> = ({ key }) => (
  <div
    className="inline-block px-1 rounded"
    style={{ background: `${States[key].color}` }}
  >
    {States[key].label}
  </div>
);

export default StateItem;
