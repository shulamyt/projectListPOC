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
				status:{
					code: "",
					decode: ""
				},
				location:{
					
				},
				type:"ciq",		
				stage:{},
				completionDate:{},
				action:{}
			}
		];
		return res.json(projects);   
    }
  },
}