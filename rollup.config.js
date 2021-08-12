import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './dist/index.js',
  output: [
    {
      format: 'umd',
      name: "Truthiness",
      dir: 'dist',
      exports: 'named',
    },
    {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'Truthiness',
      plugins: [terser()]
    }
  ],
  plugins: [typescript()]
};
