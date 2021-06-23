import { useState } from 'react';
import { Button, Htag, P, Rating, Tag } from '../components/';
import { withLayout } from '../layout/Layout';

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
