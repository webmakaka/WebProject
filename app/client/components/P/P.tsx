import cn from 'classnames';
import styles from './P.module.css';
import { IPProps } from './P.props';

export const P = ({
  size = 'm',
  children,
  className,
  ...props
}: IPProps): JSX.Element => {
  return (
    <p
      className={cn(styles.p, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.l]: size == 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
};
