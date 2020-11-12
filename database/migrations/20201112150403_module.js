
exports.up = function(knex) {
  return knex.schema.createTable('module', tbl => {
      tbl.increments()
      tbl.string('module_name').notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('module')
};
