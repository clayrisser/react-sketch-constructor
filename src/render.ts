import reconciler from './reconciler';
import { Page } from './elements';
import { Options } from './types';

export function render(jsx: JSX.Element, _options: Options = {}) {
  const rootElement = new Page();
  const root = reconciler.createContainer(rootElement, false, false);
  reconciler.updateContainer(jsx, root, null, () => {});
  return rootElement.node;
}
