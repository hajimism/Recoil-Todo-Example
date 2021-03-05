import { Todo } from "../types/Todo";

export interface TaskModalProps {
  todo: Todo;
  toggle: () => void;
}

const TaskModal: React.SFC<TaskModalProps> = ({ todo, toggle }) => {
  const { title, state, priority, description } = todo;
  return (
    <div
      onClick={toggle}
      className="fixed inset-0 h-screen bg-white bg-opacity-90 flex justify-center items-center z-10"
    >
      <div className="w-11/12 max-w-screen-lg h-5/6 bg-white overflow-y-scroll z-20 flex items-center flex-col shadow-2xl rounded-sm">
        <div className="max-w-screen-md">
          <h1>{title}</h1>
          <ul>
            <li>State:{state}</li>
            <li>Priority:{priority}/</li>
          </ul>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;
