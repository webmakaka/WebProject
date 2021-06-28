import cn from 'classnames';
import styles from './Card.module.css';
import { ICardProps } from './Card.props';

export const Card = ({
  color = 'white',
  children,
  className,
  ...props
}: ICardProps): JSX.Element => {
  return (
    <div
      className={cn(styles.card, className, {
        [styles.blue]: color == 'blue',
      })}
      {...props}
    >
      {children}
    </div>
  );
};
