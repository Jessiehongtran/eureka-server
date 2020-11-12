
exports.up = function(knex) {
    return knex.schema.createTable('course_info', tbl => {
        tbl.increments()
        tbl.string('banner_img')
        tbl.integer('duration_minute')
        tbl.float('rating').notNullable()
        tbl.date('deadline')
        tbl.string('course_url')
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
    return knex.schema.dropTableIfExists('course_info')
  };