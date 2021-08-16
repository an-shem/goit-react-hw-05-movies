import { useEffect, useState, useLayoutEffect } from 'react';
import PropTypes from 'prop-types';

import Loading from '../../components/Loading';
import {
  TitelError,
  List,
  ListItem,
  ImgWrapp,
  AuthorImg,
  Text,
} from './Cast.styled';

import movieApi from '../../services/movieApi.js';
import defaulImg from '../../images/unnamed.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w154';

export default function Cast({ id }) {
  const [dataCast, setDataCast] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [showNotFound, setShowNotFound] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    movieApi
      .fetchCast(id)
      .then(({ cast }) =>
        cast.map(item => ({
          name: item.name,
          character: item.character,
          img: item.profile_path,
        })),
      )
      .then(arrayData => {
        if (arrayData.length > 0) {
          setDataCast(arrayData);
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
  }, [dataCast, showNotFound]);

  return (
    <>
      {isLoading && <Loading />}
      {!isLoading && dataCast && (
        <List>
          {dataCast.map(({ name, character, img }) => {
            const authorImg = img ? `${IMAGE_URL}${img}` : defaulImg;
            return (
              <ListItem key={character + name}>
                <ImgWrapp>
                  <AuthorImg src={authorImg} alt="actor" />
                </ImgWrapp>
                <Text>{name}</Text>
                <Text>Character: {character}</Text>
              </ListItem>
            );
          })}
        </List>
      )}
      {!isLoading && showNotFound && <TitelError>DATA NOT FOUND</TitelError>}
    </>
  );
}

Cast.propTypes = {
  id: PropTypes.number.isRequired,
};
