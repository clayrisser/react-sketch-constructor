import Artboard from './Artboard';
import AttributedString from './AttributedString';
import BaseElement, { IElement } from './BaseElement';
import Border from './Border';
import Page from './Page';

export interface Elements {
  [key: string]: IElement;
}

export { Artboard, AttributedString, Border, BaseElement, Page };
export default { Artboard, AttributedString, Border, Page } as Elements;
