const user = require('./user'); 
const project = require('./project')
const Sequelize = require('sequelize');
const sequelize = require('../utils/db');


const Message = sequelize.define('message', {
        id : {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        },
        senderID: {
            type:Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        receiverID: {
            type:Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        projectID: {
            type:Sequelize.INTEGER,
            foreignKey: true,
            allowNull: false,
        },
        message: {  
            type:Sequelize.TEXT,
            allowNull: false,
        } ,
        file: {
            type:Sequelize.STRING,
            allowNull: false,
        },
        timestamp: {
            type: Sequelize.DATE(6),
            allowNull: false,
        },
        //path: ,
    });

module.exports = Message;