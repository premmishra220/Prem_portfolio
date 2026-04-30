import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = '', onClick, href, type = 'button' }) => {
  const ref = useRef(null);
  const [magnetic, setMagnetic] = useState({ x: 0, y: 0 });

  const handleMouseMove = (event) => {
    const button = ref.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    const x = (event.clientX - rect.left - rect.width / 2) * 0.15;
    const y = (event.clientY - rect.top - rect.height / 2) * 0.15;

    setMagnetic({ x, y });
  };

  const resetMagnetic = () => {
    setMagnetic({ x: 0, y: 0 });
  };

  const sharedProps = {
    ref,
    onMouseMove: handleMouseMove,
    onMouseLeave: resetMagnetic,
    style: {
      transform: `translate3d(${magnetic.x}px, ${magnetic.y}px, 0)`,
    },
    className: `relative overflow-hidden transition-transform duration-300 ${className}`,
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.96 },
    onClick,
    type,
  };

  if (href) {
    return (
      <motion.a {...sharedProps} href={href} target="_blank" rel="noreferrer">
        {children}
      </motion.a>
    );
  }

  return <motion.button {...sharedProps}>{children}</motion.button>;
};

export default MagneticButton;
