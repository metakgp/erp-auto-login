// Saves options to chrome.storage
function save_options() {

  chrome.storage.sync.set({
      ERPIITKGP_ERPLoginID : document.getElementById('ERPLoginID').value,
      ERPIITKGP_ERPPassword : document.getElementById('ERPPassword').value,
      ERPIITKGP_answer1 : document.getElementById('answer1').value,
      ERPIITKGP_answer2 : document.getElementById('answer2').value,
      ERPIITKGP_answer3 : document.getElementById('answer3').value,
      ERPIITKGP_question1 : document.getElementById('question1').value,
      ERPIITKGP_question2 : document.getElementById('question2').value,
      ERPIITKGP_question3 : document.getElementById('question3').value
  }, function() {
    document.getElementById('status').innerHTML = '<div class="alert alert-success" role="alert">Your credentials have been saved. Open <a href="https://erp.iitkgp.ernet.in" target="_blank">ERP, IITKGP</a>.</div>';
  });
}

function recovery_previous_memory()
{
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
                                    document.getElementById('ERPLoginID').value = ERPLoginID;
                                    document.getElementById('ERPPassword').value = ERPPassword;
                                    document.getElementById('answer1').value = answer1;
                                    document.getElementById('answer2').value = answer2;
                                    document.getElementById('answer3').value = answer3;
                                    document.getElementById('question1').value = question1; 
                                    document.getElementById('question2').value = question2;
                                    document.getElementById('question3').value = question3;
                                });
                            });
                        });
                    });
                });
            });
        });
    });
}

function reset_options()
{
    document.getElementById('ERPLoginID').value = "";
    document.getElementById('ERPPassword').value = "";
    document.getElementById('answer1').value = "";
    document.getElementById('answer2').value = "";
    document.getElementById('answer3').value = "";
    document.getElementById('question1').value = ""; 
    document.getElementById('question2').value = "";
    document.getElementById('question3').value = "";
    chrome.storage.sync.set({
        ERPIITKGP_ERPLoginID : document.getElementById('ERPLoginID').value,
        ERPIITKGP_ERPPassword : document.getElementById('ERPPassword').value,
        ERPIITKGP_answer1 : document.getElementById('answer1').value,
        ERPIITKGP_answer2 : document.getElementById('answer2').value,
        ERPIITKGP_answer3 : document.getElementById('answer3').value,
        ERPIITKGP_question1 : document.getElementById('question1').value,
        ERPIITKGP_question2 : document.getElementById('question2').value,
        ERPIITKGP_question3 : document.getElementById('question3').value
    }, function() {
      document.getElementById('status').innerHTML = '<div class="alert alert-success" role="alert">Your credentials have been reset. Open <a href="https://erp.iitkgp.ernet.in" target="_blank">ERP, IITKGP</a>.</div>';
    });
}


document.getElementById('save').addEventListener('click',save_options);
document.getElementById('reset').addEventListener('click',reset_options);
recovery_previous_memory();
