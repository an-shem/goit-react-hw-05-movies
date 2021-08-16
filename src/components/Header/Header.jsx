import {
  HeaderWrap,
  HeaderList,
  HeaderListItem,
  HeaderListItemNav,
} from './Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
      <HeaderList>
        <HeaderListItem>
          <HeaderListItemNav exact to={`/`}>
            Home
          </HeaderListItemNav>
        </HeaderListItem>
        <HeaderListItem>
          <HeaderListItemNav to={`/movie`}>Movies</HeaderListItemNav>
        </HeaderListItem>
      </HeaderList>
    </HeaderWrap>
  );
};

export default Header;
