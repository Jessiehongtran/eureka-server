
exports.up = function(knex) {
  return knex.schema.createTable('attendee_response', tbl => {
            tbl.increments()
            tbl.integer('attendeeID')
               .notNullable()
               .unsigned()
               .references('id')
               .inTable('attendee')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
            tbl.integer('sessionID')
               .notNullable()
               .unsigned()
               .references('id')
               .inTable('session')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
            tbl.string('response')
            tbl.boolean('forChoice')
            tbl.boolean('forCategory')
            tbl.integer('choiceID')
               .unsigned()
               .references('id')
               .inTable('choice')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
            tbl.integer('categoryID')
               .unsigned()
               .references('id')
               .inTable('category')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('attendee_response')
};
