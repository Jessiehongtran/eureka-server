
exports.up = function(knex) {
  return knex.schema.createTable('question', tbl => {
            tbl.increments()
            tbl.string('question_text')
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
  return knex.schema.dropTableIfExists('question')
};
