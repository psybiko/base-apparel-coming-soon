const email = document.getElementById('email')
const form = document.getElementById('form')


const validateEmail = () => {
  form.addEventListener('submit', (e) => {
  e.preventDefault()
  if (email === '' || email === null) {
    $('.error').show().delay(4000).fadeOut();
  } else {
    $('.error').hide();
  }
})
}

validateEmail();