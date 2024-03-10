const modalAuthorization = document.createElement('div');
modalAuthorization.id = 'modal';
modalAuthorization.className = 'modal';

const modalContentAuthorization = document.createElement('div');
modalContentAuthorization.className = 'modal-content';

const modalContentUPAuthorization= document.createElement('div')
modalContentUPAuthorization.className='modal-content_up'

const modalContentMiddleAuthorization = document.createElement('div')
modalContentMiddleAuthorization.className='modal-content_middle'

const modalContentLowAuthorization = document.createElement('div')
modalContentLowAuthorization.className='modal-content_low'


const modalInputTittleAuthorization = document.createElement('div');
modalInputTittleAuthorization.textContent = 'Авторизация';
modalInputTittleAuthorization.className = 'Authorization'

const closeSpan = document.createElement('span');
closeSpan.className = 'close';
closeSpan.innerHTML = '&times;';


const modalUserImage = document.createElement('img');
modalUserImage.src = './image/user.png';
modalUserImage.className= "ImageUser"



const InputLoginAuthorization = document.createElement('input')
InputLoginAuthorization.className='Login'
InputLoginAuthorization.placeholder='Логин'



const modalButtonConfirmWarning = document.createElement('button')
modalButtonConfirmWarning.className= 'modal-button_confirm'
modalButtonConfirmWarning.textContent = 'Вход'



modalContentAuthorization.appendChild(modalContentUPAuthorization)
modalContentAuthorization.appendChild(modalContentMiddleAuthorization)
modalContentAuthorization.appendChild(modalContentLowAuthorization)
modalContentMiddleAuthorization.appendChild(modalInputTittleAuthorization);
modalContentLowAuthorization.appendChild(modalButtonConfirmWarning)
modalInputTittleAuthorization.appendChild(closeSpan);
modalContentMiddleAuthorization.appendChild(modalUserImage)
modalContentMiddleAuthorization.appendChild(InputLoginAuthorization)

modalAuthorization.appendChild(modalContentAuthorization);
document.body.appendChild(modalAuthorization);

const entranceButton = document.createElement('button');
entranceButton.textContent = 'Войти';
entranceButton.id = 'myButton';
document.body.appendChild(entranceButton);

const closeBtn = document.getElementsByClassName('close')[0];


///////////////////////////////////////////////////////////////////////////////////


entranceButton.addEventListener('click', function() {
    modalAuthorization.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
    modalAuthorization.style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target === modalAuthorization) {
        modalAuthorization.style.display = 'none';
    }
});