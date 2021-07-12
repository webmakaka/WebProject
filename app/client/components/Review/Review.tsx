import cn from 'classnames';
import { Rating } from 'components/Rating/Rating';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
import styles from './Review.module.css';
import { IReviewProps } from './Review.props';
import UserIcon from './user.svg';

export const Review = ({
  review,
  className,
  ...props
}: IReviewProps): JSX.Element => {
  const { name, title, description, createdAt, rating } = review;
  return (
    <div className={cn(styles.review, className)} {...props}>
      <UserIcon className={styles.user} />
      <div className={styles.title}>
        <span className={styles.name}>{name}:</span>&nbsp;&nbsp;
        <span>{title}</span>
      </div>
      <div className={styles.date}>
        {format(new Date(createdAt), 'dd MMMM yyyy', { locale: ru })}
      </div>
      <div className={styles.rating}>
        <Rating rating={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};
