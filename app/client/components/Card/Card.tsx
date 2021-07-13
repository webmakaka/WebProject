import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Card.module.css';
import { ICardProps } from './Card.props';

export const Card = forwardRef(
  (
    { color = 'white', children, className, ...props }: ICardProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    return (
      <div
        className={cn(styles.card, className, {
          [styles.blue]: color == 'blue',
        })}
        ref={ref}
        {...props}
      >
        {children}
      </div>
    );
  }
);
