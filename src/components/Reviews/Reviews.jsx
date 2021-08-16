import { useState, useEffect, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';
import movieApi from '../../services/movieApi';
import Loading from '../Loading';

import { TitelError, List } from './Reviews.styled';

export default function Reviews({ id }) {
  const [dataReviews, setDataReviews] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    movieApi
      .fetchReviews(id)
      .then(({ results }) =>
        results.map(result => ({
          author: result.author,
          content: result.content,
          id: result.id,
        })),
      )
      .then(arrayData => {
        if (arrayData.length > 0) {
          setDataReviews(arrayData);
        } else {
          setShowNotFound(true);
        }
      })
      .catch(error => console.log(error))
      .finally(setIsLoading(false));
  }, [id]);

  useLayoutEffect(() => {
    window.scrollTo({
      top: 400,
      behavior: 'smooth',
    });
  }, [dataReviews, showNotFound]);

  return (
    <>
      {!isLoading && dataReviews && (
        <List>
          {dataReviews.map(({ author, content, id }) => (
            <li key={id}>
              <h3>Author: {author}</h3>
              <p>{content}</p>
            </li>
          ))}
        </List>
      )}
      {isLoading && <Loading />}
      {!isLoading && showNotFound && (
        <TitelError>We don't have any reviews for this movie</TitelError>
      )}
    </>
  );
}

Reviews.propTypes = {
  id: PropTypes.number,
};
