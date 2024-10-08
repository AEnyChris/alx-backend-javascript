/**
 * a function that returns A new Array buffer
 */

export default function createInt8TypedArray(length, position, value) {
  if (position >= length) {
    throw Error('Position outside range');
  }

  // create buffer
  const buffer = new ArrayBuffer(length);

  // create a data view of buffer
  const dv = new DataView(buffer);

  // set value into buffer at position
  dv.setInt8(position, value);
  return dv;
}
