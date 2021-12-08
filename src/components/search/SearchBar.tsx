interface Props {
  searchValue: string;
  setSearchValue: (value: string) => void;
}

const SearchBar = ({ searchValue, setSearchValue }: Props) => (
  <input
    value={searchValue}
    onChange={(event) => setSearchValue(event.target.value)}
  />
);

export default SearchBar;
