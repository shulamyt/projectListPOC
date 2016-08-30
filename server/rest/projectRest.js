var projectService = require('./../service/projectService');

module.exports = function (server) {
    server.get('/projects', function (req, res) {
        projectService.getProjects().then(function(projects){
            console.log('getProjects');
            res.status(201).json(projects);
        });
    });
};