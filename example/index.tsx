import React from 'react';
import util from 'util';
import { render, Artboard } from '../src';

console.log('======== RECONCILER LIFECYCLE ========');
const renderedOutput = render(<Artboard>hi</Artboard>);

console.log('\n\n======== RENDERED OUTPUT ========');
console.log(util.inspect(renderedOutput, false, null, true));
console.log('\n\n--------------');
