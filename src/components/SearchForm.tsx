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
      className="hover:bg-gray-100 cursor-pointer m-4 mb-2 px-2 py-1"
    />
  );
};

export default SearchForm;
