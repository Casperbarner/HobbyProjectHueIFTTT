// Load Sequelize module
const Sequelize = require('sequelize')

// Set up sequelize to use SQLite from .data/database.sqlite
const sequelize = new Sequelize('sqlite:./.data/database.sqlite', {
    logging: console.log
})

// Create main database object which contains
// all model definitions and associations
const db = {}

// Example of model
// Documentation: http://docs.sequelizejs.com/manual/tutorial/models-definition.html
// db.Message = sequelize.define('message', {
//     text: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }
// })

// Add the Sequelize instance to the object
db.sequelize = sequelize

module.exports = db