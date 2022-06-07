(function() {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let nameInput = document.querySelector('#contact-name');
  let messageInput = document.querySelector('#contact-message');

  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper
    // Remove an existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }
    // Now add the error, if the message is not empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function validateEmail() {
    let value = emailInput.value;
    if (!value) {
      showErrorMessage(emailInput, 'E-mail is a required field.');
      return false;
    }
    if (value.indexOf('@') === -1) {
      showErrorMessage(emailInput, 'You must enter a valid e-mail address.');
      return false;
    }
    showErrorMessage(emailInput, null);
    return true;
  }

  function validateName() {
    let value = nameInput.value;
    if (!value) {
      showErrorMessage(nameInput, 'Name is a required field.');
      return false;
    }
    showErrorMessage(nameInput, null);
    return true;
  }

  function validateMessage() {
    let value = messageInput.value;
    if (!value) {
      showErrorMessage(messageInput, 'Message is required feild.');
      return false;
    }
    showErrorMessage(messsageInput, null);
    return true;
  }

  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validateName();
    let isValidMessage = validateMessage();
    return isValidEmail && isValidName && isValidMessage;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateForm()) {
      alert('Success!');
    }
  });

  emailInput.addEventListener('input', validateEmail);
  nameInput.addEventListener('input', validateName);
  messageInput.addEventListener('input', validateMessage);
})();
