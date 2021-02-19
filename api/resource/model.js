// build your `Resource` model here
const db = require("../../data/dbConfig");

function getResources() {
    return db("resources");
}

function getResourceById(resourceid) {
    return db("resources").where("resource_id", resourceid).first();
}

function addResource(resource) {
    return db("resources")
        .insert(resource)
        .then((ids) => {
            return getResourceById(ids[0]);
        });
}

module.exports = { getResources, getResourceById, addResource };
