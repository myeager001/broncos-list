// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: 'postgress://localhost/broncos-players',
  },

  production: {
    client: 'pg',
    connection: 'postgres://tgwcclylipizbn:MLtVlwLpiXo1keBL370TjZ4mo7@ec2-54-204-12-25.compute-1.amazonaws.com:5432/d1rcvvklkankff?ssl=true'

  },

};
