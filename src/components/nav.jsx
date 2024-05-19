import { useEffect } from 'react';
import useBackgroundClass from '../hooks/backchange';
import Header from './header';
const Nav = () => {
  const backgroundClass = useBackgroundClass();

  useEffect(() => {
    document.body.className = backgroundClass;
  }, [backgroundClass]);

  return (
    <div>
      <Header />
    </div>
  );
};

export default Nav;