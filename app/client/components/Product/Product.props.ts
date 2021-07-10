import { IProductModel } from 'interfaces/product.interface';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface IProductProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  product: IProductModel;
}
