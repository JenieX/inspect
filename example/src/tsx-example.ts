/**
 * Running `set NODE_OPTIONS=--inspect-wait=127.0.0.1:2003 && tsx src/main.ts`
 * gets you the 'Address already in use' error.
 *
 * In another word, `tsx` doesn't support 'NODE_OPTIONS'.
 */

import '@jeniex/inspect';

console.debug('A debug message');
console.warn('A warn message');
console.error('An error message');
