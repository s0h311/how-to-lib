# Creating a TypeScript Calculator Library

## Setting up the project

1. Create an empty directory

```bash
mkdir fantastic-calculator; cd $_
```

2. Initialize a node project

```bash
npm init -y
```

3. Install the dependencies

```bash
npm i -D tsup typescript @changesets/cli vitest
```

4. Add an `indxe.ts` file. This will be the entry point of our library

```bash
mkdir src; touch $_/index.ts
```

5. Add entry points to `package.json`

```bash
npm pkg set type="module" main="dist/index.cjs" module="dist/index.mjs" types="dist/index.d.ts"
```

5. Create a `tsup.config.ts`. It could look like this

```TypeScript
import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  splitting: true,
  // sourcemap: true,
  clean: true,
  target: "es2022",
  minify: true,
  outDir: "dist",
  format: ["cjs", "esm"],
  outExtension: ({ format }) => {
    if (format === "esm") return { js: ".mjs", dts: ".d.ts" };
    return { js: ".cjs", dts: ".d.ts" };
  },
  bundle: true,
  dts: true,
});
```

This config will be used by `tsup` to build our library

6. Add scripts to `package.json`

```bash
npm pkg set scripts.build="tsup" scripts.test="vitest" scripts.lint="tsc"
```

We use the TypeScript compiler `tsc` to lint our project. When running it, it will throw any error found.

7. Add a `tsconfig.json`. It could look like this:

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "lib": ["ESNext"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "declaration": true
  }
}
```

8. Finally create a first test in `test/addition.test.ts` and run it with `npm run test`

## Build the `dist`

After having implemented the library code and export it in `src/index.ts`, the library can be built.

Simply run:

```bash
npm run build
```

Now you should see a `dist` directory which contains our `.mjs`, `.cjs` and `.d.ts` files.

## Testing the library locally

```bash
npm link
```

## Resources

- https://angular.dev/tools/libraries/creating-libraries/
- https://angular.dev/reference/configs/file-structure#library-project-files
- https://tsup.egoist.dev/#what-can-it-bundle
- https://www.totaltypescript.com/concepts/mjs-cjs-mts-and-cts-extensions
- https://youtu.be/6_JNPmjSevo?si=MVYZ3j1AjVbw9cwJ
- https://docs.github.com/en/actions/publishing-packages/publishing-nodejs-packages#publishing-packages-using-yarn
