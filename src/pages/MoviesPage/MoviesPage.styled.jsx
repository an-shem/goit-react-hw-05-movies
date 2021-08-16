import styled from '@emotion/styled';

export const MoviesPageWrap = styled.div`
  padding-top: 20px;
  padding-left: 40px;
`;

export const SearchForm = styled.form`
  margin-bottom: 40px;
`;

export const SearchFormInput = styled.input`
  padding-left: 20px;
  width: 500px;
  height: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 1.3;
  letter-spacing: 0.03em;
  color: #123128da;
  border-radius: 10px;
  border: 2px solid #646262;

  &:focus {
    border: 2px solid #c75353;
  }
`;

export const SearchFormButton = styled.button`
  margin-left: 10px;
  width: 90px;
  height: 40px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 1.3;
  letter-spacing: 0.03em;
  color: #123128da;
  border-radius: 10px;
  border: 2px solid #646262;
  cursor: pointer;

  &:hover {
    color: #c75353;
    border: 2px solid #c75353;
  }
`;
