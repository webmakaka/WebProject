import cn from 'classnames';
import styles from './Input.module.css';
import { IInputProps } from './Input.props';

export const Input = ({ className, ...props }: IInputProps): JSX.Element => {
  return <input className={cn(className, styles.input)} {...props} />;
};
