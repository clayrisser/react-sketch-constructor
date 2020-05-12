import { Sketch as SketchSketch } from 'sketch-constructor';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class Sketch extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    const page = new SketchSketch();
    super(page, props);
  }
}
