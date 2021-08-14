import { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

import movieApi from '../../services/movieApi';
import styles from './MovieDetailsPage.module.css';
import defaulImg from '../../images/unnamed.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

class MovieDetailsPage extends Component {
  state = {
    movie: null,
    pathname: this.props.location.state.from.pathname,
    location: this.props.location,
  };

  componentDidMount() {
    const movieId = +this.props.match.params.movieID;
    movieApi.fetchMovie(movieId).then(movie => {
      this.setState({ movie });
    });
  }

  handleGoBack = () => {
    const { state } = this.props.location;
    if (state) {
      this.props.history.push({
        pathname: state.from.pathname,
        search: state.from.search,
      });

      return;
    }

    this.props.history.push({
      pathname: '/',
    });
  };

  render() {
    if (!this.state.movie) return null;

    const {
      id,
      genres,
      original_title: title,
      poster_path: imgUrl,
      overview,
      vote_average,
      release_date,
    } = this.state.movie;

    const ganresMovie = genres.map(item => item.name).join(' ');
    const path = this.props.match.url;
    const fullImageUrl = `${IMAGE_URL}${imgUrl}`;
    const imageUrl = imgUrl ? fullImageUrl : defaulImg;

    return (
      <>
        <div className={styles.moviePage}>
          <button
            type="button"
            onClick={this.handleGoBack}
            className={styles.btn}
          >
            {'<- Go beck'}
          </button>
          <div className={styles.aboutFilm}>
            <div className={styles.posterWrap}>
              <img src={imageUrl} alt="poster" className={styles.poster} />
            </div>
            <div className={styles.inform}>
              <h2 className={styles.titel}>
                {`${title}  (${Number.parseInt(release_date)})`}
              </h2>
              <p className={styles.informItem}>
                User Score: {vote_average * 10}%
              </p>
              <h3 className={styles.informItem}>Overview</h3>
              <p className={styles.informItem}>{overview}</p>
              <h3 className={styles.informItem}>Genres</h3>
              <p className={styles.informItem}>{ganresMovie}</p>
            </div>
          </div>
        </div>

        <div className={styles.additionalInformation}>
          <h3 className={styles.additionalInformationTitel}>
            Additional information
          </h3>
          <ul>
            <li className={styles.additionalInformationItem}>
              <Link
                to={{
                  pathname: `${path}/cast`,
                  state: {
                    from: this.state.location.state.from,
                  },
                }}
              >
                Cast
              </Link>
            </li>
            <li className={styles.additionalInformationItem}>
              <Link
                to={{
                  pathname: `${path}/reviews`,
                  state: {
                    from: this.state.location.state.from,
                  },
                }}
              >
                Reviews
              </Link>
            </li>
          </ul>
        </div>
        <Switch>
          <Route
            path={`${this.props.match.path}/cast`}
            render={props => <Cast {...props} id={id} />}
          />
          <Route
            path={`${this.props.match.path}/reviews`}
            render={props => <Reviews {...props} id={id} />}
          />
        </Switch>
      </>
    );
  }
}

export default MovieDetailsPage;
