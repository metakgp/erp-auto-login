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
  });
}

document.getElementById('save').addEventListener('click',save_options);