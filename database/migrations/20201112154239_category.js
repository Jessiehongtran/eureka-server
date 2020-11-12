
exports.up = function(knex) {
  return knex.schema.createTable('category', tbl => {
            tbl.increments()
            tbl.string('category_name')
            tbl.integer('sessionID')
               .notNullable()
               .unsigned()
               .references('id')
               .inTable('session')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('category')
};
