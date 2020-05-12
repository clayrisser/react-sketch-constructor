import { Rectangle as SketchRectangle } from 'sketch-constructor';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class Rectangle extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    const args = { ...props };
    delete args.children;
    const page = new SketchRectangle(args);
    super(page, props);
  }
}
