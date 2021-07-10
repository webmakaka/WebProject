import cn from 'classnames';
import styles from './Sort.module.css';
import { ESort, ISortProps } from './Sort.props';
import SortIcon from './sort.svg';

export const Sort = ({
  sort,
  setSort,
  className,
  ...props
}: ISortProps): JSX.Element => {
  return (
    <div className={cn(styles.sort, className)} {...props}>
      <span
        onClick={() => setSort(ESort.Rating)}
        className={cn({
          [styles.active]: sort == ESort.Rating,
        })}
      >
        <SortIcon className={styles.sortIcon} /> По рейтингу
      </span>
      <span
        onClick={() => setSort(ESort.Price)}
        className={cn({
          [styles.active]: sort == ESort.Price,
        })}
      >
        <SortIcon className={styles.sortIcon} /> По&nbsp;цене
      </span>
    </div>
  );
};
