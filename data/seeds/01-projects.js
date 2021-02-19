exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("projects")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("projects").insert([
                {
                    project_name: "Yakidoo",
                    project_completed: true,
                    project_description: null,
                },
                {
                    project_name: "Skimia",
                    project_completed: false,
                    project_description: null,
                },
                {
                    project_name: "Skibox",
                    project_completed: true,
                    project_description: "Scolopax minor",
                },
                {
                    project_name: "Shufflester",
                    project_completed: true,
                    project_description: null,
                },
                {
                    project_name: "Eabox",
                    project_completed: false,
                    project_description: null,
                },
            ]);
        });
};
