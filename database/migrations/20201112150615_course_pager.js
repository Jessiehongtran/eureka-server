
exports.up = function(knex) {
    return knex.schema.createTable('course_pager', tbl => {
        tbl.increments()
        tbl.string('course_name')
        tbl.string('description')
        tbl.integer('userID')
           .notNullable()
           .unsigned()
           .references('id')
           .inTable('user')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
        tbl.timestamp('created_at').defaultTo(knex.fn.now())
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('course_pager')
  };
