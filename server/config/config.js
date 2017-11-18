require('dotenv').config();
const environment = process.env.NODE_ENV || 'development';
const dialect = 'postgres';
const url = process.env.DATABASE_URL_DEV;
// const url = environmentVariables.DATABASE_URL_DEV;

const devMode = environment === ('development' || 'test');

const config = {
  url,
  dialect,
  logging: devMode ? log => log : false,
  dialectOptions: {
    multipleStatements: true
  }
};

if (!devMode) {
  config.ssl = true;
  config.dialectOptions.ssl = {
    require: !devMode
  };
}
module.exports = config;
