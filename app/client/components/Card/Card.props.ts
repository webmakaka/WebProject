import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';

export interface ICardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  color?: 'white' | 'blue';
  children: ReactNode;
}
