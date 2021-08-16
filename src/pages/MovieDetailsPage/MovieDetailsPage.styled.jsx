import styled from '@emotion/styled';

export const MoviePage = styled.div`
  padding-top: 10px;
  padding-left: 40px;
`;

export const Btn = styled.button`
  padding: 4px 10px;
  border-radius: 4px;
  cursor: pointer;
  border: 2px solid #444242;

  &:hover {
    color: #c75353;
    border: 2px solid #c75353;
  }
`;

export const AboutFilm = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const PosterWrap = styled.div`
  width: 300px;
  height: 450px;
`;

export const Poster = styled.img`
  width: 300px;
  height: 450px;
  object-fit: cover;
`;

export const Inform = styled.div`
  padding: 20px;
`;

export const Titel = styled.h2`
  margin-bottom: 20px;
`;

export const InformItem = styled.p`
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

export const InformItemTitel = styled.h3`
  margin-bottom: 20px;
`;

export const AdditionalInformation = styled.div`
  margin-top: 10px;
  padding: 10px 40px;
  border-bottom: 1px solid rgb(82, 79, 79);
  border-top: 1px solid rgb(82, 79, 79);
`;

export const AdditionalInformationTitel = styled.h3`
  margin-bottom: 10px;
`;

export const AdditionalInformationItem = styled.li`
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;
