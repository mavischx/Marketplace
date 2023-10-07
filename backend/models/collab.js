//const user = require('./user'); 
// const project= require('./project'); 

const Sequelize = require('sequelize');
const sequelize = require('../utils/db');

const ProjectCollab = sequelize.define('ProjectCollab', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    projID: {
      type: Sequelize.INTEGER,
      allowNull: false,
      references: {
        model: 'Projects', //project.id
        key: 'id', 
      },
    },
    startDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    endDate: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  
module.exports = ProjectCollab;


