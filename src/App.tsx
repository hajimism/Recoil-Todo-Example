import TitleForm from "./components/TitleForm";
import AddButton from "./components/AddButton";
import TodoList from "./components/TodoList";
import SearchForm from "./components/SearchForm";

const App: React.VFC = () => {
  return (
    <>
      <TitleForm />
      <AddButton />
      <SearchForm />
      <TodoList />
    </>
  );
};

export default App;
