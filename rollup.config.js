import babel from '@rollup/plugin-babel';
import copy from 'rollup-plugin-copy';
import typescript from 'rollup-plugin-typescript2';
import { terser } from 'rollup-plugin-terser';

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'default',
      },
      {
        file: 'dist/index.umd.js',
        format: 'iife',
        name: 'Yoga',
      },
    ],
    plugins: [
      typescript({ useTsconfigDeclarationDir: false }),
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      terser(),
      copy({
        targets: [
          { src: 'build/yoga.wasm', dest: 'dist/' },
        ],
      }),
    ],
  },
  {
    input: 'src/asm.ts',
    output: [
      {
        file: 'dist/asm.js',
        format: 'cjs',
        exports: 'default',
      },
      {
        file: 'dist/asm.umd.js',
        format: 'iife',
        name: 'Yoga',
      },
    ],
    plugins: [
      typescript({ useTsconfigDeclarationDir: false }),
      babel({
        babelrc: false,
        babelHelpers: 'bundled',
        presets: ['@babel/preset-env'],
      }),
      terser(),
    ],
  },
];
