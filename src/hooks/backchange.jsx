import { useEffect, useState, useCallback } from 'react';
import { useLocation } from 'react-router-dom';


const useBackgroundClass = () => {
    const location = useLocation();
  
    const getBackgroundClass = useCallback(() => {
      switch (location.pathname) {
        case '/proyects':
          return 'background-3';
        case '/about':
          return 'background-2';
        default:
          return 'background-1';
      }
    }, [location.pathname]);
  
    const [backgroundClass, setBackgroundClass] = useState(getBackgroundClass());
  
    useEffect(() => {
      setBackgroundClass(getBackgroundClass());
    }, [getBackgroundClass]);
  
    return backgroundClass;
  };
  
  export default useBackgroundClass;