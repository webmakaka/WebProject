import { Button, Htag } from '../components/';

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h3">Текст</Htag>
      <Button appearance="primary" className="test">
        Кнопка1
      </Button>{' '}
      <Button appearance="ghost">Кнопка2</Button>
    </>
  );
}
