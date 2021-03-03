import TitleForm from "./components/TitleForm";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm";

const App: React.VFC = () => {
  return (
    <div className="m-2">
      <h1 className="text-4xl">Notion like To-do App</h1>
      <TitleForm />
      <AddButton />
      <SearchForm />
      <TodoList />
    </div>
  );
};

export default App;
