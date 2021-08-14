import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/movie/:movieID" component={MovieDetailsPage} />
        <Route path="/movie" component={MoviesPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
};

export default App;
