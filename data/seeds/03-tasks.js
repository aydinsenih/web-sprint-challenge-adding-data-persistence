exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("tasks")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("tasks").insert([
                {
                    task_description: "Rugs",
                    task_completed: true,
                    project_id: 5,
                },
                {
                    task_description: "CCU",
                    task_completed: false,
                    project_id: 3,
                },
                {
                    task_description: "Norton Ghost",
                    task_completed: true,
                    project_id: 1,
                },
                {
                    task_description: "Human Resource Planning",
                    task_completed: false,
                    project_id: 1,
                },
                {
                    task_description: "Gynecology",
                    task_completed: false,
                    project_id: 1,
                },
            ]);
        });
};
