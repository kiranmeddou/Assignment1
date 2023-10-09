exports.up = function (knex) {
    
    return knex.schema.createTable('users', (table) => {
      table.increments('id').primary(); 
      table.string('postgres').notNullable(); 
      table.string('kiranmedou@gmail.com').unique().notNullable(); 
      table.timestamp('').defaultTo(knex.fn.now()); 
    });
  };
  
  exports.down = function (knex) {
    
    return knex.schema.dropTableIfExists('users');
  };