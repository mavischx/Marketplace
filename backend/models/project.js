const user = require('./user'); 
const Sequelize = require('sequelize');
const sequelize = require('../utils/db');


const Project = sequelize.define('project', {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        title: {
            type:Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type:Sequelize.TEXT,
            allowNull: false,
        },
        skillsRequired: {
            type:Sequelize.STRING,
            allowNull: false,
        },
        status: {
            type:Sequelize.STRING,
            allowNull: false,
        } ,
        noOfCollaborators: {
            type:Sequelize.INTEGER,
            allowNull: false,

        },
        file: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        creatorID: {
            id: user.id,
            foreignKey: true,
            type: Sequelize.INTEGER,
            allowNull: false,

        },
        //path: ,
    });

module.exports = Project;