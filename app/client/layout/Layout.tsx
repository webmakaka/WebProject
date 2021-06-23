import { FunctionComponent } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { ILayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';

export const Layout = ({ children }: ILayoutProps): JSX.Element => {
  return (
    <>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </>
  );
};

export const withLayout = <T extends Record<string, unknown>>(
  Component: FunctionComponent<T>
) => {
  return function withLayoutCompoent(props: T): JSX.Element {
    return (
      <Layout>
        <Component {...props} />
      </Layout>
    );
  };
};
