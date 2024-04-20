
const section = document.querySelector('.js-section')
const btnNode = document.querySelector('.js-btn');


const changeBackground = () => {
    section.style.background = 'linear-gradient(to right, red, orange)' ;
}
const findEntertainment = () => {
    fetch('https://www.boredapi.com/api/activity/')
    .then(data => data.json())
    .then((res) => { 
    const activity = res.activity;
    document.querySelector('.js-text').innerHTML = `${activity}`
    changeBackground();
});
}

btnNode.addEventListener('click', findEntertainment);
