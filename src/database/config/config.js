const process = require('process');
require('dotenv').config();
const PORT_DB = process.env.PORT_DB || 3306;

module.exports= {
  "development": {
    "username": "root",
    "password": null,
    "database": "tea3",
    "host": "127.0.0.1",
    "dialect": "mysql",
    "port": `${PORT_DB}`
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
