const itemElement = document.getElementById("item");
const wordList = " I'm Web Developer";

let charIndex = 0;
let reverseType = false;

setInterval(() => {
  if (!reverseType) {
    itemElement.textContent = itemElement.textContent + wordList[charIndex];
    charIndex++;
  } else {
    itemElement.textContent = itemElement.textContent.slice(0, itemElement.textContent.length -1 )
  }
  if (itemElement.textContent.length === 0 && reverseType) {
    reverseType = false
    charIndex = 0
  }
  if (charIndex === wordList.length) {
    reverseType = true
  }
 
}, 150);

document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission

  // Get form field values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMessage = document.getElementById('formMessage');

  // Clear previous messages
  formMessage.textContent = '';

  // Initialize validation status
  let isValid = true;

  // Validate name
  if (name.length < 3) {
    formMessage.textContent += 'Name must be at least 3 characters long. ';
    isValid = false;
  }

  // Validate email
  if (!validateEmail(email)) {
    formMessage.textContent += 'Please enter a valid email address. ';
    isValid = false;
  }

  // Validate message
  if (message.length < 10) {
    formMessage.textContent += 'Message must be at least 10 characters long. ';
    isValid = false;
  }

  // If form is valid, show success message and alert
  if (isValid) {
    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = '#5bc0de'; // Blue color for success
    alert('Thank you for your message! We will get back to you soon.');
    // Add your form submission logic here (e.g., AJAX request)
  } else {
    formMessage.style.color = '#d9534f'; // Red color for errors
  }
});

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};


