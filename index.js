const email = document.getElementById('email')
const form = document.getElementById('form')


const validateEmail = () => {
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  if ($(email).val() === '' || $(email).val() === null) {
    $('.error').show().delay(4000).fadeOut();
    $(email).addClass('error-outline');
  } else {
    $('.error').hide();
    $(email).removeClass('error-outline');
  }
})
}

validateEmail();