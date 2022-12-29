const navbar = document.getElementsByTagName('header')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if (this.window.scrollY > 1) {
    navbar.classList.replace('bg-transparent', 'header-color');
    } else if (this.window.scrollY <= 0) {
    navbar.classList.replace('header-color', 'bg-transparent')
    }
});

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }

      form.classList.add('was-validated')
    }, false)
  })
})();

