import Artboard from './Artboard';
import AttributedString from './AttributedString';
import BaseElement, { IElement } from './BaseElement';
import Border from './Border';
import Page from './Page';
import Rectangle from './Rectangle';
import Sketch from './Sketch';
import Text from './Text';

export interface Elements {
  [key: string]: IElement;
}

export {
  Artboard,
  AttributedString,
  BaseElement,
  Border,
  Page,
  Rectangle,
  Sketch,
  Text
};
export default {
  Artboard,
  AttributedString,
  Border,
  Page,
  Rectangle,
  Sketch,
  Text
} as Elements;
