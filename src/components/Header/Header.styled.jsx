import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderWrap = styled.div`
  padding: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderList = styled.ul`
  display: flex;
`;

export const HeaderListItem = styled.li`
  list-style-type: none;

  &:not(:last-child) {
    margin-right: 30px;
  }
`;

export const HeaderListItemNav = styled(NavLink)`
  font-weight: 700;
  font-size: 24px;
  line-height: 20px;
  letter-spacing: 0.03em;
  cursor: pointer;
  text-decoration: none;
  color: #363434;

  &:hover {
    text-decoration: underline;
  }

  &.active {
    color: #c75353;
  }
`;
