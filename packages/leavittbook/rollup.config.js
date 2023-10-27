import nodeResolve from '@rollup/plugin-node-resolve';
import copy from 'rollup-plugin-copy';
import terser from '@rollup/plugin-terser';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import { generateSW } from 'rollup-plugin-workbox';
import path from 'path';
import summary from 'rollup-plugin-summary';

export default {
  input: 'index.html',
  output: {
    entryFileNames: '[hash].js',
    chunkFileNames: '[hash].js',
    assetFileNames: '[hash][extname]',
    format: 'es',
    dir: 'dist',
  },
  preserveEntrySignatures: false,

  plugins: [
    /** Enable using HTML as rollup entrypoint */
    html({
      minify: true,
      injectServiceWorker: true,
      serviceWorkerPath: 'dist/sw.js',
      extractAssets: false,
    }),
    /** Resolve bare module imports */
    nodeResolve(),
    /** Minify HTML */
    terser({
      ecma: 2022,
      module: true,
      warnings: true,
      mangle: {
        properties: {
          regex: /^__/,
        },
      },
      format: {
        comments: false,
      },
    }),
    /** Bundle assets references via import.meta.url */
    importMetaAssets(),
    /** Create and inject a service worker */
    generateSW({
      globIgnores: ['polyfills/*.js', 'nomodule-*.js'],
      navigateFallback: '/index.html',
      // where to output the generated sw
      swDest: path.join('dist', 'sw.js'),
      // directory to match patterns against to be precached
      globDirectory: path.join('dist'),
      // cache any html js and css by default
      globPatterns: ['**/*.{html,js,css,webmanifest}'],
      skipWaiting: false,
      clientsClaim: true,
      runtimeCaching: [{ urlPattern: 'polyfills/*.js', handler: 'CacheFirst' }],
    }),
    copy({
      targets: [
        { src: 'manifest.json', dest: 'dist' },
        { src: 'manifest', dest: 'dist' },
        { src: 'fonts', dest: 'dist' },
        { src: 'images', dest: 'dist' },
        { src: 'custom-elements.json', dest: 'dist' },
        { src: 'src/demos/*', dest: 'dist/src/demos' },
      ],
    }),
    summary(),
  ],
};
