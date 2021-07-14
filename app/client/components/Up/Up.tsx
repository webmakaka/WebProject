import { ButtonIcon } from 'components/ButtonIcon/ButtonIcon';
import { motion, useAnimation } from 'framer-motion';
import { useScrollY } from 'hooks/useScrollY';
import { useEffect } from 'react';
import styles from './Up.module.css';

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
    <motion.div
      className={styles.up}
      animate={controls}
      initial={{ opacity: 0 }}
    >
      <ButtonIcon appearance="primary" icon="up" onClick={scrollToTop} />
    </motion.div>
  );
};
