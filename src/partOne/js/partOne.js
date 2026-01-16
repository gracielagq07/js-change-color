function changeColor(){
  
    const container = document.getElementById('container') || document.querySelector('.container');
    if (container) {
        container.style.backgroundColor = "darkblue";
    }
};

function changeText(){
    const text = document.getElementById('text') || document.querySelector('.color');
    if (text) {
        text.textContent = "darkblue";
    }
}; 

function changeStyles(){
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}