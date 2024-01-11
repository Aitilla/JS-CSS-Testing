




function createLi(){
    let textBox = document.createElement('li');
    textBox.classList.add('draggable');
    list.appendChild(textBox);

    let inputBox = document.createElement('input');
    inputBox.setAttribute('type', 'text');
    inputBox.setAttribute('placeholder', 'Enter text');
    inputBox.classList.add('textbox');
    textBox.appendChild(inputBox);

    inputBox.addEventListener('input', function() {
        inputBox.setAttribute('placeholder', inputBox.value === '' ? 'Enter text' : '');
    });

    let removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.classList.add('removeButton');

    removeButton.addEventListener('click', function() {
        textBox.remove();
        removeButton.remove();
    });

    textBox.appendChild(removeButton);
};

function createArrow(){
    let listArrow = document.createElement('li');
    listArrow.classList.add('draggable');
    list.appendChild(listArrow);

    let arrow = document.createElement('span');
    arrow.textContent = '\u2192';
    arrow.classList.add('arrow');

    let removeButton = document.createElement('button');
    removeButton.textContent = 'x';
    removeButton.classList.add('removeButton');

    removeButton.addEventListener('click', function(){
        arrow.remove();
        removeButton.remove();
    });

    listArrow.appendChild(removeButton);
    listArrow.appendChild(arrow);
};

const list = document.getElementById('list');

const liButton = document.getElementById('liCreate');
liButton.addEventListener('click', createLi);

const arrowButton = document.getElementById('createArrow');
arrowButton.addEventListener('click', createArrow)








