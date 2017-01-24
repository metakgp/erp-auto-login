var ERPLoginID = "Your_Roll_No";
var ERPPassword = "Your_Password";
var answer1 = "your_answer_for_first_question";	
var answer2 = "your_answer_for_second_question";	
var answer3 = "your_answer_for_third_question";

var question1 = "your_first_question_here";
var question2 = "your_second_question_here";
var question3 = "your_third_question_here";


var rollNoInput = document.getElementById("user_id");
var ERPPasswordInput = document.getElementById("password");
var questionInput = document.getElementById("question");
console.log(ERPLoginID);
console.log(rollNoInput);
rollNoInput.value = ERPLoginID;
ERPPasswordInput.value = ERPPassword;
rollNoInput.blur(); 
var user_id = rollNoInput.value;
var xhttp = new XMLHttpRequest()
xhttp.onreadystatechange = function() {
if (this.readyState == 4 && this.status == 200) {
		var response = this.responseText;
		var questionInput = document.getElementById("question");
		questionInput.innerHTML = response;
		console.log(response);
		document.getElementById("answer_div").className = document.getElementById("answer_div").className.replace(/\bhidden\b/,'');
		var answerInput = document.getElementById("answer");
		if(response == window.question1){
			answerInput.value = window.answer1;
		}
		else if(response == window.question2){
			answerInput.value = window.answer2;
		}
		else if(response == window.question3){
			answerInput.value = window.answer3;
		}
		document.forms[0].submit();
    }
    
};
xhttp.open("POST", "https://erp.iitkgp.ernet.in/SSOAdministration/getSecurityQues.htm", true);
var params="user_id="+user_id;
xhttp.setRequestHeader("Accept", "text/plain");
xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhttp.send(params);
