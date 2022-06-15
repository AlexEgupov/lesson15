'use strict';

const body = document.querySelector('body');

const DomElement = function (selector) {
    this.selector = selector;
    this.height = '100px';
    this.width = '100px';
    this.bg = 'blue';
    this.fontSize = 0;
    this.position = 'absolute';
};

// DomElement.prototype.createElement = function () {
//     if (this.selector[0] == '.') {
//         const addClass = this.selector.slice(1);

//         body.insertAdjacentHTML('beforeend',
//             `<div class='${addClass}' style='height: ${this.height}; width: ${this.width};
//         background: ${this.bg}; font-size: ${this.fontSize}'>Я див</div>`);

//     } else if (this.selector[0] == '#') {
//         const addId = this.selector.slice(1);
//         body.insertAdjacentHTML('beforeend',
//             `<p id='${addId}' style='height: ${this.height}; width: ${this.width};
//         background: ${this.bg}; font-size: ${this.fontSize}'>А я параграф</p>`);
//     }
// };

DomElement.prototype.createElement = function () {
    if (this.selector[0] == '.') {
        const addClass = this.selector.slice(1);

        const newDiv = document.createElement('div');
        newDiv.className = addClass;
        newDiv.textContent = 'Я квадрат';
        newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; 
        background: ${this.bg}; font-size: ${this.fontSize}; position: ${this.position}`;
        document.body.append(newDiv);

    } else if (this.selector[0] == '#') {
        const addId = this.selector.slice(1);
        const newP = document.createElement('p');
        newP.className = addId;
        newP.textContent = 'А я параграф';
        newP.style.cssText = `height: ${this.height}; width: ${this.width}; 
        background: ${this.bg}; font-size: ${this.fontSize}; position: ${this.position}`;
        document.body.append(newP);
    }
};

const blockClass = new DomElement('.randomClass');

blockClass.createElement();

const square = document.querySelector('.randomClass');

document.addEventListener('keydown', (event) => {
    switch (event.key) {
        case "ArrowLeft":
            square.style.transform += 'translate(-10px, 0)';
            break;
        case "ArrowRight":
            square.style.transform += 'translate(10px, 0)';
            break;
        case "ArrowUp":
            square.style.transform += 'translate(0, -10px)';
            break;
        case "ArrowDown":
            square.style.transform += 'translate(0, 10px)';
            break;
    }
});
