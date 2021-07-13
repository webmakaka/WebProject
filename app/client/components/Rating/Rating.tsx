import cn from 'classnames';
import {
  ForwardedRef,
  forwardRef,
  KeyboardEvent,
  useEffect,
  useState,
} from 'react';
import styles from './Rating.module.css';
import StarIcon from './star.svg';

export const Rating = forwardRef(
  (
    { isEditable = false, error, rating, setRating, ...props }: IRatingProps,
    ref: ForwardedRef<HTMLDivElement>
  ): JSX.Element => {
    const [ratingArray, setRatingArray] = useState<JSX.Element[]>(
      new Array(5).fill(<></>)
    );

    useEffect(() => {
      constructRating(rating);
    }, [rating]);

    const constructRating = (currentRating: number) => {
      const updatedArray = ratingArray.map(
        (ratingL: JSX.Element, i: number) => {
          return (
            <span
              className={cn(styles.star, {
                [styles.filled]: i < currentRating,
                [styles.editable]: isEditable,
              })}
              onMouseEnter={() => changeDisplay(i + 1)}
              onMouseLeave={() => changeDisplay(rating)}
              onClick={() => onClick(i + 1)}
            >
              <StarIcon
                tabIndex={isEditable ? 0 : -1}
                onKeyDown={(e: KeyboardEvent<SVGElement>) =>
                  isEditable && handleSpace(i + 1, e)
                }
              />
            </span>
          );
        }
      );
      setRatingArray(updatedArray);
    };

    const changeDisplay = (i: number) => {
      if (!isEditable) {
        return;
      }
      constructRating(i);
    };

    const onClick = (i: number) => {
      if (!isEditable || !setRating) {
        return;
      }
      setRating(i);
    };

    const handleSpace = (i: number, e: KeyboardEvent<SVGElement>) => {
      if (e.code != 'Space' || !setRating) {
        return;
      }
      setRating(i);
    };

    return (
      <div
        {...props}
        ref={ref}
        className={cn(styles.ratingWrapper, { [styles.error]: error })}
      >
        {ratingArray.map((rating, index) => (
          <span key={index}>{rating}</span>
        ))}
        {error && <span className={styles.errorMessage}>{error.message}</span>}
      </div>
    );
  }
);
