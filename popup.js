$("#ERPLoginID").blur(function() {
  var roll = $("#ERPLoginID").val();

  if (roll == "" || roll == null) {
    alert("Insert the roll number!");
    return;
  }

  var que1 = "";
  var que2 = "";
  var que3 = "";
  var i = 0;
  while (que1 == "" || que2 == "" || que3 == "") {
    if (i == 10) break;

    var request = $.ajax({
      url: "https://erp.iitkgp.ac.in/SSOAdministration/getSecurityQues.htm",
      type: "POST",
      cache: false,
      data: "user_id=" + roll,
      dataType: "text"
    });
    request.done(function(response) {
      if (que1 == "") {
        que1 = response;
      } else if (que2 == "" && response != que1) {
        que2 = response;
      } else if (response != que1 && response != que2) {
        que3 = response;
        $("#question1").val(que1);
        $("#question2").val(que2);
        $("#question3").val(que3);
      }
    });
    i++;
  }
});

// Saves options to chrome.storage
function save_options() {
  chrome.storage.sync.set(
    {
      ERPIITKGP_ERPLoginID: document.getElementById("ERPLoginID").value,
      ERPIITKGP_ERPPassword: document.getElementById("ERPPassword").value,
      ERPIITKGP_answer1: document.getElementById("answer1").value,
      ERPIITKGP_answer2: document.getElementById("answer2").value,
      ERPIITKGP_answer3: document.getElementById("answer3").value,
      ERPIITKGP_question1: document.getElementById("question1").value,
      ERPIITKGP_question2: document.getElementById("question2").value,
      ERPIITKGP_question3: document.getElementById("question3").value
    },
    function() {
      document.getElementById("status").innerHTML =
        '<div class="alert alert-success" role="alert">Your credentials have been saved. Open <a href="https://erp.iitkgp.ac.in" target="_blank">ERP, IITKGP</a>.</div>';
    }
  );
}

function recovery_previous_memory() {
  chrome.storage.sync.get(function(results) {
    Object.keys(results).forEach(function(key) {
      console.log(results);
      if (
        results[key] &&
        document.getElementById(key.substring(10, key.length))
      ) {
        document.getElementById(key.substring(10, key.length)).value =
          results[key];
      }
    });
  });
}

function show_open_if_already_saved() {
  chrome.storage.sync.get(results => {
    chrome.extension.getBackgroundPage().console.log("results are  ", results);
    let values = Object.values(results);
    if (!values.includes(""))
      document.getElementById("status").innerHTML =
        '<div class="alert alert-success" role="alert">Your credentials have been saved. Open <a href="https://erp.iitkgp.ac.in" target="_blank">ERP, IITKGP</a>.</div>';
  });
}

function reset_options() {
  document.getElementById("ERPLoginID").value = "";
  document.getElementById("ERPPassword").value = "";
  document.getElementById("answer1").value = "";
  document.getElementById("answer2").value = "";
  document.getElementById("answer3").value = "";
  document.getElementById("question1").value = "";
  document.getElementById("question2").value = "";
  document.getElementById("question3").value = "";
  chrome.storage.sync.set(
    {
      ERPIITKGP_ERPLoginID: document.getElementById("ERPLoginID").value,
      ERPIITKGP_ERPPassword: document.getElementById("ERPPassword").value,
      ERPIITKGP_answer1: document.getElementById("answer1").value,
      ERPIITKGP_answer2: document.getElementById("answer2").value,
      ERPIITKGP_answer3: document.getElementById("answer3").value,
      ERPIITKGP_question1: document.getElementById("question1").value,
      ERPIITKGP_question2: document.getElementById("question2").value,
      ERPIITKGP_question3: document.getElementById("question3").value
    },
    function() {
      document.getElementById("status").innerHTML =
        '<div class="alert alert-success" role="alert">Your credentials have been reset. Open <a href="https://erp.iitkgp.ac.in" target="_blank">ERP, IITKGP</a>.</div>';
    }
  );
}

$(document).ready(function() {
  [
    "ERPLoginID",
    "ERPPassword",
    "answer1",
    "answer2",
    "answer3",
    "question1",
    "question2",
    "question3"
  ].forEach(element => {
    document
      .getElementById(element)
      .addEventListener("input", () => save_options());
  });
  show_open_if_already_saved();
  document.getElementById("reset").addEventListener("click", reset_options);
  recovery_previous_memory();
});
