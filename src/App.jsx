import { Toaster } from 'react-hot-toast';

import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movie/:movieID">
          <MovieDetailsPage />
        </Route>
        <Route path="/movie">
          <MoviesPage />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
    </div>
  );
};

export default App;
