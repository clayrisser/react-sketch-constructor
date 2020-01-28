declare namespace JSX {
  // @ts-ignore
  import { ReactNode, Ref } from 'react';

  interface IntrinsicElements {
    Page: {
      ref?: Ref<any>;
    };
    Artboard: {
      ref?: Ref<any>;
    };
  }
}
