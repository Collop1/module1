// Change left column color and text
function changeLeftCol() {
    document.getElementById("column1").classList.add("changed-color");
    // Change header with user input or placeholder
    const leftInputField = document.getElementById('leftColInput');
    const leftInputValue = leftInputField.value || leftInputField.placeholder; // Use placeholder if input is empty
    document.getElementById('heading1').textContent = leftInputValue;
}
// Change right column color and text
function changeRightCol() {
    document.getElementById("column2").classList.add("changed-color");
    // Change header with user input or placeholder
    const rightInputField = document.getElementById('rightColInput');
    const rightInputValue = rightInputField.value || rightInputField.placeholder; // Use placeholder if input is empty
    document.getElementById('heading2').textContent = rightInputValue;
}