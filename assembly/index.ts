import { u128 } from "bignum";
// compiles to wrong sourceMap path: '~lib/bignum/integer/u128.ts'

// import { u128 } from "../node_modules/bignum/assembly/integer/u128";
// compiles to correct sourceMap path: 'node_modules/bignum/assembly/integer/u128.ts'

export function add(): void {
  const test = u128.from<i32>(0);
}
