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
      <div className={styles.sortName} id="sort">
        Сортировка
      </div>
      <button
        id="rating"
        onClick={() => setSort(ESort.Rating)}
        className={cn({
          [styles.active]: sort == ESort.Rating,
        })}
        aria-selected={sort == ESort.Rating}
        aria-labelledby="sort rating"
      >
        <SortIcon className={styles.sortIcon} /> По рейтингу
      </button>
      <button
        id="pice"
        onClick={() => setSort(ESort.Price)}
        className={cn({
          [styles.active]: sort == ESort.Price,
        })}
        aria-selected={sort == ESort.Price}
        aria-labelledby="sort price"
      >
        <SortIcon className={styles.sortIcon} /> По цене
      </button>
    </div>
  );
};
