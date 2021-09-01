import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
//recibe el childer => lo que llega entre etiquetas
const ScrollToTop = () => {
  //
  const location = useLocation();
  
  useEffect(() => {
  //scrollearlo hacía arriba.
    window.scroll(0, 0);
  }, [location.pathname]);//lo ejecuta siempre que cambie la ruta

  return null;
};

export default ScrollToTop;