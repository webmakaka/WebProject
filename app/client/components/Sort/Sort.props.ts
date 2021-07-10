import { DetailedHTMLProps, HTMLAttributes } from 'react';

export enum ESort {
  Rating,
  Price,
}

export interface ISortProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  sort: ESort;
  setSort: (sort: ESort) => void;
}
