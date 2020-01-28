import { BaseElement } from './elements';
import reconciler from './reconciler';
import { BaseNode, Options } from './types';

export function render(jsx: JSX.Element, _options: Options = {}) {
  const rootNode: BaseNode = { sketch: 'constructor' };
  const rootElement = new BaseElement(rootNode);
  const root = reconciler.createContainer(rootElement, false, false);
  reconciler.updateContainer(jsx, root, null, () => {});
  return rootElement.node;
}
