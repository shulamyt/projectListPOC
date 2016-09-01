var location =  'http://localhost:9000';
module.exports = {
  '/projects': {
    secure: false,
    target: location + '/projects',
    bypass: function(req, res, proxyOptions) {
    	var projects = {
	"filterCriterions":null,
	"sortCriterions":null,
	"options":null,
	"pagingCriterion":null,
	"results":[

		{
			"type":"Complex_Example_GT",
			"statusChangeDate":1469979151000,
			"status":{
				"code":"CIN PROGRESS",
				"decode":"In progress",
				"listCode":"ProjectStatus"
			},
			"startDate":1469979151000,
			"plannedStartDate":1469979140000,
			"plannedCompletionDate":1470160800000,
			"planID":"D50308DFE954455EB549A8AEB9B96C691469979151",
			"oid":"C4B2BC2CED364866A10244C1F3E350E71469979152",
			"name":"DrorTest1",
			"manager":null,
			"lastUpdated":1469979154000,
			"delayInMilliseconds":2571523722,
			"id":"Project3",
			"currentEstimatedDate":1470160800000,
			"completionDate":null,
			"comments":null,
			"attributes":[],
			"action":"Provide",
			"stages":[
				{
					"code":"ComplexExampleGT",
					"name":"Complex Example GT",
					"status":"InProgress"
				}
			],
			"countError":0,
			"projectGroups":null,
			"isPartOfHierarchy":false,
			"isScheduled":false,
			"scheduledStartDate":null,
			"scheduledCompleteDate":null,
			"ponr":false,
			"external":false
		},
		{
			"type":"Small_Cell_CIQ_SC",
			"statusChangeDate":1470658303000,
			"status":{
				"code":"CIN PROGRESS",
				"decode":"In progress",
				"listCode":"ProjectStatus"
			},
			"startDate":1470658303000,
			"plannedStartDate":1470658271000,
			"plannedCompletionDate":1471954260000,
			"planID":"A04490053304417D92778B060C405D611470658303",
			"oid":"E09F317190B94C61B538535A7DA6CA461470658304",
			"name":"gtTest",
			"manager":null,
			"lastUpdated":1470658340000,
			"delayInMilliseconds":778063722,
			"id":"Project21",
			"currentEstimatedDate":1471608720000,
			"completionDate":null,
			"comments":null,
			"attributes":[],
			"action":"Provide",
			"stages":[
				{
					"code":"CIQ",
					"name":"CIQ",
					"status":"InProgress"
				},
				{
					"code":"SiteCompliance",
					"name":"Site Compliance",
					"status":"InProgress"
				}],
			"countError":0,
			"projectGroups":null,
			"isPartOfHierarchy":false,
			"isScheduled":false,
			"scheduledStartDate":null,
			"scheduledCompleteDate":null,
			"ponr":false,
			"external":false
		},
		{
			"type":"Small_Cell_CIQ_SC",
			"statusChangeDate":1468931414000,
			"status":{
				"code":"CIN PROGRESS",
				"decode":"In progress",
				"listCode":"ProjectStatus"
			},
			"startDate":1468931414000,
			"plannedStartDate":1468931401000,
			"plannedCompletionDate":1470227400000,
			"planID":"4ED4345C48984F70A6E571D7B3219F3A1468931415",
			"oid":"435F430C9708421EBC15E8908DC4ABDC1468931419",
			"name":"noam1",
			"manager":null,
			"lastUpdated":1469083725000,
			"delayInMilliseconds":2504923723,
			"id":"Project1",
			"currentEstimatedDate":1470160800000,
			"completionDate":null,
			"comments":null,
			"attributes":[],
			"action":"Provide",
			"stages":[
				{
					"code":"CIQ",
					"name":"CIQ",
					"status":"InProgress"
				},
				{
					"code":"SiteCompliance",
					"name":"Site Compliance",
					"status":"InProgress"
				}
			],
			"countError":0,
			"projectGroups":null,
			"isPartOfHierarchy":false,
			"isScheduled":false,
			"scheduledStartDate":null,
			"scheduledCompleteDate":null,
			"ponr":false,
			"external":false
		},
		{
			"type":"Small_Cell_CIQ_SC",
			"statusChangeDate":1469008210000,
			"status":{
				"code":"CIN PROGRESS",
				"decode":"In progress",
				"listCode":"ProjectStatus"
			},
			"startDate":1469008210000,
			"plannedStartDate":1469008197000,
			"plannedCompletionDate":1470304140000,
			"planID":"11077C76C05F42CEAA76BDECE9FA0C481469008211",
			"oid":"F52981C841A441F29623745C597EBBC71469008212",
			"name":"noam2",
			"manager":null,
			"lastUpdated":1469008258000,
			"delayInMilliseconds":2428183723,
			"id":"Project2",
			"currentEstimatedDate":1470131400000,
			"completionDate":null,
			"comments":null,
			"attributes":[],
			"action":"Provide",
			"stages":[
				{
					"code":"CIQ",
					"name":"CIQ",
					"status":"InProgress"
				},
				{
					"code":"SiteCompliance",
					"name":"Site Compliance",
					"status":"InProgress"
				}
			],
			"countError":0,
			"projectGroups":null,
			"isPartOfHierarchy":false,
			"isScheduled":false,
			"scheduledStartDate":null,
			"scheduledCompleteDate":null,
			"ponr":false,
			"external":false
		}
	],
	"listCount":4,
	"dynamicAttributes":null
};
		return res.json(projects);   
    }
  },
}

