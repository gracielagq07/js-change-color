function changeColor(){
    const container = document.getElementById('container') || document.querySelector('.container');
    if (container) {
        const currentColor = container.style.backgroundColor;
       
        if (currentColor === "darkblue") {
            container.style.backgroundColor = "red";
        } else {
            container.style.backgroundColor = "darkblue";
        }
    }
};

function changeText(){
    const text = document.getElementById('text') || document.querySelector('.color');
    if (text) {
        if (text.textContent === "darkblue") {
            text.textContent = "red";
        } else {
            text.textContent = "darkblue";
        }
    }
}; 

function changeStyles(){
    changeColor();
    changeText();
};

export {changeColor, changeText, changeStyles}