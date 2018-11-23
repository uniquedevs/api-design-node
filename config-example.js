const config = {
  env: process.env.node || 'dev',
  secrets: {
    githubTocken: '',
    jwtSecret: ''
  }
};

const envConfig = require('./' + config.env);

module.export = Object.assign(config, envConfig || {});