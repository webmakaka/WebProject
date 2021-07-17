import { ESort } from 'components/Sort/Sort.props';
import { IProductModel } from 'interfaces/product.interface';

export type TSortActions = {
  type:
    | ESort.Price
    | { type: ESort.Rating }
    | { type: 'reset'; initialState: IProductModel[] };
};

export interface ISortReducerState {
  sort: ESort;
  products: IProductModel[];
}

export const sortReducer = (
  state: ISortReducerState,
  action: TSortActions
): ISortReducerState => {
  switch (action.type) {
    case ESort.Rating:
      return {
        sort: ESort.Rating,
        products: state.products.sort((a, b) =>
          a.initialRating > b.initialRating ? -1 : 1
        ),
      };
    case ESort.Price:
      return {
        sort: ESort.Price,
        products: state.products.sort((a, b) => (a.price > b.price ? 1 : -1)),
      };

    // @ts-ignore
    case 'reset':
      return {
        sort: ESort.Rating,
        // @ts-ignore
        products: action.initialState,
      };
    default:
      throw new Error('[App] Неверный тип сортировки');
  }
};
