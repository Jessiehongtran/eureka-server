
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('module').del()
    .then(function () {
      // Inserts seed entries
      return knex('module').insert([
        {
          module_name: "Drag and drop 1"
        },
        {
          module_name: "Drag and drop 2"
        },
        {
          module_name: "Quiz"
        },
        {
          module_name: "Slider"
        },
        {
          module_name: "Type"
        },
        {
          module_name: "Video"
        },
        {
          module_name: "Word Rain"
        },
      ]);
    });
};
