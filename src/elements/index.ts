import Artboard from './Artboard';
import BaseElement, { IElement } from './BaseElement';
import Page from './Page';

export interface Elements {
  [key: string]: IElement;
}

export { Artboard, BaseElement, Page };
export default { Artboard, Page } as Elements;
