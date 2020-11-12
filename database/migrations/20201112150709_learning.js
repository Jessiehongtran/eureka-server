
exports.up = function(knex) {
    return knex.schema.createTable('learning', tbl => {
        tbl.increments()
        tbl.integer('courseInfoID')
           .notNullable()
           .unsigned()
           .references('id')
           .inTable('course_info')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
        tbl.string('learning_point')
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('learning')
  };
  
