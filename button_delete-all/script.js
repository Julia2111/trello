const modal2 = document.createElement('div');
modal2.id = 'modal';
modal2.className = 'modal';

const modalContentWarning = document.createElement('div');
modalContentWarning.className = 'modal-content';

const modalContentUPWarning= document.createElement('div')
modalContentUPWarning.className='modal-content_up'


const modalContentLowWarning = document.createElement('div')
modalContentLowWarning.className='modal-content_low'


const modalInputTittleWarning = document.createElement('div');
modalInputTittleWarning.textContent = 'Warning!';
modalInputTittleWarning.className = 'Warning'


const modalButtonConfirmWarning = document.createElement('button')
modalButtonConfirmWarning.className= 'modal-button_confirm'
modalButtonConfirmWarning.textContent = 'Confirm'

const modalButtonCancelWarning = document.createElement('button')
modalButtonCancelWarning.className= 'modal-button_cancel'
modalButtonCancelWarning.textContent = 'Cancel'


modalContentWarning.appendChild(modalContentUPWarning)
modalContentWarning.appendChild(modalContentLowWarning)
modalContentUPWarning.appendChild(modalInputTittleWarning);
modalContentLowWarning.appendChild(modalButtonCancelWarning)
modalContentLowWarning.appendChild(modalButtonConfirmWarning)

modal2.appendChild(modalContentWarning);
document.body.appendChild(modal2);

const DeleteALLButton = document.createElement('button');
DeleteALLButton.textContent = 'Delete all';
DeleteALLButton.id = 'myButton';
document.body.appendChild(DeleteALLButton);

const closeBtn = document.getElementsByClassName('close')[0];


///////////////////////////////////////////////////////////////////////////////////


DeleteALLButton.addEventListener('click', function() {
    modal2.style.display = 'block';
});

modalButtonCancelWarning.addEventListener('click', function() {
    modal2.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modal2) {
        modal2.style.display = 'none';
    }
});
