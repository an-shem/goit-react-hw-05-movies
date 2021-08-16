import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, ListItem } from './MoviesList.styled';

const MoviesList = ({ movies }) => {
  const location = useLocation();

  if (!movies) return null;
  return (
    <List>
      {movies.map(movie => {
        const { id, title } = movie;

        return (
          <ListItem key={id}>
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
          </ListItem>
        );
      })}
    </List>
  );
};

MoviesList.propTypes = {
  movies: PropTypes.array,
};

export default MoviesList;
