
exports.up = function(knex) {
  return knex.schema.createTable('attendee', tbl => {
            tbl.increments()
            tbl.integer('userID')
               .notNullable()
               .unsigned()
               .references('id')
               .inTable('user')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
            tbl.integer('courseID')
               .notNullable()
               .unsigned()
               .references('id')
               .inTable('course_pager')
               .onDelete('CASCADE')
               .onUpdate('CASCADE')
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('attendee')
};
