import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './TextArea.module.css';
import { ITextAreaProps } from './TextArea.props';

export const TextArea = forwardRef(
  (
    { className, ...props }: ITextAreaProps,
    ref: ForwardedRef
  ): JSX.Element<HTMLTextAreaElement> => {
    return (
      <textarea className={cn(className, styles.input)} ref={ref} {...props} />
    );
  }
);
