import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './MoviesList.module.css';

const MoviesList = props => {
  const { movies, location } = props;

  if (!movies) return null;
  return (
    <ul className={styles.list}>
      {movies.map(movie => {
        const { id, title } = movie;

        return (
          <li key={id} className={styles.link}>
            <Link
              to={{
                pathname: `/movie/${id}`,
                state: {
                  from: location,
                },
              }}
            >
              {title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
  location: PropTypes.object,
};

export default withRouter(MoviesList);
