// The entry file of your WebAssembly module.

import { u128 } from "bignum/integer/u128";

export function add(a: i32, b: i32): Uint8Array {
  const test = u128.from<i32>(0);
  const u8a = test.toUint8Array();
  return u8a;
}
