import BaseElement, { IElement } from './BaseElement';
import Page from './Page';

export interface Elements {
  [key: string]: IElement;
}

export { BaseElement, Page };
export default { Page } as Elements;
