# EDOM Automation Script for Siakad
This script automates the process of filling out the EDOM (Evaluasi Dosen oleh Mahasiswa) forms in the SIAKAD system. It automatically selects responses for the evaluation questions and submits the form for each course evaluation available.

## How to Use
1. First, login to the SIAKAD website at [https://siakad.unj.ac.id](https://siakad.unj.ac.id "SIAKAD UNJ")

2. Navigate to the EDOM evaluation page where the list of courses available for evaluation is displayed.

3. Open your browser's console. Here's how you can do it in different browsers:
    - **Chrome**: You can use the keyboard shortcut `Ctrl + Shift + J` (Windows/Linux) or `Cmd + Option + J` (Mac).
    - **Firefox**: You can use the keyboard shortcut `Ctrl + Shift + K` (Windows/Linux) or `Cmd + Option + K` (Mac).
    - **Safari**: First, enable the Develop menu in Safari's Advanced preferences. You can use the keyboard shortcut `Cmd + Option + C` (Mac).

3. Copy and paste the following script into the console:

```javascript
fetch("https://raw.githubusercontent.com/hrafsa/edom-filler/main/edom-filler.js")
  .then((res) => res.text())
  .then((t) => eval(t));
```

4. Press Enter to run the script.

## Code Explanation
The script overrides the default window.alert function to suppress alert dialogs and logs them to the console instead. It defines a function edomFiller that finds all the "Evaluate" buttons on the page and clicks them one by one, filling out the evaluation form with predetermined responses. After setting the responses, it automatically clicks the "Save" button. This process repeats for each course evaluation available.

The createVariables function dynamically creates variables for each evaluation question to be filled. These variables are then used to set the responses.

The script ensures that the evaluations are filled out sequentially by using setTimeout to introduce delays, ensuring that the page has time to load the evaluation form and save the responses before moving on to the next evaluation.

---
> [!IMPORTANT] 
> **This script is intended for educational purposes only.**
> 
> Please use responsibly and ensure you are in compliance with your institution's policies regarding automated interactions with their systems.

---
> [!NOTE]
> Last Update : 26 July 2024
> 
> Version : 1.2.0
