import { useState, useEffect } from 'react';
import {
  Link,
  Route,
  Switch,
  useLocation,
  useRouteMatch,
  useHistory,
} from 'react-router-dom';
import Cast from '../../components/Cast';
import Reviews from '../../components/Reviews';

import movieApi from '../../services/movieApi';
import {
  MoviePage,
  Btn,
  AboutFilm,
  PosterWrap,
  Poster,
  Inform,
  Titel,
  InformItem,
  InformItemTitel,
  AdditionalInformation,
  AdditionalInformationTitel,
  AdditionalInformationItem,
} from './MovieDetailsPage.styled';
import defaulImg from '../../images/unnamed.png';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';

export default function MovieDetailsPage() {
  const [movie, setMovie] = useState(null);
  const { state } = useLocation();
  const {
    params: { movieID },
    path,
    url,
  } = useRouteMatch();
  const history = useHistory();

  useEffect(() => {
    const movieId = Number(movieID);
    movieApi.fetchMovie(movieId).then(movie => {
      setMovie(movie);
    });
  }, [movieID]);

  const handleGoBack = () => {
    if (state) {
      history.push({
        pathname: state.from.pathname,
        search: state.from.search,
      });
      return;
    }
    history.push('/');
  };

  if (!movie) return null;

  const {
    id,
    genres,
    original_title: title,
    poster_path: imgUrl,
    overview,
    vote_average,
    release_date,
  } = movie;

  const ganresMovie = genres.map(item => item.name).join(' ');
  const fullImageUrl = `${IMAGE_URL}${imgUrl}`;
  const imageUrl = imgUrl ? fullImageUrl : defaulImg;

  return (
    <>
      <MoviePage>
        <Btn type="button" onClick={handleGoBack}>
          {'<- Go beck'}
        </Btn>
        <AboutFilm>
          <PosterWrap>
            <Poster src={imageUrl} alt="poster" />
          </PosterWrap>
          <Inform>
            <Titel>{`${title}  (${Number.parseInt(release_date)})`}</Titel>
            <InformItem>User Score: {vote_average * 10}%</InformItem>
            <InformItemTitel>Overview</InformItemTitel>
            <InformItem>{overview}</InformItem>
            <InformItemTitel>Genres</InformItemTitel>
            <InformItem>{ganresMovie}</InformItem>
          </Inform>
        </AboutFilm>
      </MoviePage>

      <AdditionalInformation>
        <AdditionalInformationTitel>
          Additional information
        </AdditionalInformationTitel>
        <ul>
          <AdditionalInformationItem>
            <Link
              to={{
                pathname: `${url}/cast`,
                state: state
                  ? {
                      from: state.from,
                    }
                  : null,
              }}
            >
              Cast
            </Link>
          </AdditionalInformationItem>
          <AdditionalInformationItem>
            <Link
              to={{
                pathname: `${url}/reviews`,
                state: state
                  ? {
                      from: state.from,
                    }
                  : null,
              }}
            >
              Reviews
            </Link>
          </AdditionalInformationItem>
        </ul>
      </AdditionalInformation>
      <Switch>
        <Route path={`${path}/cast`}>
          <Cast id={id} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews id={id} />
        </Route>
      </Switch>
    </>
  );
}
