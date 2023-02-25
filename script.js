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


const form = document.querySelector('.contact__form');
const nom = form.querySelector('[placeholder="Nom"]');
const email = form.querySelector('[placeholder="Email"]');
const telephone = form.querySelector('[placeholder="Télephone"]');
const message = form.querySelector('textarea');

form.addEventListener('submit', (event) => {
  event.preventDefault(); // empêcher la soumission du formulaire
// Charger la bibliothèque cliente Gmail API
gapi.load('client:auth2', function() {
    // Authentifier l'utilisateur avec le flux d'authentification OAuth 2.0
    gapi.auth2.init({
      client_id: '315126351343-lgceug0jgiah9j7v8asocmvm094u7r37.apps.googleusercontent.com',
      scope: 'https://www.googleapis.com/auth/gmail.send'
    }).then(function() {
      // Envoyer un e-mail
      function sendEmail(nom, email, telephone, message) {
        var base64EncodedEmail = btoa("From: " + email + "\n" +
                                      "To: munongomoise49@gmail.com\n" +
                                      "Subject: Nouveau message de " + nom + "\n\n" +
                                      "Nom : " + nom + "\n" +
                                      "Email : " + email + "\n" +
                                      "Téléphone : " + telephone + "\n" +
                                      "Message : " + message);
        var request = gapi.client.gmail.users.messages.send({
          'userId': 'me',
          'resource': {
            'raw': base64EncodedEmail
          }
        });
        request.execute(function(response) {
          console.log(response);
        });
      }
  
      // Récupérer les valeurs des champs de formulaire
      const nomValue = nom.value;
      const emailValue = email.value;
      const telephoneValue = telephone.value;
      const messageValue = message.value;
  
      // Envoyer l'e-mail en utilisant les valeurs des champs de formulaire
      sendEmail(nomValue, emailValue, telephoneValue, messageValue);
    });
  });

});


  
// ID ccclient
// 315126351343-lgceug0jgiah9j7v8asocmvm094u7r37.apps.googleusercontent.com
// code secret client 
// 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