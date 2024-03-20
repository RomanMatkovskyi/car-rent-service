import { SearchForm, BrandInput, SearchBtn } from './SearchBar.styled';

const SearchBar = () => {
  return (
    <>
      <SearchForm>
        <label>
          Car brand
          <BrandInput type="text" />
        </label>

        <SearchBtn type="submit">Search</SearchBtn>
      </SearchForm>
    </>
  );
};

export default SearchBar;
