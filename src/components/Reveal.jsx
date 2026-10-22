import { motion, useReducedMotion } from 'framer-motion';

/**
 * Gentle "reveal on scroll" wrapper.
 * Respects the user's prefers-reduced-motion setting automatically.
 */
export default function Reveal({
  children,
  delay = 0,
  y = 22,
  className = '',
  as = 'div',
}) {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.div;

  if (reduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 0.61, 0.36, 1] }}
    >
      {children}
    </MotionTag>
  );
}
