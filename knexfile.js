// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/broncos-players',
  },

  production: {
    client: 'postgresql',
    connection: process.env.NODE_URL,
    },

};
