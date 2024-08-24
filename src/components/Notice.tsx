import { useNotice } from '../hooks/useNotice';
import Banner from './Banner';

const Notice = () => {
  const hasNotice = useNotice('');
  if (!hasNotice) return null;
  return <Banner>Hello</Banner>;
};

export default Notice;
