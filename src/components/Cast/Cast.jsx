import { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import movieApi from '../../services/movieApi.js';
import styles from './Cast.module.css';
import defaulImg from '../../images/unnamed.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w154';

class Cast extends Component {
  state = {
    dataCast: null,
    isLoading: false,
    showCast: false,
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
      .fetchCast(this.props.id)
      .then(({ cast }) =>
        cast.map(item => ({
          name: item.name,
          character: item.character,
          img: item.profile_path,
        })),
      )
      .then(arrayData => {
        if (arrayData.length > 0) {
          this.setState({
            dataCast: arrayData,
            showCast: true,
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
    const { dataCast, isLoading, showCast, showNotFound } = this.state;

    return (
      <>
        {isLoading && <Loading />}
        {!isLoading && showCast && (
          <ul className={styles.list}>
            {dataCast.map(({ name, character, img }) => {
              const authorImg = img ? `${IMAGE_URL}${img}` : defaulImg;
              return (
                <li className={styles.listItem} key={name}>
                  <div className={styles.imgWrapp}>
                    <img
                      className={styles.authorImg}
                      src={authorImg}
                      alt="actor"
                    />
                  </div>
                  <p>{name}</p>
                  <p>Character: {character}</p>
                </li>
              );
            })}
          </ul>
        )}
        {!isLoading && !showCast && showNotFound && (
          <h2 className={styles.titelError}>DATA NOT FOUND</h2>
        )}
      </>
    );
  }
}

Cast.propTypes = {
  id: PropTypes.number,
};

export default Cast;
