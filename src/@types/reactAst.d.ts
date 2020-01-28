declare namespace JSX {
  // @ts-ignore
  import { ReactNode, Ref } from 'react';

  interface IntrinsicElements {
    Page: {
      children?: ReactNode;
      ref?: Ref<any>;
      style?: object;
    };
    Artboard: {
      backgroundColor?: string;
      children?: ReactNode;
      exportOptions?: object;
      frame?: object;
      horizontalRulerData?: object;
      layers?: object[];
      name?: string;
      ref?: Ref<any>;
      verticalRulerData?: object;
    };
    AttributedString: {
      children?: ReactNode;
    };
    Border: {
      color?: object | string;
      fillType?: object;
      position?: object;
      thickness?: number;
    };
  }
}
