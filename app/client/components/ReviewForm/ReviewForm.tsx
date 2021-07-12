import cn from 'classnames';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Rating } from 'components/Rating/Rating';
import { IReviewForm } from 'components/ReviewForm/ReviewForm.interface';
import { TextArea } from 'components/TextArea/TextArea';
import { Controller, useForm } from 'react-hook-form';
import CloseIcon from './close.svg';
import styles from './ReviewForm.module.css';
import { IReviewFormProps } from './ReviewForm.props';

export const ReviewForm = ({
  productId,
  className,
  ...props
}: IReviewFormProps): JSX.Element => {
  const { register, control, handleSubmit } = useForm<IReviewForm>();

  const onSubmit = (data: IReviewForm) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input {...register('name')} placeholder="Имя" />
        <Input
          {...register('title')}
          placeholder="Заголовок отзыва"
          className={styles.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
              />
            )}
          />
        </div>
        <TextArea
          {...register('description')}
          placeholder="Текст отзыва"
          className={styles.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      <div className={styles.success}>
        <div className={styles.successTitle}>Ваш отзыв отправлен</div>
        <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
        <CloseIcon className={styles.close} />
      </div>
    </form>
  );
};
