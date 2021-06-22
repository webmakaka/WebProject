import cn from 'classnames';
import styles from './Button.module.css';
import { IButtonProps } from './Button.props';

export const Button = ({
  appearance,
  children,
  className,
  ...props
}: IButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: appearance == 'primary',
        [styles.ghost]: appearance == 'ghost',
      })}
      {...props}
    >
      {children}
    </button>
  );
};
