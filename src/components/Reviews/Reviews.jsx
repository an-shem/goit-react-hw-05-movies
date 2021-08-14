import { Component } from 'react';
import PropTypes from 'prop-types';
import movieApi from '../../services/movieApi';
import Loading from '../Loading';

import styles from './Reviews.module.css';

class Reviews extends Component {
  state = {
    dataReviews: null,
    isLoading: false,
    showReviews: false,
    showNotFound: false,
    timerId: null,
  };

  componentDidMount() {
    const timerId = setTimeout(
      () => this.setState({ showNotFound: true }),
      1000,
    );

    this.setState({ isLoading: true, timerId });

    movieApi
      .fetchReviews(this.props.id)
      .then(({ results }) =>
        results.map(result => ({
          author: result.author,
          content: result.content,
          id: result.id,
        })),
      )
      .then(arrayData => {
        if (arrayData.length > 0) {
          this.setState({
            dataReviews: arrayData,
            showReviews: true,
          });
        }
      })
      .catch(error => console.log(error))
      .finally(this.setState({ isLoading: false }));
  }

  componentWillUnmount() {
    clearTimeout(this.state.timerId);
  }

  render() {
    const { dataReviews, isLoading, showReviews, showNotFound } = this.state;
    const ttt = (
      <h2 className={styles.titelError}>
        We don't have any reviews for this movie
      </h2>
    );

    return (
      <>
        {!isLoading && showReviews && (
          <ul className={styles.list}>
            {dataReviews.map(({ author, content, id }) => (
              <li key={id}>
                <h3>Author: {author}</h3>
                <p>{content}</p>
              </li>
            ))}
          </ul>
        )}
        {isLoading && <Loading />}
        {!isLoading && !showReviews && showNotFound && ttt}
      </>
    );
  }
}

Reviews.propTypes = {
  id: PropTypes.number,
};

export default Reviews;
