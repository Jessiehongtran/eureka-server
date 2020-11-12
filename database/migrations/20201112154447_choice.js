
exports.up = function(knex) {
  return knex.schema.createTable('choice', tbl => {
            tbl.increments()
            tbl.integer('sessionID')
               .notNullable()
               .unsigned()
               .references('id')
               .inTable('session')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
            tbl.string('choice_text')
            tbl.boolean('isCorrect')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('choice')
};
