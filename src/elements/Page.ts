import { Page as SketchPage } from 'sketch-constructor';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class Page extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    const page = new SketchPage({});
    super(page, props);
  }
}
