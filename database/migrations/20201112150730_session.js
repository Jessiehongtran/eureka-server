
exports.up = function(knex) {
    return knex.schema.createTable('session', tbl => {
        tbl.increments()
        tbl.integer('courseID')
           .notNullable()
           .unsigned()
           .references('id')
           .inTable('course_pager')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
        tbl.integer('moduleID')
           .notNullable()
           .unsigned()
           .references('id')
           .inTable('module')
           .onDelete('CASCADE')
           .onUpdate('CASCADE')
        tbl.integer('order_number').notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('session')
  };
  
