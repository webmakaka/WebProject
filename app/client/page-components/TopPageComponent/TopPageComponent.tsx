import { ITopPageComponentProps } from 'page-components/TopPageComponent/TopPageComponent.props';

export const TopPageComponent = ({
  page,
  products,
  firstCategory,
}: ITopPageComponentProps): JSX.Element => {
  return <>{products && products.length}</>;
};
