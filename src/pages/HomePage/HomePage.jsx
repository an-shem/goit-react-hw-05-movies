import { useState, useEffect } from 'react';
import MoviesList from '../../components/MoviesList';
import movieApi from '../../services/movieApi.js';
import { ListWrap, Title } from './HomePage.styled';

export default function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState(null);

  useEffect(() => {
    movieApi
      .fetchTrendingMovies()
      .then(trendingMovies => setTrendingMovies(trendingMovies));
  }, []);

  return (
    <ListWrap>
      <Title>Trending today</Title>
      {trendingMovies && <MoviesList movies={trendingMovies} />}
    </ListWrap>
  );
}
