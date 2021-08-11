import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser'

export default {
  input: './dist/index.js',
  output: [
    {
      format: 'umd',
      name: "isTruthy",
      dir: 'dist',
      exports: 'named',
    },
    {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'isTruthy',
      plugins: [terser()]
    }
  ],
  plugins: [typescript()]
};
