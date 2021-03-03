import TitleForm from "./components/TitleForm";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm";

const App: React.VFC = () => {
  return (
    <>
      <h1 className="m-2">Notion like To-do App</h1>
      <TitleForm />
      <AddButton />
      <SearchForm />
      <TodoList />
    </>
  );
};

export default App;
