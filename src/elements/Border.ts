import { Border as SketchBorder } from 'sketch-constructor';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class Border extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    const args = { ...props };
    delete args.children;
    const page = new SketchBorder(args);
    super(page, props);
  }
}
