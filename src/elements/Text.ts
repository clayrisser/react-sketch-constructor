import { Text as SketchText } from 'sketch-constructor';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class Text extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    const args = { ...props };
    delete args.children;
    const page = new SketchText(args);
    super(page, props);
  }
}
