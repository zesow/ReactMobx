import React, { useRef, useEffect } from 'react';
import { useLocation, Switch } from 'react-router-dom';
import AppRoute from '../../utils/AppRoute';
import ScrollReveal from '../../utils/ScrollReveal';
import ReactGA from 'react-ga';

// Layouts
import LayoutDefault from '../../layouts/LayoutDefault';

// Views
import Home from './Home';

// Initialize Google Analytics
ReactGA.initialize(process.env.REACT_APP_GA_CODE);

const trackPage = page => {
  ReactGA.set({ page });
  ReactGA.pageview(page);
};

const Ninedoc = () => {

  const childRef = useRef();
  let location = useLocation();

  useEffect(() => {
    const page = location.pathname;
    document.body.classList.add('is-loaded')
    childRef.current.init();
    trackPage(page);
  }, [location]);

  return (
    <ScrollReveal
      ref={childRef}
      children={() => (
        <Home layout={LayoutDefault}/>
      )} />
  );
}

export default Ninedoc;
