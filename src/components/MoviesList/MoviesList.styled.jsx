import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const ListItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 6px;
  }
`;
