import reconciler from './reconciler';
import { Options } from './types';
import { Sketch } from './elements';

export function render(jsx: JSX.Element, _options: Options = {}) {
  const rootElement = new Sketch();
  rootElement.node.addPage(rootElement.node);
  const root = reconciler.createContainer(rootElement, false, false);
  reconciler.updateContainer(jsx, root, null, () => {});
  rootElement.node.build('example.sketch');
  return rootElement.node;
}
