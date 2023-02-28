const inputSize = document.querySelector('#font-size-control');
const outText = document.querySelector('#text');


outText.style.fontSize = '56px' 

function swap (event) {
    const valueSize = event.currentTarget.value;
    console.log(valueSize);
    outText.style.fontSize = `${valueSize}px`;
};

inputSize.addEventListener('input', swap);