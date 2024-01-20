"use strict";

require("dotenv").config();
const folder = process.env.DB_FOLDER || './';
const dbName = 'fastify_graph';

const getDbPath = (env_name) => {
  if (!env_name)
    env_name = 'development';
  env_name = env_name.toLowerCase();
  if (env_name === 'production')
    env_name = '';
  else
    env_name = `_${env_name}`;

  return `${folder}/${dbName}${env_name}.sqlite`;
};

const getConfigForEnv = (env_name) => {
  return {
    dialect: 'sqlite',
    storage: getDbPath(env_name),
  };
};

module.exports = {
  development: getConfigForEnv(),
  test: getConfigForEnv('test'),
  production: getConfigForEnv('production'),
};
