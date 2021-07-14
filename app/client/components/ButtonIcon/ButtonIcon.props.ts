import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import close from './close.svg';
import menu from './menu.svg';
import up from './up.svg';

export const icons = {
  up,
  close,
  menu,
};

export type TIconName = keyof typeof icons;

export interface IButtonIconProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon: TIconName;
  appearance: 'primary' | 'white';
}
