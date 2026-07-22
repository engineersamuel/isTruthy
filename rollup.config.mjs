import terser from '@rollup/plugin-terser';

export default {
  input: '.rollup-tmp/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'umd',
      name: 'Truthiness',
      exports: 'named',
    },
    {
      file: 'dist/index.min.js',
      format: 'umd',
      name: 'Truthiness',
      exports: 'named',
      plugins: [terser()],
    },
  ],
};
