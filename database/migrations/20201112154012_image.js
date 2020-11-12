
exports.up = function(knex) {
  return knex.schema.createTable('image', tbl => {
            tbl.increments()
            tbl.string('image_url')
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
  return knex.schema.dropTableIfExists('image')
};
