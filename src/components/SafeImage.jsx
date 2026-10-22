import { useEffect, useRef, useState } from 'react';
import placeholderFallback from '../assets/images/placeholder.svg';

/**
 * Image with a graceful fallback.
 *
 * Remote photographs may fail to load (offline, blocked, moved). In that case
 * we swap in a local placeholder so the layout never breaks — either when the
 * browser reports an error, or when the image still has not loaded after a
 * short grace period.
 *
 * Props:
 *  - src: image URL (local import or remote URL)
 *  - alt: required descriptive alt text
 *  - fallback: optional fallback src
 *  - lazy: lazy-load the image (default true)
 *  - timeoutMs: how long to wait for a remote image before falling back
 */
export default function SafeImage({
  src,
  alt,
  fallback = placeholderFallback,
  lazy = true,
  timeoutMs = 6000,
  className = '',
  imgClassName = '',
  ...rest
}) {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [failed, setFailed] = useState(false);
  const imgRef = useRef(null);

  const useFallback = () => {
    if (failed) return;
    setFailed(true);
    setCurrentSrc(fallback);
  };

  useEffect(() => {
    setCurrentSrc(src);
    setFailed(false);
  }, [src]);

  /* Grace period: if a remote image has not loaded in time, show the fallback. */
  useEffect(() => {
    if (failed || !timeoutMs) return undefined;
    const timer = window.setTimeout(() => {
      const image = imgRef.current;
      if (image && !image.complete) useFallback();
    }, timeoutMs);
    return () => window.clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSrc, failed, timeoutMs]);

  return (
    <div className={`overflow-hidden bg-surface ${className}`}>
      <img
        ref={imgRef}
        src={currentSrc}
        alt={alt}
        loading={lazy ? 'lazy' : 'eager'}
        decoding="async"
        onError={useFallback}
        className={`h-full w-full object-cover ${imgClassName}`}
        {...rest}
      />
    </div>
  );
}
