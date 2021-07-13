import cn from 'classnames';
import { ForwardedRef, forwardRef } from 'react';
import styles from './TextArea.module.css';
import { ITextAreaProps } from './TextArea.props';

export const TextArea = forwardRef(
  (
    { error, className, ...props }: ITextAreaProps,
    ref: ForwardedRef
  ): JSX.Element<HTMLTextAreaElement> => {
    return (
      <div className={cn(styles.textareaWrapper, className)}>
        <textarea
          className={cn(styles.textarea, {
            [styles.error]: error,
          })}
          ref={ref}
          {...props}
        />
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
