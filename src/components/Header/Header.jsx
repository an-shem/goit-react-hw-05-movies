import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.headerList}>
        <NavLink
          className={styles.headerList__item}
          activeClassName={styles.headerList__activItem}
          exact
          to={`/`}
        >
          Home
        </NavLink>
        <NavLink
          className={styles.headerList__item}
          activeClassName={styles.headerList__activItem}
          to={`/movie`}
        >
          Movies
        </NavLink>
      </ul>
    </div>
  );
};

export default Header;
