import axios from 'axios';
import cn from 'classnames';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { Rating } from 'components/Rating/Rating';
import {
  IReviewForm,
  IReviewSentResponse,
} from 'components/ReviewForm/ReviewForm.interface';
import { TextArea } from 'components/TextArea/TextArea';
import { API } from 'helpers/api';
import { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import CloseIcon from './close.svg';
import styles from './ReviewForm.module.css';
import { IReviewFormProps } from './ReviewForm.props';

export const ReviewForm = ({
  productId,
  className,
  ...props
}: IReviewFormProps): JSX.Element => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IReviewForm>();

  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>();

  const onSubmit = async (formData: IReviewForm) => {
    try {
      const { data } = await axios.post<IReviewSentResponse>(
        API.review.createDemo,
        { ...formData, productId }
      );

      if (data.message) {
        setIsSuccess(true);
        reset();
      } else {
        setIsError('[App] Что-то пошло не так!');
      }
    } catch (e) {
      setIsError(e.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={cn(styles.reviewForm, className)} {...props}>
        <Input
          {...register('name', {
            required: { value: true, message: 'Заполните имя' },
          })}
          placeholder="Имя"
          error={errors.name}
        />
        <Input
          {...register('title', {
            required: { value: true, message: 'Заполните заголовок' },
          })}
          placeholder="Заголовок отзыва"
          className={styles.title}
          error={errors.title}
        />
        <div className={styles.rating}>
          <span>Оценка:</span>
          <Controller
            control={control}
            name="rating"
            rules={{ required: { value: true, message: 'Укажите рейтинг' } }}
            render={({ field }) => (
              <Rating
                isEditable
                rating={field.value}
                ref={field.ref}
                setRating={field.onChange}
                error={errors.rating}
              />
            )}
          />
        </div>
        <TextArea
          {...register('description', {
            required: { value: true, message: 'Заполните описание' },
          })}
          placeholder="Текст отзыва"
          className={styles.description}
          error={errors.description}
        />
        <div className={styles.submit}>
          <Button appearance="primary">Отправить</Button>
          <span className={styles.info}>
            * Перед публикацией отзыв пройдет предварительную модерацию и
            проверку
          </span>
        </div>
      </div>
      {isSuccess && (
        <div className={cn(styles.success, styles.panel)}>
          <div className={styles.successTitle}>Ваш отзыв отправлен</div>
          <div>Спасибо, ваш отзыв будет опубликован после проверки.</div>
          <CloseIcon
            className={styles.close}
            onClick={() => setIsSuccess(false)}
          />
        </div>
      )}
      {isError && (
        <div className={cn(styles.error, styles.panel)}>
          Что-то пошло не так, попробуйте обновить страницу
          <CloseIcon
            className={styles.close}
            onClick={() => setIsError(undefined)}
          />
        </div>
      )}
    </form>
  );
};
