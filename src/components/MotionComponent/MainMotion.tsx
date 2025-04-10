import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface MainMotionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export const MainMotion = ({ children, className, delay }: MainMotionProps) => {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, delay: delay ?? 0 }}
      viewport={{ once: true }}
      className={className}
    >
      {children}
    </motion.main>
  );
};
