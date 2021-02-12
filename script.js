const changeColor = document.getElementById('change_button');
const automatic_change = document.getElementById('automatic_change');

function getRandomRGB(){
    return Math.floor(Math.random() * 256);
}

function changeBG(){
    const color = `rgb(${getRandomRGB()}, ${getRandomRGB()}, ${getRandomRGB()})`
    document.getElementById('color').innerHTML = color;
    return document.body.style.backgroundColor = color;
}

changeColor.addEventListener('click', changeBG);
automatic_change.addEventListener('click', () => {
    changeBG();
    setInterval(changeBG, 5000);
    automatic_change.disabled = true;
});
changeBG();