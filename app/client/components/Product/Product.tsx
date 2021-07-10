// import cn from 'classnames';
// import styles from './Product.module.css';
import { IProductProps } from './Product.props';

export const Product = ({
  product,
  className,
  ...props
}: IProductProps): JSX.Element => {
  return <div>{product.title}</div>;
};
