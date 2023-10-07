const { INTEGER, DataTypes } = require('sequelize');
const { Json } = require('sequelize/types/utils');
const Project = require('../models/project');
const User = require('../models/user');
const projCollab = require('../models/projectCollab')
const error = require('./err')

exports.projectCollab = (req, res, next) => {
    res.render('projCollab', {
        pageTitle: "Project: " + projCollab.id,
        path: '/',
        editing: false
    });
};

exports.postProject = (req, res, next) => {
    const title = (req.body.title);
    const description = req.body.description;
    const skillsRequired = req.body.skillsRequired;
    //    const status = req.body.status;
    //  const noOfCollaborators = req.body.noOfCollaborators;
    const creatorID = req.body.creatorID;

    req.user
        .createProject({
            title: this.title,
            description: this.description,
            skillsRequired: this.skillsRequired,
            creatorID: this.creatorID
        })
        .then(result => {
            res.redirect('/')
        })
        .catch(err => {
            console.log(err);
            return error.get404
        })
}

exports.editProject = (req, res, next) => {
    const editMode = req.query.edit;
    if (!editMode) {
        return res.redirect('/');
    }
    const projID = req.params.projectId;
    req.user
        .getProjects({ where: { id: projID } })

        .then(projects => {
            const project = projects[0];
            if (!project) {
                return res.redirect('/');
            }
            res.render('/', {
                pageTitle: 'Edit Project',
                path: '/',
                editing: editMode,
                project: project
            })
                .catch(err => {
                    console.log(err)
                })
        })
}

exports.getProject = (req, res, next) => {
    req.user
        .getProjects()
        .then(projects => {
            res.render('admin/projects', {
                projs: projects,
                pageTitle: ('Project:' + Project.id), // You should set the title here, not 'Project' + Project.id
                path: '/',
            });
        })
        .catch(err => {
            console.log(err);
        });
};

exports.postRemoveProject = (req, res, next) => {
    const projId = req.body.projectId;
    Project.findById(projId)
      .then(project => {
        return project.destroy();
      })
      .then(result => {
        console.log('DESTROYED PROJECT');
        res.redirect('/admin/products');
      })
      .catch(err => console.log(err));
  };
  