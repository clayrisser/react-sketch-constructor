declare namespace JSX {
  // @ts-ignore
  import { ReactNode, Ref } from 'react';

  interface IntrinsicElements {
    Page: {
      children?: ReactNode;
      name?: string;
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
    Rectangle: {
      height?: number;
      name?: string;
      style?: object;
      width?: number;
      x?: number;
      y?: number;
    };
    Text: {
      frame?: object;
      style?: object;
    };
  }
}
