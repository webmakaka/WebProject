import { ETopLevelCategory, ITopPageModel } from 'interfaces/page.interface';
import { IProductModel } from 'interfaces/product.interface';

export interface ITopPageComponentProps extends Record<string, unknown> {
  firstCategory: ETopLevelCategory;
  page: ITopPageModel;
  products: IProductModel[];
}
