import { ScullyConfig } from '@scullyio/scully';
export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'client-dash',
  outDir: './dist/static',
  routes: {},
  extraRoutes: ['/article/preview'],
};
