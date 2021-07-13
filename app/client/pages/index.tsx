import axios from 'axios';
import { TextArea } from 'components/TextArea/TextArea';
import { API } from 'helpers/api';
import { GetStaticProps } from 'next';
import { useState } from 'react';
import { Button, Htag, Input, P, Rating, Tag } from '../components/';
import { IMenuItem } from '../interfaces/menu.interface';
import { withLayout } from '../layout/Layout';

function Home({ menu }: IHomeProps): JSX.Element {
  const [counter, setCounter] = useState<number>(0);

  const [rating, setRating] = useState<number>(2);

  return (
    <>
      <Htag tag="h3">{counter}</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        Кнопка1
      </Button>{' '}
      <Button appearance="ghost" arrow="down">
        Кнопка2
      </Button>
      <P size="l">Большой</P>
      <P>Средний</P>
      <P size="s">Маленький</P>
      <Tag size="s">Ghost</Tag>
      <Tag size="m" color="red">
        Red
      </Tag>
      <Tag size="s" color="green">
        Green
      </Tag>
      <Tag color="primary">Primary</Tag>
      <Rating rating={rating} isEditable={true} setRating={setRating} />
      <Input placeholder="test" />
      <TextArea placeholder="test textarea" />
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<IHomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<IMenuItem[]>(API.topPage.find, {
    firstCategory,
  });
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
