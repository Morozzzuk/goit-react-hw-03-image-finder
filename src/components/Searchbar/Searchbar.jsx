import { HiMagnifyingGlass } from 'react-icons/hi2';
import {
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
  SearchbarHeader,
} from './Searchbar.styled';

export default function Searchbar() {
  return (
    <SearchbarHeader className="searchbar">
      <SearchForm className="form">
        <SearchFormButton type="submit" class="button">
          <HiMagnifyingGlass size="24" fill="black" />
          <SearchFormButtonLabel className="button-label">
            Search
          </SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </SearchForm>
    </SearchbarHeader>
  );
}
