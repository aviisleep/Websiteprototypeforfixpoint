import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface FloatingElementProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  rotate?: number;
  scale?: number;
  className?: string;
}

export function FloatingElement({
  children,
  delay = 0,
  duration = 4,
  x = 20,
  y = 20,
  rotate = 5,
  scale = 1,
  className = '',
}: FloatingElementProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: [0, 1, 1],
        y: [20, 0, y, 0],
        x: [0, x, 0, -x, 0],
        rotate: [0, rotate, -rotate, 0],
        scale: [1, scale, 1],
      }}
      transition={{
        duration: duration,
        delay: delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </motion.div>
  );
}
