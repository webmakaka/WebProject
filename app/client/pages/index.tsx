import { Button, Htag, P } from '../components/';

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
    </>
  );
}
