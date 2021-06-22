import cn from 'classnames';
import styles from './Tag.module.css';
import { ITagProps } from './Tag.props';

export const Tag = ({
  size = 's',
  children,
  color = 'ghost',
  href,
  className,
  ...props
}: ITagProps): JSX.Element => {
  return (
    <div
      className={cn(styles.tag, className, {
        [styles.s]: size == 's',
        [styles.m]: size == 'm',
        [styles.ghost]: color == 'ghost',
        [styles.red]: color == 'red',
        [styles.grey]: color == 'grey',
        [styles.green]: color == 'green',
        [styles.primary]: color == 'primary',
      })}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </div>
  );
};
