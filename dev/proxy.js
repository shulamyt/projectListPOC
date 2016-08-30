var location =  'http://localhost:9000';
module.exports = {
  '/projects': {
    secure: false,
    target: location + '/projects',
    bypass: function(req, res, proxyOptions) {
    	var projects = [
			{
				id: "1",
				name: "p1",
				type: "ciq",
				status: "NOT_STARTED"
			},
			{
				id: "2",
				name: "p2",
				type: "ciq",
				status: "NOT_STARTED"
			},
			{
				id: "3",
				name: "p3",
				type: "ciq",
				status: "NOT_STARTED"
			}
		];
		return res.json(projects);   
    }
  },
}