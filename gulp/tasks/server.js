import { filePaths } from '../config/paths.js';

const server = (instance) => {
  instance.init({
    server: {
      baseDir: filePaths.buildFolder,
    },
    logLevel: 'info',
    tunnel:true,
    cors: true,
    notify: true,
    open: false,
    reloadOnRestart: true,
    port: 3000,
  });
};

export { server };
