module.exports = {
    development: {
      client: 'pg', 
      connection: {
        host: 'localhost', 
        port: 5432, 
        database: 'avtracker', 
        user: 'postgres', 
        password: '12345', 
      },
      migrations: {
        directory: './database/migrations', 
      },
      seeds: {
        directory: './database/seeds', 
      },
    },
  };