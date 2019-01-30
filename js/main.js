const slide = ()=> {

    const bars = document.querySelector('.bars');
    const header = document.querySelector('header');

    bars.addEventListener('click', ()=> {
        header.classList.toggle('show');
    });
}

slide();


//*** */ about us text****//

const about = () => {
    const paraOne  = document.getElementById("para-one");
    const paraTwo  = document.getElementById("para-two");
    const paraThree  = document.getElementById("para-three");
    const mission = document.querySelector(".mission");
    const value = document.querySelector(".value");
    const vision = document.querySelector(".vision");
    mission.addEventListener('click', () => {
        mission.classList.add("active");
        value.classList.remove("active");
        vision.classList.remove("active");
        paraOne.classList.remove('zero');
        paraTwo.classList.add('zero');
        paraThree.classList.add('zero');
    });
    value.addEventListener('click', () => {
        value.classList.add("active");
        mission.classList.remove("active");
        vision.classList.remove("active");
        paraOne.classList.add('zero');
        paraTwo.classList.remove('zero');
        paraThree.classList.add('zero');
    });
     vision.addEventListener('click', () => {
        vision.classList.add("active");
        mission.classList.remove("active");
        value.classList.remove("active");
        paraOne.classList.add('zero');
        paraTwo.classList.add('zero');
        paraThree.classList.remove('zero');
    });
}

about();