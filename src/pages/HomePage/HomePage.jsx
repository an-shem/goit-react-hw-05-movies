import { Component } from 'react';
import MoviesList from '../../components/MoviesList';
import movieApi from '../../services/movieApi.js';
import styles from './HomePage.module.css';

class HomePage extends Component {
  state = {
    trendingMovies: null,
  };

  async componentDidMount() {
    await movieApi
      .fetchTrendingMovies()
      .then(trendingMovies => this.setState({ trendingMovies }));
  }

  render() {
    const { trendingMovies } = this.state;

    return (
      <div className={styles.listWrap}>
        <h1 className={styles.title}>Trending today</h1>
        {trendingMovies && <MoviesList movies={trendingMovies} />}
      </div>
    );
  }
}

export default HomePage;
