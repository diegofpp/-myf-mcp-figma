import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { slide, opacity, perspective } from '../animations/pageTransitions';

const anim = (variants: any) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    variants
  }
}

interface InnerProps {
  children: ReactNode;
  backgroundColor?: string;
}

export default function Inner({ children, backgroundColor = "#0a0b0a" }: InnerProps) {
  return (
    <div className='inner' style={{ backgroundColor }}>
      <motion.div className='slide' {...anim(slide)} />
      <motion.div className='page' {...anim(perspective)}>
        <motion.div {...anim(opacity)}>
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
