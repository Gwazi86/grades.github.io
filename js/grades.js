// JavaScript Document



function grades() {
	var grade;
	
	grade=Number(document.getElementById("num").value);
	
	try {
		if(grade == "")  throw "Empty input";
		if(isNaN(grade)) throw "Not a number";
		grade = Number(grade);
		if(grade < 0.0)  throw "Not in range. Number must be between 0.0 and 1.0";
		if(grade > 1.0)   throw "Not in range. Number must be between 0.0 and 1.0";
		
		if(grade >= 0.9) {
			alert("A");
		}
		else if(grade >= 0.8) {
			alert("B");
		}
		else if(grade >= 0.7) {
			alert("C");
		}
		else if(grade >= 0.6) {
			alert("D");
		}
		else {
			alert("F");
		}
		
	}
	catch(err) {
		alert(err);
	}
}