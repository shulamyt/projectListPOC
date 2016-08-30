module.exports = {
	getProjects : function getProjects() {
		return new Promise(function(resolve, reject) {
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
			resolve(projects);
		});
	}
}