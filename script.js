'use strict';

const body = document.querySelector('body');
const cssText = 'height: 100px; width: 100px; background - color: yellow; font - size: 14px;';

const DomElement = function (selector) {
    this.selector = selector;
    this.height = '100px';
    this.width = '100px';
    this.bg = 'orange';
    this.fontSize = '20px';
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
        newDiv.textContent = 'Я див';
        newDiv.style.cssText = `height: ${this.height}; width: ${this.width}; 
        background: ${this.bg}; font-size: ${this.fontSize};`;
        document.body.append(newDiv);

    } else if (this.selector[0] == '#') {
        const addId = this.selector.slice(1);
        const newP = document.createElement('p');
        newP.className = addId;
        newP.textContent = 'А я параграф';
        newP.style.cssText = `height: ${this.height}; width: ${this.width}; 
        background: ${this.bg}; font-size: ${this.fontSize};`;
        document.body.append(newP);
    }
};

const blockClass = new DomElement('.randomClass');
const blockId = new DomElement('#randomId');

blockClass.createElement();
blockId.createElement();
