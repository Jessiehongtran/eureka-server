
exports.up = function(knex) {
  return knex.schema.createTable('pure_text', tbl => {
            tbl.increments()
            tbl.string('text')
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
  return knex.schema.dropTableIfExists('pure_text')
};
