import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Keeps the browser history "saved position" behaviour sane:
 * browsers restore scroll on back/forward, but a SPA needs an explicit reset
 * on push-navigation. RouteChangeHandler in App.jsx performs the actual scroll;
 * this hook documents the intent and is reused for focus management.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Move focus to the page container so screen readers announce the new page.
    const main = document.getElementById('main-content');
    if (main) {
      main.setAttribute('tabindex', '-1');
      main.focus({ preventScroll: true });
    }
  }, [pathname]);

  return null;
}
