const form  = document.getElementsByTagName('form')[0];


// email
const email = document.getElementById('mail');
const emailError = document.querySelector('#mail + span.error');

email.addEventListener('input', function (event) {
  if (email.validity.valid) {
    emailError.innerHTML = ''; 
    emailError.className = 'error';
  } else {
    showEmailError();
  }
});

form.addEventListener('submit', function (event) {
  if(!email.validity.valid) {
    showEmailError();

    event.preventDefault();
  }
});

function showEmailError() {
  if(email.validity.valueMissing) {
    emailError.textContent = 'Please enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    emailError.textContent = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  emailError.className = 'error active';
}


// zipcode

const zipCode = document.getElementById('zip-code');
const zipCodeError = document.querySelector('#zip-code + span.error');

zipCode.addEventListener('input', function (event) {
  if (zipCode.validity.valid) {
    zipCodeError.innerHTML = ''; 
    zipCodeError.className = 'error';
  } else {
    showZipError();
  }
});

form.addEventListener('submit', function (event) {
  if(!zipCode.validity.valid) {
    showZipError();

    event.preventDefault();
  }
});

function showZipError() {
  if(zipCode.validity.valueMissing) {
    zipCodeError.textContent = 'Please enter your zip code.';
  } else if(zipCode.validity.patternMismatch) {
    zipCodeError.textContent = 'Entered value needs to be a zip code (e.g. 55555 or 55555-5555)';
  } else if(zipCode.validity.tooShort) {
    zipCodeError.textContent = `Zip code should be at least ${ zipCode.minLength } characters; you entered ${ zipCode.value.length }.`;
  }

  zipCodeError.className = 'error active';
}
