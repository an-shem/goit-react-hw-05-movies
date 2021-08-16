import { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import queryString from 'query-string';

import MoviesList from '../../components/MoviesList';
import movieApi from '../../services/movieApi.js';
import {
  MoviesPageWrap,
  SearchForm,
  SearchFormInput,
  SearchFormButton,
} from './MoviesPage.styled';

export default function MoviesPage() {
  const [searchMovies, setSearchMovies] = useState(null);

  const history = useHistory();
  const { search, pathname } = useLocation();

  useEffect(() => {
    const searchNoParse = search;

    if (!searchNoParse) return;
    const searchParse = queryString.parse(searchNoParse);
    const searchQuery = searchParse.query;

    movieApi
      .fetchSearchMovies(searchQuery)
      .then(searchMovies => setSearchMovies(searchMovies));
  }, [search]);

  const handeleSubmit = e => {
    e.preventDefault();
    const searchValue = e.target.InputSearch.value;
    const processedSearchValue = searchValue.trim();
    if (processedSearchValue.length === 0) return;

    history.push({
      pathname: pathname,
      search: `query=${searchValue}`,
    });

    e.target.InputSearch.value = '';
  };

  return (
    <MoviesPageWrap>
      <SearchForm onSubmit={handeleSubmit}>
        <SearchFormInput
          type="text"
          name="InputSearch"
          autoComplete="off"
          autoFocus
        />

        <SearchFormButton type="submit">
          <span>Search</span>
        </SearchFormButton>
      </SearchForm>
      {searchMovies && <MoviesList movies={searchMovies} />}
    </MoviesPageWrap>
  );
}
