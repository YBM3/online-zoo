const burgerOpen = document.querySelector('#burgericon');
const popup = document.querySelector('#burgerpopup');
const menu = document.querySelector('#menu').cloneNode(1);
const design = document.querySelector('#design').cloneNode(1);
const logo = document.querySelector('#logo-main').cloneNode(1);


burgerOpen.addEventListener('click', hambHandler);


function hambHandler(event){
    event.preventDefault();
    popup.classList.toggle('open');
    burgerOpen.classList.toggle('lineactive');
    renderPopup();
}

function renderPopup(){
    popup.appendChild(logo);
    popup.appendChild(menu);
    popup.appendChild(design); 
}
