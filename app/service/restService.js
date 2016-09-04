export function get(url) {
	var promise =  new Promise(function(resolve, reject) {
		var request = new XMLHttpRequest();
		request.open('GET', url, true);

		request.onload = function() {
	  	if (request.status >= 200 && request.status < 400) {
		    var data = JSON.parse(request.responseText);
		    resolve(data);
		  } else {
		    reject();
		  }
		};

		request.onerror = function() {
		  reject();
		};

		request.send();
	});
	return promise;
}

export function post(url, payload) {
	var promise =  new Promise(function(resolve, reject) {
		//var json_upload = "json_name=" + JSON.stringify(payload);
		var request = new XMLHttpRequest();   // new HttpRequest instance 
		request.open("POST", url);
		request.setRequestHeader("Content-Type", "application/json");
		request.setRequestHeader("Accept", "application/json, text/javascript, */*; q=0.01");
		request.setRequestHeader("authorization", "UXF_SessionToken:q/Lb0xKRC6F1p39iGViUoA==___currentencryptionkey___nNJ3b59nae52kQ/CQvql8qUfx6tPHuiDIgIlX2RJpvB8d/U6X9ieSdzFS+cgU914EBZ6mP2fYoUu7aC41b9ONOBNU8F1JuFnH6sTygrbjrU=");
		request.setRequestHeader("X-Requested-With","XMLHttpRequest" );
		
		request.onload = function() {
	  	if (request.status >= 200 && request.status < 400) {
		    var data = JSON.parse(request.responseText);
		    resolve(data);
		  } else {
		    reject();
		  }
		};

		request.onerror = function() {
		  reject();
		};

		request.send(JSON.stringify(payload));
	});
	return promise;
}


var request = new XMLHttpRequest();
