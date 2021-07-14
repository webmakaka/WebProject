import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from 'hooks/useScrollY';
import { useEffect } from 'react';
import styles from './Up.module.css';
import UpIcon from './up.svg';

export const Up = (): JSX.Element => {
  const controls = useAnimation();
  const Y = useScrollY();

  useEffect(() => {
    controls.start({ opacity: Y / document.body.scrollHeight });
  }, [Y, controls]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <motion.button
      className={styles.up}
      onClick={scrollToTop}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <UpIcon />
    </motion.button>
  );
};
