import { useEffect } from 'react';

const SITE_NAME = 'Dr. Khalid Khan Zadran | Consultant Neurosurgeon in Kabul';

function setMetaContent(selector, content) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement('meta');
    const [, attribute, value] = selector.match(/^\[([^\=]+)="([^"]+)"\]$/) || [];
    if (attribute && value) el.setAttribute(attribute, value);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

/**
 * Sets the document title, meta description and Open Graph tags for a page.
 * Usage: usePageMeta('About Dr. Khalid Khan Zadran', 'Professional biography ...');
 */
export default function usePageMeta(title, description) {
  useEffect(() => {
    const fullTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    document.title = fullTitle;

    if (description) {
      setMetaContent('meta[name="description"]', description);
      setMetaContent('meta[property="og:title"]', fullTitle);
      setMetaContent('meta[property="og:description"]', description);
      setMetaContent('meta[name="twitter:title"]', fullTitle);
      setMetaContent('meta[name="twitter:description"]', description);
    }
  }, [title, description]);
}
