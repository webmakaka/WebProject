import cn from 'classnames';
import { format } from 'date-fns';
import styles from './Footer.module.css';
import { IFooterProps } from './Footer.props';

export const Footer = ({ className, ...props }: IFooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>OwlTop 2020 - {format(new Date(), 'yyyy')} Все права зачищены.</div>

      <a href="#" target="_blank">
        Пользовательское соглашение
      </a>
      <a href="#" target="_blank">
        Политика конфиденциальности
      </a>
    </footer>
  );
};
