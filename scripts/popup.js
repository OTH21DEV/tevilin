
export function displayPopup() {

  const openPopupButton = document.querySelector('.btn.btn-create');

  const cancelPopupButton = document.getElementById('cancelPopup');
  const submitPopupButton = document.getElementById('submitPopup');
  const popup = document.getElementById('popup');
  const overlay = document.getElementById('popupOverlay');
  const popupForm = document.getElementById('popupForm');

  // second popup
  const modifyPopup = document.getElementById('modifyPopup');
  const cancelModifyPopupButton = document.getElementById('cancelModifyPopup');
  const submitModifyPopupButton = document.getElementById('submitModifyPopup');
  const saveModifyPopupButton = document.getElementById('saveModifyPopup');

  const modifyInput5= document.getElementById('input5');    
  const modifyInput6= document.getElementById('input6');
  const modifyInput7= document.getElementById('input7');
  const modifyInput8= document.getElementById('input8');


  openPopupButton.addEventListener('click', () => {
    popup.style.display = 'block';
    overlay.style.display = 'block';
  });

  cancelPopupButton.addEventListener('click', () => {
    popup.style.display = 'none';
    modifyPopup.style.display = 'none';
    if (modifyPopup.style.display === 'none' && modifyPopup.style.display === 'none') {
      overlay.style.display = 'none';
    }
  });

  submitPopupButton.addEventListener('click', () => {
    const formData = new FormData(popupForm);
    const inputValue5 = formData.get('input1');
    const inputValue6 = formData.get('input2');
    const inputValue7 = formData.get('input3');
    const inputValue8 = formData.get('input4');
    modifyInput5.value=inputValue5
    modifyInput6.value=inputValue6
    modifyInput7.value=inputValue7
    modifyInput8.value=inputValue8


    modifyPopup.style.display = 'block';
    popup.style.display = 'block';
    overlay.style.display = 'block';
  });

  cancelModifyPopupButton.addEventListener('click', () => {
    modifyPopup.style.display = 'none';
    if (popup.style.display === 'none') {
      overlay.style.display = 'none';
    }
  });

  submitModifyPopupButton.addEventListener('click', () => {

  
    modifyPopup.style.display = 'none';
    if (popup.style.display === 'none') {
      overlay.style.display = 'none';
    }
  });

  saveModifyPopupButton.addEventListener('click', (event) => {
  event.preventDefault()
    // modifyPopup.style.display = 'none';
    // if (popup.style.display === 'none') {
    //   overlay.style.display = 'none';
    // }
  });

  overlay.addEventListener('click', () => {
    popup.style.display = 'none';
    modifyPopup.style.display = 'none';
    overlay.style.display = 'none';
  });
  
}