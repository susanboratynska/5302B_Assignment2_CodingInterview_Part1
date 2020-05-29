window.onload = function (){
	// alert("Testing");

	// Set variables:

	var fetchemployees = "http://sandbox.bittsdevelopment.com/code1/fetchemployees.php";
	var fetchroles = "http://sandbox.bittsdevelopment.com/code1/fetchroles.php";
	
	var employeeObject; 
	var roleObject;

	var output__team = document.getElementById('output__team');
	var output__roles = document.getElementById('output__roles');

	var button__team = document.getElementById('button__team');
	var button__roles = document.getElementById('button__roles');


	// Function to output select values:
	// function selectvalues (){
	// 	var i = 0;
	// 	while (i <= 10){
	// 		idname.innerHTML += "<option value='" + i + "'>" + i + "</option>";
	// 		i++;
	// 	}
	// }

	// Add event listener for buttons:

	button__team.addEventListener('click', clickDocumentLoaderTeam, false);
	button__roles.addEventListener('click', clickDocumentLoaderRoles, false);


	// Function to request data from server:
	function requestData (objectvariable, displayfunction, fetchurl){

		var xmlhttp_team = new XMLHttpRequest(); 
	   
		xmlhttp_team.onreadystatechange = function() { 
		    if (this.readyState == 4 && this.status == 200) { 
		        objectvariable = JSON.parse(this.responseText);
		        console.log(objectvariable);
		        displayfunction(objectvariable);

		    } 
		}; 
		xmlhttp_team.open("GET", fetchurl, true); 
		xmlhttp_team.send(); 
	}

	
	// Function to request Team Member data from server:
	function clickDocumentLoaderTeam (event){
		requestData(employeeObject, getMemberData, fetchemployees);
	}

	// Function to request Team Member data from server:
	// function documentLoaderTeam (){
	// 	var xmlhttp_team = new XMLHttpRequest(); 
	   
	// 	xmlhttp_team.onreadystatechange = function() { 
	// 	    if (this.readyState == 4 && this.status == 200) { 
	// 	        employeeObject = JSON.parse(this.responseText);
	// 	        console.log(employeeObject);
	// 	        getMemberData(employeeObject);

	// 	    } 
	// 	}; 
	// 	xmlhttp_team.open("GET", fetchemployees, true); 
	// 	xmlhttp_team.send(); 
	// }



	// Function to request Role data from server:
	function clickDocumentLoaderRoles (event) {
		requestData(roleObject, getRolesData, fetchroles);
	}

	// Function to request Role data from server:
	// function documentLoaderRoles (){
	// 	var xmlhttp_roles = new XMLHttpRequest(); 
	   
	// 	xmlhttp_roles.onreadystatechange = function() { 
	// 	    if (this.readyState == 4 && this.status == 200) { 
	// 	        roleObject = JSON.parse(this.responseText);
	// 	        console.log(roleObject);
	// 	        getRolesData(roleObject);
	// 	    } 
	// 	}; 
	// 	xmlhttp_roles.open("GET", fetchroles, true); 
	// 	xmlhttp_roles.send(); 
	// }
	
	

	// Function to display Team Member data:
	function getMemberData(data) {
		output__team.innerHTML = "";

		for (i in data){

			if (data[i].employeeisfeatured == 1) {
				var crown = 'crown';
			} else {
				crown = '';
			}

			// console.log("test");
			output__team.innerHTML += "<div class='card' id='" + data[i].employeeid + "'><div class='card__crown " + crown + "'></div><div class='card__circle fill'><img src='http://sandbox.bittsdevelopment.com/code1/employeepics/" +  data[i].employeeid + ".jpg'></div><div class='card__name'><h3>" 
			+ data[i].employeefname + " " + data[i].employeelname + "</h3></div><div class='card__description'>" + data[i].employeebio + "</div><div class='card__rolecontainer' id='roleid" + data[i].employeeid + "'></div>";

			
			for (r in data[i].roles){
				document.getElementById('roleid' + data[i].employeeid).innerHTML += "<div class='card__role' style='background-color:" + data[i].roles[r].rolecolor + "'> " + data[i].roles[r].rolename + "</div></div>";
			}
		}
	}

	// Function to display Roles data:
	function getRolesData(data) {
		output__roles.innerHTML = "";
		for (i in data){
			output__roles.innerHTML += "<div class='roles' style='background-color: " + data[i].rolecolor + "'><div>" + data[i].rolename + "</div></div>";
			// output__roles.innerHTML += "<option style='background-color: '" + data[i].rolecolor + "' value='" + data[i].rolename + "'>" + data[i].rolename + "</option>";
		}
	}

}







