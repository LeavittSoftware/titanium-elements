import { cpSync, existsSync, mkdirSync } from 'node:fs';
import { basename, join } from 'node:path';
import nodeResolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { rollupPluginHTML as html } from '@web/rollup-plugin-html';
import { importMetaAssets } from '@web/rollup-plugin-import-meta-assets';
import { generateSW } from 'rollup-plugin-workbox';
import path from 'path';

/** Copies static assets into dist without pulling in deprecated glob/inflight via rollup-plugin-copy. */
function copyStaticAssets(targets) {
  return {
    name: 'copy-static-assets',
    writeBundle() {
      for (const { src, dest } of targets) {
        if (!existsSync(src)) {
          continue;
        }
        mkdirSync(dest, { recursive: true });
        cpSync(src, join(dest, basename(src)), { recursive: true });
      }
    },
  };
}

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
      // @rollup/plugin-terser v1's multi-worker pool segfaults on Node 22+; pin to a single worker.
      maxWorkers: 1,
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
      cleanupOutdatedCaches: true,
      clientsClaim: true,
      runtimeCaching: [{ urlPattern: 'polyfills/*.js', handler: 'CacheFirst' }],
    }),
    copyStaticAssets([
      { src: 'custom-elements.json', dest: 'dist' },
      { src: 'theme.css', dest: 'dist' },
      { src: 'theme-custom.css', dest: 'dist' },
      { src: 'manifest.json', dest: 'dist' },
      { src: 'manifest', dest: 'dist' },
      { src: 'fonts', dest: 'dist' },
      { src: 'images', dest: 'dist' },
      { src: '404.html', dest: 'dist' },
    ]),
  ],
};
