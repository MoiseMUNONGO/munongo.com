const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active')
        }
    })
}
window.addEventListener('scroll', scrollActive)

const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
});

sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

function sendMail() {
  var params = {
      nom: form.nom.value,
      email: form.email.value,
      telephone: form.telephone.value,
      message: form.message.value,
      
  };
  const serviceID = "service_23ktx4l";
  const templateID = "template_199f2p9";
  emailjs.send(serviceID, templateID, params)
      .then(res => {
          nom: form.nom.value = "";
          message: form.message.value = ""; 
          email: form.email.value = "";
          telephone: form.telephone.value = "";
          console.log(res);
          alert('Votre message a bien été envoyer');
      })
      .catch(err => console.log(err));
}

const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
  event.preventDefault(); 
        // Récupérer les valeurs des champs de formulaire
        const nom = document.querySelector('#nom');
        const email = document.querySelector('#email');
        const telephone = document.querySelector('#telephone');
        const message = document.querySelector('#message');
        const nomValue = nom.value;
        const emailValue = email.value;
        const telephoneValue = telephone.value;
        const messageValue = message.value;
        sendMail();


});

  
// ID ccclient
// 315126351343-lgceug0jgiah9j7v8asocmvm094u7r37.apps.googleusercontent.com
// code secret client 
// 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




