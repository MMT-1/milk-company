// navbarShow
let body = document.querySelector('body');
let nav = document.querySelector('nav');
let navTransform = document.querySelector('.navTransform');
window.addEventListener('scroll', function(){
    if(window.pageYOffset > 0){
        nav.classList.add('bg-dark', 'shadow','nav','navTransform');
    }
    else{
        nav.classList.remove('bg-dark', 'shadow','nav','navTransform');
    }
});


// btnScroll
const btnScrollTop = document.querySelector("#btnScrollTop");
btnScrollTop.onclick = scrollToTop;

window.addEventListener("scroll", function(){
    let scroll = document.querySelector("#btnScrollTop");
    scroll.classList.toggle("active", this.window.scrollY > 500)
})
function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}


// login-form
let signIn_form = document.querySelector('.signIn-form')
let signUp_form = document.querySelector('.signUp-form')
let loginForm = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.add('v');
}
document.querySelector('#close-login-form').onclick = () =>{
    loginForm.classList.remove('v');
}
document.querySelector('#close-signUp-form').onclick = () =>{
    loginForm.classList.remove('v');
    
}

// let signup = document.querySelector('.signup');
// document.querySelector('#newAccount').onclick = () =>{
//     loginForm.classList.remove('v');
//     signup.classList.add('v');
// }
const container1 = document.querySelector('.container1')
signUp = signUp = document.querySelector(".signup-link"),
login = document.querySelector(".login-link"),
forms = document.querySelector('.login-form');
signUp.addEventListener("click", ( )=>{
    forms.classList.add("rotate");
});
login.addEventListener("click", ( )=>{
    forms.classList.remove("rotate");
});
// login-form



//dark mode
let dark_mode = document.querySelector('.dark_mode');
let main_site = document.querySelector('.main_site');
dark_mode.onclick = function () {
    document.body.classList.toggle('text_dark_mode');
}
var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });



  //validation form
  let username = document.querySelector("[name='name']");
  let text_form = document.querySelector("[name='text']");
  let email_form = document.getElementById("[name='email']");
  let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  document.forms.onsubmit = function(event){
    let emailValid = false;
    let userValid = false;
    let textValid = false;
    if (username.value !== "" && username.value.length <=10 ) {
        userValid=true;
        return
    }
    if (email_form.value === filter){
        emailValid = true;
    }
    if (text_form.value !== "" && text_form.value.length <=300 ){
        textValid = true;
    }
    if (userValid === false ||  textValid === false || emailValid === false) {
        event.preventDefault();
    }

  }
document.querySelector('.allowSend').onclick = function(event){
    event.preventDefault();
}

