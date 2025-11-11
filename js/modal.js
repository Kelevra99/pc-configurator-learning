const modalBtn = document.querySelector('.modal__button');
//console.log(modalBtn)
const modal = document.querySelector('.modal');
//console.log(modal)

const modalInner = modal.querySelector('.modal__inner');
modalInner.style.position = 'relative';

//создаем кнопку закрытия окна обратной связи
const closeButton = document.createElement('button');
closeButton.type = 'button';
closeButton.textContent = '❌';

//задаем стили кнопке
Object.assign(closeButton.style, {
    position: 'absolute',
    top: '10px',
    right: '10px',
    width: '32px',
    height: '32px',
    border: 'none',
    background: 'transparent',
    color: '#FFFFFF', 
    fontSize: '24px',
    cursor: 'pointer'
  });

//вставляем кнопку закрытия в окно обратной связи
modalInner.appendChild(closeButton)


//вызов окна обратной связи
modalBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    //modal.classList.add('active');
})
//закрытие окна обратной связи
modal.addEventListener('click', (event) => {
    const modalContent=event.target.closest('.modal__inner');
    console.log(modalContent)
    if (!modalContent) {
        modal.style.display = '';
    }
})

//вызов окна обратной связи на кнопке заказать курс
const courseBtn = document.querySelector('.course__button');
//console.log(courseBtn)
courseBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    //modal.classList.add('active');
})


//закрытие окна обратной связи на кнопке закрытия
closeButton.addEventListener('click', () => {
    modal.style.display = '';
})