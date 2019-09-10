# bignum-sourcemap-bug
Just a stripped down demo for compiler bug...


**Steps how I got here:**

Create a new sterter project & add bignum as a dependency:

```
$ mkdir new-project && cd new-project
$ yarn add AssemblyScript/assemblyscript -D
$ npx asinit .
$ yarn add MaxGraey/bignum.wasm
```

**And then I imported & used bignum in assembly/index.ts**

```
import { u128 } from "bignum/integer/u128";

export function add(a: i32, b: i32): Uint8Array {
  const test = u128.from<i32>(0);
  const u8a = test.toUint8Array();
  return u8a;
}
```

**When running `asbuild` I'm getting these error messages (for both optimized & untouched). It only happens when the `---sourceMap` option is used.**

```
> @ asbuild:untouched /Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript
> asc assembly/index.ts -b build/untouched.wasm -t build/untouched.wat --sourceMap --validate --debug

ERROR: Source file '~lib/bignum/utils.ts' not found.
    at sourceMap.sources.forEach (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/cli/asc.js:723:31)
    at Array.forEach (<anonymous>)
    at Object.main (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/cli/asc.js:707:29)
    at Object.<anonymous> (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/bin/asc:21:26)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
ERROR: Source file '~lib/bignum/globals.ts' not found.
    at sourceMap.sources.forEach (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/cli/asc.js:723:31)
    at Array.forEach (<anonymous>)
    at Object.main (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/cli/asc.js:707:29)
    at Object.<anonymous> (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/bin/asc:21:26)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
ERROR: Source file '~lib/bignum/integer/u128.ts' not found.
    at sourceMap.sources.forEach (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/cli/asc.js:723:31)
    at Array.forEach (<anonymous>)
    at Object.main (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/cli/asc.js:707:29)
    at Object.<anonymous> (/Users/stefaniedoll/Parity/ParityJS/bignum-assemblyscript/node_modules/assemblyscript/bin/asc:21:26)
    at Module._compile (internal/modules/cjs/loader.js:701:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:712:10)
    at Module.load (internal/modules/cjs/loader.js:600:32)
    at tryModuleLoad (internal/modules/cjs/loader.js:539:12)
    at Function.Module._load (internal/modules/cjs/loader.js:531:3)
    at Function.Module.runMain (internal/modules/cjs/loader.js:754:12)
```
