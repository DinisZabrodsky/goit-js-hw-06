function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const control = document.querySelector('#controls');
const boxForEl = document.querySelector('#boxes');
const createBtn = control.querySelector('[data-create]');
const destoroyBtn = control.querySelector('[data-destroy]');

createBtn.addEventListener('click', createlist);
destoroyBtn.addEventListener('click', clearDesk);



function createlist () {
  const value = Number(control.children[0].value);
  let baseEL = [];

  if (value !== 0) {
    for (let i = 0; i <= value; i += 1) {
      const color = getRandomHexColor();
      const element = constructor(i, color);
      baseEL.push(element);
    };

    boxForEl.append(...baseEL);
  };
  
};



function constructor(value, color) {
  let valueEl = value * 10 + 30;
  const boxEl = document.createElement('div');
  boxEl.style.width = `${valueEl}px`;
  boxEl.style.height = `${valueEl}px`;
  boxEl.style.backgroundColor = color;

  return boxEl;
};

function clearDesk() {
  control.children[0].value = 0;
  boxForEl.innerHTML = "";

};