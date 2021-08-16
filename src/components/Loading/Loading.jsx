import Loader from 'react-loader-spinner';
import { WrapperLoader } from './Loading.styled';

const Loading = () => {
  return (
    <WrapperLoader>
      <Loader type="Circles" color="#c75353" height={100} width={100} />
    </WrapperLoader>
  );
};

export default Loading;
