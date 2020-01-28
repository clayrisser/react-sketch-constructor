import { AttributedString as SketchAttributedString } from 'sketch-constructor';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class AttributedString extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    const args = { ...props };
    delete args.children;
    const page = new SketchAttributedString(args);
    super(page, props);
  }
}
