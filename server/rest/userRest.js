var person = require('./../model/person');
var student = require('./../model/student');

module.exports = function (server) {
    //create
    server.get('/user', function (req, res) {
        var user = {name: 'shula', id: '1'};
        console.log('getUser');
        
        res.status(201).json(user);
    });
    server.post('/user', function (req, res) {
        console.log('postUser');
    	console.log(req.body);
        res.status(201).json(req.body);
    });
};