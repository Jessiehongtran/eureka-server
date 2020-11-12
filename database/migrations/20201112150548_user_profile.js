
exports.up = function(knex) {
    return knex.schema.createTable('user_profile', tbl => {
        tbl.increments()
        tbl.string('company_name')
        tbl.string('company_logo')
        tbl.integer('userID')
           .notNullable()
           .unsigned()
           .references('id')
           .inTable('user')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user_profile')
  };
