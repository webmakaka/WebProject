import cn from 'classnames';
import { Button } from 'components/Button/Button';
import { Input } from 'components/Input/Input';
import { useRouter } from 'next/router';
import { useState } from 'react';
import GlassIcon from './glass.svg';
import styles from './Search.module.css';
import { ISearchProps } from './Search.props';

export const Search = ({ className, ...props }: ISearchProps): JSX.Element => {
  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goToSearch = () => {
    router.push({
      pathname: '/search',
      query: {
        q: search,
      },
    });
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key == 'Enter') {
      goToSearch();
    }
  };

  return (
    <form className={cn(className, styles.search)} {...props} role="search">
      <Input
        className={styles.input}
        placeholder="Поиск..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        // @ts-ignore
        onKeyDown={handleKeyDown}
      />
      <Button
        appearance="primary"
        className={styles.button}
        onClick={goToSearch}
        aria-label="Искать по сайту"
      >
        <GlassIcon />
      </Button>
    </form>
  );
};
