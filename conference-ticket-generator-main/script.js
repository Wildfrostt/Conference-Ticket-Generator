const initialScript = document.getElementById('initial');
const alternateScript = document.getElementById('alternate');
const imageInput = document.getElementById('image');
const warningWriteUp = document.getElementById('info-2');
const originalWriteUp = document.getElementById('info-1');



function handleFileUpload() {
  const file = imageInput.files[0]; // Access the uploaded file

  if (file) {
    if (file.size <= 500 * 1024) { // Check if the file size is less than or equal to 500KB
      initialScript.style.visibility = "visible";
      alternateScript.style.visibility = "hidden";
      
    } else {
      originalWriteUp.style.visibility = "hidden";
      warningWriteUp.style.visibility = "visible";
    }
  } else {
    alert("No file selected. Please upload an image.");
  }
}

// // Add event listener to the file input
imageInput.addEventListener('change', handleFileUpload);

// Function to validate email
function emailError() {
  const emailInput = document.getElementById('email'); // The input field
  const emailValue = emailInput.value.trim(); // Value inside the field
  const errEmail = document.getElementById('email-error'); // Error message container

  // Regular Expression for Email Validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  // Check if the email matches the regex
  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add('error');
    errEmail.style.visibility = "visible"; // Show error message
  } else {
    errEmail.style.visibility = "hidden"; // Hide error message
    emailInput.classList.remove('error');
  }
}

// Attach event listener to validate on input blur
document.getElementById('email').addEventListener('input', emailError);





