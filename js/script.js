function getRandomUser() {
    //Consumindo API randomuser.me
    fetch('https://randomuser.me/api/')
        .then(user => user.json())
        .then(randomUser => {
            //Dados que vão ser renderizado ao carregar a página
            const userName = document.querySelectorAll('.name');
            const telphone = document.querySelector('.tel p');
            const email = document.querySelector('.email p');

            //Renderizando dados
            userName.forEach(name => {
                const randomUserName = `${randomUser.results[0].name.first} \r ${randomUser.results[0].name.last}`;
                name.innerHTML = randomUserName;
            });

            telphone.innerHTML = randomUser.results[0].cell;
            email.innerHTML = randomUser.results[0].email;

            //Validando e renderizando gênero do user (avatar);
            const genderUser = randomUser.results[0].gender;
            const userAvatar = document.querySelectorAll('.avatar-user');

            userAvatar.forEach(gender => {
                gender.setAttribute('src', `images/assets/${genderUser}.svg`);
            });
        });
}

//Evento habilitar/desabilitar menu
function eventNavBar() {
    const sidebar = document.querySelector('.sidebar');
    const body = document.querySelector('body');

    window.scrollTo(0, 0);
    body.classList.toggle('hidden');
    sidebar.classList.toggle('none');
}

//Evento habilitar/desabilitar modal
function eventModal() {
    const modal = document.querySelector('.modal');
    const body = document.querySelector('body');

    window.scrollTo(0, 0);
    body.classList.toggle('hidden');
    modal.classList.toggle('none');
}

//Evento do slider
function changeSlider() {
    const slideBox = document.querySelectorAll('.slide-box');
    const imageSlide = document.querySelectorAll('.image-slider');

    slideBox.forEach(slide => {
        slide.classList.toggle('none');
    });

    imageSlide.forEach(imageSlide => {
        imageSlide.classList.toggle('none');
    });
}

getRandomUser();