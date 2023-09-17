var keys = [
	'ERPIITKGP_ERPLoginID',
	'ERPIITKGP_ERPPassword',
	'ERPIITKGP_answer1',
	'ERPIITKGP_answer2',
	'ERPIITKGP_answer3',
	'ERPIITKGP_question1',
	'ERPIITKGP_question2',
	'ERPIITKGP_question3'
];

var inputTags = {
	'ERPIITKGP_ERPLoginID' : document.getElementById('user_id'),
	'ERPIITKGP_ERPPassword' : document.getElementById('password')
};

chrome.storage.sync.get(keys, function(authData) {
	if (authData["ERPIITKGP_ERPLoginID"] && authData["ERPIITKGP_ERPPassword"]) {
		enterData(authData);
	} else {
		console.debug("ERP auto login skipped - credentials have not been set!");
	}
});

function stopper(){
	if(sessionStorage.getItem("q1")=="1" && sessionStorage.getItem("q2")=="1" && sessionStorage.getItem("q3")=="1"){
		alert("wrong credentials; Correct your details in the extension and open erp again in new tab/window");

		throw Error("wrong credentials");
	}
}

var enterData = function(authData) {
	inputTags['ERPIITKGP_ERPLoginID'].value = authData['ERPIITKGP_ERPLoginID'];
	inputTags['ERPIITKGP_ERPPassword'].value = authData['ERPIITKGP_ERPPassword'];
	inputTags['ERPIITKGP_ERPLoginID'].blur();

	var xhttp = new XMLHttpRequest()

	xhttp.onreadystatechange = function answerSecurityQuestion() {
		if(this.readyState == 4 && this.status == 200) {
			var securityQuestion 		= this.responseText;
			var securityQuestionInput 	= document.getElementById("question");
			var answerInput 			= document.getElementById("answer");

			securityQuestionInput.innerHTML = securityQuestion;
			document.getElementById("answer_div").className = document.getElementById("answer_div").className.replace(/\bhidden\b/,'');

			if(securityQuestion == authData['ERPIITKGP_question1']){
				answerInput.value = authData['ERPIITKGP_answer1'];
				sessionStorage.setItem("q1", "1");
			} else if(securityQuestion == authData['ERPIITKGP_question2']){
				answerInput.value = authData['ERPIITKGP_answer2'];
				sessionStorage.setItem("q2", "1");
			} else if(securityQuestion == authData['ERPIITKGP_question3']){
				answerInput.value = authData['ERPIITKGP_answer3'];
				sessionStorage.setItem("q3", "1");
			}
			detect_network(function(on_campus_network) {
				if (on_campus_network) {
					document.forms[0].submit();
				}
			});
    }
	}
	stopper();

	xhttp.open("POST", "https://erp.iitkgp.ac.in/SSOAdministration/getSecurityQues.htm", true);
	var params="user_id=" + authData['ERPIITKGP_ERPLoginID'];
	xhttp.setRequestHeader("Accept", "text/plain");
	xhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
	xhttp.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	xhttp.send(params);
}

function detect_network(callback) {
	fetch("https://campus.kossiitkgp.org/")
	.then((blob) => blob.json())
	.then((response) => {
		if (response.is_inside_kgp) {
			callback(true);
		} else {
			callback(false);
		}
	})
	.catch(() => {
		callback(false);
	});
}