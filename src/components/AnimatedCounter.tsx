import { motion, useMotionValue, useTransform, animate } from 'motion/react';
import { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  value: string;
  duration?: number;
}

export function AnimatedCounter({ value, duration = 2 }: AnimatedCounterProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node || hasAnimated.current) return;

    // Extract number from value string (e.g., "500+" -> 500)
    const match = value.match(/\d+/);
    if (!match) return;

    const targetNumber = parseInt(match[0], 10);
    const suffix = value.replace(/\d+/, '');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated.current) {
            hasAnimated.current = true;
            
            const controls = animate(0, targetNumber, {
              duration,
              ease: 'easeOut',
              onUpdate(value) {
                if (node) {
                  node.textContent = Math.round(value) + suffix;
                }
              },
            });

            return () => controls.stop();
          }
        });
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [value, duration]);

  return <span ref={nodeRef}>0</span>;
}
