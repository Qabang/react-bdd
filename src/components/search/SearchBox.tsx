import SearchBar from "./SearchBar";

interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBox = ({ searchValue, setSearchValue }: Props) => {
  return (
    <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
  );
};

export default SearchBox;
