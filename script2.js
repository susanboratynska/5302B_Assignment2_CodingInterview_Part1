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

	// Add event listener for buttons:

	button__team.addEventListener('click', documentLoaderTeam, false);
	button__roles.addEventListener('click', documentLoaderRoles, false);




	// Function to request Team Member data from server:
	function documentLoaderTeam (){
		var xmlhttp_team = new XMLHttpRequest(); 
	   
		xmlhttp_team.onreadystatechange = function() { 
		    if (this.readyState == 4 && this.status == 200) { 
		        employeeObject = JSON.parse(this.responseText);
		        console.log(employeeObject);
		        getMemberData(employeeObject);

		    } 
		}; 
		xmlhttp_team.open("GET", fetchemployees, true); 
		xmlhttp_team.send(); 
	}

	// Function to request Role data from server:
	function documentLoaderRoles (){
		var xmlhttp_roles = new XMLHttpRequest(); 
	   
		xmlhttp_roles.onreadystatechange = function() { 
		    if (this.readyState == 4 && this.status == 200) { 
		        roleObject = JSON.parse(this.responseText);
		        console.log(roleObject);
		        getRolesData(roleObject);
		    } 
		}; 
		xmlhttp_roles.open("GET", fetchroles, true); 
		xmlhttp_roles.send(); 
	}
	
	

	// Function to display Team Member data:
	function getMemberData(data) {
		for (i in employeeObject){
			// console.log("test");
			output__team.innerHTML += "<div class='card' id='" + employeeObject[i].employeeid +"'><div class='card__crown'></div><div class='card__circle fill'><img src='http://sandbox.bittsdevelopment.com/code1/employeepics/" +  employeeObject[i].employeeid + ".jpg'></div><div class='card__name'><h3>" + employeeObject[i].employeefname + " " + employeeObject[i].employeelname + "</h3></div><div class='card__description'>" + employeeObject[i].employeebio + "</div>";
			for (r in employeeObject[i].roles){
				document.getElementById(employeeObject[i].employeeid).innerHTML += "<div class='card__role' style='background-color:" + employeeObject[i].roles[r].rolecolor + "'> " + employeeObject[i].roles[r].rolename + "</div>";
			}
		}
	}

	// Function to display Roles data:
	function getRolesData(data) {
		for (i in roleObject){
			output__roles.innerHTML += "<div class='roles' style='background-color: " + roleObject[i].rolecolor + "'><div>" + roleObject[i].rolename + "</div></div>";
		}
	}

}







