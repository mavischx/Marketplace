//const user = require('./user'); 
// const project= require('./project'); 

const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const ProjectCollab = sequelize.define('project', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    projID: {
        type:Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
       // value:  project.id ,
    },
    collabUserID: {
        type:Sequelize.INTEGER,
        foreignKey: true,
        allowNull: false,
    } 
    //path: ,
});

module.exports = ProjectCollab;
