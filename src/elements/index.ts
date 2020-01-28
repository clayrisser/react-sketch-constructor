import Artboard from './Artboard';
import AttributedString from './AttributedString';
import BaseElement, { IElement } from './BaseElement';
import Page from './Page';

export interface Elements {
  [key: string]: IElement;
}

export { Artboard, AttributedString, BaseElement, Page };
export default { Artboard, AttributedString, Page } as Elements;
