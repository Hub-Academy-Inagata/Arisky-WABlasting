const navbar = document.getElementsByTagName('header')[0];
window.addEventListener('scroll', function(){
    console.log(window.scrollY);
    if (this.window.scrollY > 1) {
    navbar.classList.replace('bg-transparent', 'header-color');
    } else if (this.window.scrollY <= 0) {
    navbar.classList.replace('header-color', 'bg-transparent')
    }
});

