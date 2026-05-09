'use client';
import { useRef, ReactNode } from 'react';
import { useInView } from 'motion/react';

interface LazySectionProps {
  children: ReactNode;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

export default function LazySection({ 
  children, 
  threshold = 0, 
  rootMargin = "1200px 0px 1200px 0px", // Loads 1200px ahead
  className = "" 
}: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: threshold, margin: rootMargin as any });

  return (
    <div ref={ref} className={className}>
      {isInView ? children : <div className="min-h-[50vh] w-full" />}
    </div>
  );
}
