import { Button, Htag, P, Tag } from '../components/';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary" arrow="right">
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
    </>
  );
}
