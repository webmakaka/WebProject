import axios from 'axios';
import { GetStaticProps } from 'next';
import { IMenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Search(): JSX.Element {
  return <>Search</>;
}

export default withLayout(Search);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find',
    {
      firstCategory,
    }
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface IHomeProps extends Record<string, unknown> {
  menu: IMenuItem[];
  firstCategory: number;
}
