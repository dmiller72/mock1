const slide = ()=> {

    const bars = document.querySelector('.bars');
    const header = document.querySelector('header');

    bars.addEventListener('click', ()=> {
        header.classList.toggle('show');
    });
}

slide();