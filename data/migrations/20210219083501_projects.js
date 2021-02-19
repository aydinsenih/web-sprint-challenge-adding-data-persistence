exports.up = function (knex) {
    return knex.schema
        .createTable("projects", (table) => {
            table.increments("project_id");
            table.string("project_name", 128).notNullable();
            table.text("project_description");
            table.boolean("project_completed").notNullable().defaultTo(false);
        })
        .createTable("resources", (table) => {
            table.increments("resource_id");
            table.string("resource_name", 128).notNullable().unique();
            table.text("resource_description");
        })
        .createTable("tasks", (table) => {
            table.increments("task_id");
            table.string("task_description", 128).notNullable();
            table.text("task_notes");
            table.boolean("task_completed").notNullable().defaultTo(false);
            table
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("project_id")
                .inTable("projects");
        })
        .createTable("project_resources", (table) => {
            table.increments("project_resource_id");
            table
                .integer("project_id")
                .unsigned()
                .notNullable()
                .references("project_id")
                .inTable("projects");
            table
                .integer("resource_id")
                .unsigned()
                .notNullable()
                .references("resource_id")
                .inTable("resources");
        });
};

exports.down = function (knex) {
    return knex.schema
        .dropTable("project_resources")
        .dropTable("tasks")
        .dropTable("resources")
        .dropTable("projects");
};
