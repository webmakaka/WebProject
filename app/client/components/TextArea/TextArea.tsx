import cn from 'classnames';
import styles from './TextArea.module.css';
import { ITextAreaProps } from './TextArea.props';

export const TextArea = ({
  className,
  ...props
}: ITextAreaProps): JSX.Element => {
  return <textarea className={cn(className, styles.input)} {...props} />;
};
