import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState, SetterOrUpdater } from "recoil";
import { searchTextFormState } from "../atoms/SearchTextFormAtom";

const SearchForm: React.VFC = () => {
  const searchTextFormValue: string = useRecoilValue(searchTextFormState);
  const setSearchTextFormValue: SetterOrUpdater<string> = useSetRecoilState(
    searchTextFormState
  );
  const onChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTextFormValue(event.target.value);
    },
    [setSearchTextFormValue]
  );

  return (
    <input
      type="text"
      value={searchTextFormValue}
      onChange={onChange}
      name="title"
      placeholder="Type to Search..."
      style={{ margin: 12 }}
    />
  );
};

export default SearchForm;
