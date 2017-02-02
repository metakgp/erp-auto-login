var ERPLoginID = "";
var ERPPassword = "";
var answer1 = "";	
var answer2 = "";	
var answer3 = "";
var question1 = "";
var question2 = "";
var question3 = "";

chrome.storage.sync.get('ERPIITKGP_ERPLoginID', function (result1) 
{
    ERPLoginID = result1.ERPIITKGP_ERPLoginID;
	chrome.storage.sync.get('ERPIITKGP_ERPPassword', function (result2) 
	{
    	ERPPassword = result2.ERPIITKGP_ERPPassword;
		chrome.storage.sync.get('ERPIITKGP_answer1', function (result3) 
		{
		    answer1 = result3.ERPIITKGP_answer1;
			chrome.storage.sync.get('ERPIITKGP_answer2', function (result4) 
			{
		    	answer2 = result4.ERPIITKGP_answer2;
				chrome.storage.sync.get('ERPIITKGP_answer3', function (result5) 
				{
    				answer3 = result5.ERPIITKGP_answer3;
					chrome.storage.sync.get('ERPIITKGP_question1', function (result6) 
					{
					    question1 = result6.ERPIITKGP_question1;
						chrome.storage.sync.get('ERPIITKGP_question2', function (result7) 
						{
    						question2 = result7.ERPIITKGP_question2;
							chrome.storage.sync.get('ERPIITKGP_question3', function (result8) 
							{
							    question3 = result8.ERPIITKGP_question3;
								var rollNoInput = document.getElementById("user_id");
								var ERPPasswordInput = document.getElementById("password");
								var questionInput = document.getElementById("question");
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
							});
						});
					});
				});
			});
		});
	});
});

