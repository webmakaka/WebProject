import cn from 'classnames';
import { Menu } from 'layout/Menu/Menu';
import Logo from '../logo.svg';
import styles from './Sidebar.module.css';
import { ISidebarProps } from './Sidebar.props';

export const Sidebar = ({
  className,
  ...props
}: ISidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sidebar)} {...props}>
      <Logo className={styles.logo} />
      <div>Поиск</div>
      <Menu />
    </div>
  );
};
