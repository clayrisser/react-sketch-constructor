import { Artboard as SketchArtboard } from 'sketch-constructor';
import BaseElement from './BaseElement';
import { Props } from '../types';

export default class Artboard extends BaseElement {
  static propTypes: object;

  static defaultProps: Props;

  constructor(props: Props = {}) {
    const page = new SketchArtboard({});
    super(page, props);
  }
}
