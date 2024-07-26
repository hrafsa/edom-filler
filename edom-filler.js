// Override window.alert with a custom function
window.alert = function (message) {
  console.log("Alert suppressed: " + message);
};

// Function for filling the evaluation form
function edomFiller() {
  // Find button elements with class "btn btn-warning"
  var buttons = document.querySelectorAll(".btn.btn-warning");

  // Filter buttons with IDs starting with "evaluasiKuliah_"
  var evaluasiButtons = Array.from(buttons).filter(function (button) {
    return button.id.startsWith("evaluasiKuliah_");
  });

  // Function for clicking the buttons sequentially
  function clickButton(index) {
    if (index < evaluasiButtons.length) {
      evaluasiButtons[index].click();

      // Wait 2 seconds before running additional script
      setTimeout(function () {
        createVariables();

        // Setting values after creating variables
        nilai1[2].checked = true;
        nilai2[2].checked = true;
        nilai3[3].checked = true;
        nilai4[2].checked = true;
        nilai5[3].checked = true;
        nilai6[3].checked = true;
        nilai7[1].checked = true;
        nilai8[3].checked = true;
        nilai9[2].checked = true;
        nilai10[3].checked = true;
        nilai11[1].checked = true;
        nilai12[2].checked = true;
        nilai13[2].checked = true;
        nilai14[2].checked = true;
        nilai15[2].checked = true;
        nilai16[2].checked = true;
        nilai17[3].checked = true;
        nilai18[3].checked = true;
        nilai19[2].checked = true;
        nilai20[2].checked = true;
        nilai21[2].checked = true;
        nilai22[3].checked = true;
        nilai23[2].checked = true;
        nilai24[3].checked = true;

        // Click save button after setting the values
        setTimeout(function () {
          document.getElementById("btnSimpan").click();

          // Call the function again for the next button
          setTimeout(function () {
            if (index + 1 >= evaluasiButtons.length) {
              // If this was the last button, show the alert
              window.alert("Semua edom sudah di isi!!!");
            } else {
              clickButton(index + 1);
            }
          }, 2000); // 2-second delay between clicking evaluation buttons
        }, 2000); // 2-second delay before clicking save button
      }, 2000); // 2-second delay after clicking evaluation button
    }
  }

  // Start clicking buttons from the first index
  clickButton(0);
}

// Function for creating variables
function createVariables() {
  for (var i = 1; i <= 24; i++) {
    // Create variables with DOM
    var str = "nilai" + i + " = document.querySelectorAll('#nilai_" + i + "')";
    // Declare and set dynamic variables using eval
    eval(str);
  }
}

// Restore the original window.alert function
window.alert = function (message) {
  console.log("Alert suppressed: " + message);
};

// Call the function to click the buttons
edomFiller();
