import { BaseNode, Node, Instance, Props } from '../types';

export interface IElement {
  new (props?: Props): BaseElement;
  propTypes: object;
  defaultProps: Props;
}

export default class BaseElement implements Instance {
  static defaultProps: Props = {};

  static propTypes: object = {};

  node: Node;

  props: Props;

  children: BaseElement[] = [];

  constructor(baseNode: BaseNode | BaseNode[], props: Props = {}) {
    this.node = baseNode;
    this.props = props;
    console.debug(`<${this.constructor.name}`, this.props, '/>');
  }

  appendChild(child: BaseElement) {
    if (child?.constructor?.name) {
      const addFunctionName = `add${child.constructor.name}`;
      if (typeof this.node[addFunctionName] !== 'function') {
        if (typeof this.node.addLayer !== 'function') {
          throw new Error(
            `<${child.constructor.name} /> is not a valid child for <${this.constructor.name} />
${this.constructor.name}.${addFunctionName}() is not a valid function`
          );
        }
        return this.node.addLayer(child.node);
      }
      this.node[addFunctionName](child.node);
    }
  }

  removeChild(_child: BaseElement) {}

  commitMount() {}

  commitUpdate(newProps: Props) {
    this.props = {
      ...this.props,
      ...newProps
    };
  }
}
