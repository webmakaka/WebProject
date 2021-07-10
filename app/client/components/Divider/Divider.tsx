import cn from 'classnames';
import styles from './Divider.module.css';
import { IDividerProps } from './Divider.props';

export const Divider = ({
  className,
  ...props
}: IDividerProps): JSX.Element => {
  return <hr className={cn(className, styles.hr)} {...props} />;
};
