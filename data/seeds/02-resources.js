exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("resources")
        .del()
        .then(function () {
            // Inserts seed entries
            return knex("resources").insert([
                {
                    resource_name: "Gembucket",
                },
                {
                    resource_name: "Computer",
                },
                {
                    resource_name: "Viva",
                },
                {
                    resource_name: "Ronstring",
                },
                {
                    resource_name: "Ventosanzap",
                },
            ]);
        });
};
