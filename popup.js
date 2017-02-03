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

function recovery_previous_memory() {
    chrome.storage.sync.get(function(results) {
        Object.keys(results).forEach(function(key) {
            console.log(results);
            if(results[key] && document.getElementById(key.substring(10, key.length))) {
                document.getElementById(key.substring(10, key.length)).value = results[key];
            }
        })
    })
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
