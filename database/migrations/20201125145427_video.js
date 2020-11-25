
exports.up = function(knex) {
    return knex.schema.createTable('video', tbl => {
        tbl.increments()
        tbl.string('video_url')
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
   return knex.schema.dropTableIfExists('video')
};
