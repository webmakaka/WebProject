import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './Input.module.css';
import { IInputProps } from './Input.props';

export const Input = forwardRef(
  (
    { className, ...props }: IInputProps,
    ref: ForwardedRef<HTMLInputElement>
  ): JSX.Element => {
    return (
      <input className={cn(className, styles.input)} ref={ref} {...props} />
    );
  }
);
