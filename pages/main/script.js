const burgerOpen = document.querySelector('#burgericon');
const popup = document.querySelector('#burgerpopup');
const menu = document.querySelector('#menu').cloneNode(1);
const design = document.querySelector('#design').cloneNode(1);
const logo = document.querySelector('#logo-main').cloneNode(1);

burgerOpen.addEventListener('click', hambHandler);

function hambHandler(event) {
  event.preventDefault();
  popup.classList.toggle('open');
  burgerOpen.classList.toggle('lineactive');
  renderPopup();
}

function renderPopup() {
  popup.appendChild(logo);
  popup.appendChild(menu);
  popup.appendChild(design);
}

// -------------------animals-----------------------
const btnPrevSlider = document.querySelector('.btn-left');
const btnNextSlider = document.querySelector('.btn-right');
const sliderContent = document.querySelector('.card-box');
const arrayOfItemsSlider = document.querySelectorAll('.animal-card');
let stepSlider = document.querySelectorAll('.box-center')[0].offsetWidth;
let direction;
let leftSliderContent = sliderContent.offsetLeft;

//flag if you click many times on button
let animationInProgress = false;

window.addEventListener('resize', function () {
  location.reload();
});

//create array of numbers that mean orders
const createArrayOfNumbers = inputArray => {
  let result = [];
  for (let i = 0; i < inputArray.length; i++) {
    result.push(i + 1);
  }
  return result;
};

//shuffle array of orders
const shuffleArrayOfOrders = arr => {
  let arrayOfOrders = createArrayOfNumbers(arr);

  for (let i = arrayOfOrders.length - 1; i > 0; i--) {
    let randomIndex = Math.floor(Math.random() * (i + 1));
    let lastElement = arrayOfOrders[i];
    arrayOfOrders[i] = arrayOfOrders[randomIndex];
    arrayOfOrders[randomIndex] = lastElement;
  }
  return arrayOfOrders;
};

//set new oders to all items of clone
const setNewOrdersToItems = arrItems => {
  let newArrayOfOders = shuffleArrayOfOrders(arrItems);

  for (let i = 0; i < arrItems.length; i++) {
    arrItems[i].style.order = newArrayOfOders[i];
  }
};

//create clone element .box-center
const createCloneElem = () => {
  let parent = document.querySelector('.card-box');
  if (direction === -1) {
    let firstElem = document.querySelectorAll('.box-center')[0];
    let clone = firstElem.cloneNode(true);
    let arrItemsInClone = clone.querySelectorAll('.animal-card');
    setNewOrdersToItems(arrItemsInClone);
    parent.appendChild(clone);
  } else {
    let firstElem = document.querySelectorAll('.box-center')[0];
    let clone = firstElem.cloneNode(true);
    let arrItemsInClone = clone.querySelectorAll('.animal-card');
    setNewOrdersToItems(arrItemsInClone);
    parent.prepend(clone);
  }
};

//delete element .box-center
const deleteElem = () => {
  let arrSliderBlocks = document.querySelectorAll('.box-center');
  let elemSliderContent = document.querySelector('.card-box');
  if (direction === -1) {
    elemSliderContent.removeChild(arrSliderBlocks[0]);
  } else {
    elemSliderContent.removeChild(arrSliderBlocks[arrSliderBlocks.length - 1]);
  }
};

//replace .card-box on 1 step
const animateSlides = () => {
  if (direction === -1) {
    sliderContent.style.left = leftSliderContent + -stepSlider + 'px';
  } else {
    sliderContent.style.left = leftSliderContent + 'px';
  }
};

//when we click on nextbutton
btnNextSlider.addEventListener('click', () => {
  if (animationInProgress) {
    return;
  }

  direction = -1;
  createCloneElem();
  setTimeout(function () {
    sliderContent.style.transition = '1s all ease-in-out';
  });
  setTimeout(function () {
    animateSlides();
  });
  animationInProgress = true;
});

//when we click onprevbutton
btnPrevSlider.addEventListener('click', () => {
  if (animationInProgress) {
    return;
  }
  direction = 1;
  sliderContent.style.transition = 'none';
  sliderContent.style.left = leftSliderContent + -stepSlider + 'px';
  createCloneElem();
  setTimeout(function () {
    sliderContent.style.transition = '1s all ease-in-out';
  });
  setTimeout(function () {
    animateSlides();
  });
  animationInProgress = true;
});

//when animation was ended
sliderContent.addEventListener('transitionend', function () {
  if (direction === -1) {
    deleteElem();
    sliderContent.style.transition = 'none';
    sliderContent.style.left = leftSliderContent + 'px';
  } else {
    deleteElem();
  }
  animationInProgress = false;
});
////////////////////////////////////////////////////////////////////////////
const testimonialsContainer = document.querySelector('.testimonials-slide');
const testimonialsInput = document.querySelector('.bar');

testimonialsInput.addEventListener('input', () => {
  if (document.documentElement.clientWidth > 1281) {
    testimonialsContainer.style.transform = `translateX(-${
      testimonialsInput.value * 297
    }px)`;
  } else {
    testimonialsInput.setAttribute('max', '8');
    testimonialsContainer.style.transform = `translateX(-${
      testimonialsInput.value * 323
    }px)`;
  }
});
//////////////////////////////////////////////////////////////////////////
const feedback = document.querySelectorAll('.card-comment1');
const feedbackImage = document.querySelectorAll('.comm-img');
const feedbackImagePopup = document.querySelector('.feedback__image_popup');
const feedbackTitle = document.querySelectorAll('.user-name');
const feedbackTitlePopup = document.querySelector('.feedback__title_popup');
const feedbackDesc = document.querySelectorAll('.comm-title');
const feedbackDescPopup = document.querySelector('.feedback__desc_popup');
const feedbackText = document.querySelectorAll('.copy1');
const feedbackTextPopup = document.querySelector('.feedback__text_popup');
const feedbackText2 = document.querySelectorAll('.copy');
const feedbackTextPopup2 = document.querySelector('.feedback__text_popup2');
const wrapperPopup = document.querySelector('.popup__wrapper');
const feedbackСlosePopup = document.querySelector('.feedback__close_popup');
const body = document.querySelector('.body');

function createFeedback(element) {
  feedbackImagePopup.src = feedbackImage[element].src;
  feedbackTitlePopup.innerHTML = feedbackTitle[element].textContent;
  feedbackDescPopup.innerHTML = feedbackDesc[element].textContent;
  feedbackTextPopup.innerHTML = feedbackText[element].textContent;
  feedbackTextPopup2.innerHTML = feedbackText2[element].textContent;
}

feedback.forEach(element => {
  element.addEventListener('click', () => {
    wrapperPopup.classList.add('popup__hidden');
    body.classList.add('scroll');
    createFeedback(element.id);
  });
});

feedbackСlosePopup.addEventListener('click', () => {
  wrapperPopup.classList.toggle('popup__hidden');
  body.classList.toggle('scroll');
});

wrapperPopup.addEventListener('click', event => {
  if (event.target.classList.contains('popup__hidden')) {
    wrapperPopup.classList.toggle('popup__hidden');
    body.classList.toggle('scroll');
  }
});
