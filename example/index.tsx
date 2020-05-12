import React from 'react';
import util from 'util';
import { render, Artboard, Page, Rectangle } from '../src';

const colors = [
  {
    label: 'Red',
    value: '#E53935'
  },
  {
    label: 'Blue',
    value: '#1E88E5'
  },
  {
    label: 'Green',
    value: '#43A047'
  },
  {
    label: 'Orange',
    value: '#ff9900'
  },
  {
    label: 'Purple',
    value: '#9c27b0'
  }
];

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(
  <Page name="my page">
    <Artboard
      name="my artboard"
      frame={{
        width: colors.length * 220 + 20,
        height: 190
      }}
    >
      {/* <Rectangle
          width={200}
          height={100}
          x={0}
          y={0}
          style={{
          fills: [
          {
          color: '#999'
          }
          ]
          }}
          /> */}
    </Artboard>
  </Page>
);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(util.inspect(renderedOutput, false, null, true));
console.log('\n\n--------------');
