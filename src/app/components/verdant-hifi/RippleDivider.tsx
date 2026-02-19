import { motion } from 'motion/react';

interface RippleDividerProps {
  color?: string;
  flip?: boolean;
}

export function RippleDivider({ color = '#fafaf9', flip = false }: RippleDividerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: flip ? -20 : 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={`w-full ${flip ? 'rotate-180' : ''}`}
    >
      <svg
        viewBox="0 0 1440 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-16 sm:h-20 lg:h-24"
        preserveAspectRatio="none"
      >
        <path
          d="M0,60 Q360,10 720,60 T1440,60 L1440,120 L0,120 Z"
          fill={color}
        />
      </svg>
    </motion.div>
  );
}
