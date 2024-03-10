const modal = document.createElement('div');
modal.id = 'modal';
modal.className = 'modal';

const modalContent = document.createElement('div');
modalContent.className = 'modal-content';

const modalContentUP= document.createElement('div')
modalContentUP.className='modal-content_up'

const modalContentMiddle = document.createElement('div')
modalContentMiddle.className='modal-content_middle'

const modalContentLow = document.createElement('div')
modalContentLow.className='modal-content_low'

const closeSpan = document.createElement('span');
closeSpan.className = 'close';
closeSpan.innerHTML = '&times;';

const modalInputTittle = document.createElement('input');
modalInputTittle.placeholder = 'Tittle';
modalInputTittle.className = 'ModalTittle'

const modalInputDescription = document.createElement('textarea')
modalInputDescription.className = 'Description'
modalInputDescription.placeholder='Your Description'

const modalButtonConfirm = document.createElement('button')
modalButtonConfirm.className= 'modal-button_confirm'
modalButtonConfirm.textContent = 'Confirm'

const modalButtonCancel = document.createElement('button')
modalButtonCancel.className= 'modal-button_cancel'
modalButtonCancel.textContent = 'Cancel'

const modalButtonSelectUser = document.createElement('button')
modalButtonSelectUser.className = 'Selection'
modalButtonSelectUser.textContent = 'Select user'



modalContent.appendChild(modalContentUP)
modalContent.appendChild(modalContentMiddle)
modalContent.appendChild(modalContentLow)
modalContentUP.appendChild(closeSpan);
modalContentUP.appendChild(modalInputTittle);
modalContentMiddle.appendChild(modalInputDescription)
modalContentLow.appendChild(modalButtonSelectUser)
modalContentLow.appendChild(modalButtonConfirm)
modalContentLow.appendChild(modalButtonCancel)

modal.appendChild(modalContent);
document.body.appendChild(modal);

const editButton = document.createElement('button');
editButton.textContent = 'Edit';
editButton.id = 'myButton';
document.body.appendChild(editButton);

const closeBtn = document.getElementsByClassName('close')[0];


///////////////////////////////////////////////////////////////////////////////////


editButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modal.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});