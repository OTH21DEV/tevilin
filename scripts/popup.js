/**
 * Displays popups
 */
export function displayPopup() {
  const openPopupButton = document.querySelector(".btn.btn-create");
  const cancelPopupButton = document.getElementById("cancelPopup");
  const submitPopupButton = document.getElementById("submitPopup");
  const popup = document.getElementById("popup");
  const overlay = document.getElementById("popupOverlay");
  const popupForm = document.getElementById("popupForm");

  // second popup
  const modifyPopup = document.getElementById("modifyPopup");
  const cancelModifyPopupButton = document.getElementById("cancelModifyPopup");
  const submitModifyPopupButton = document.getElementById("submitModifyPopup");
  const saveModifyPopupButton = document.getElementById("saveModifyPopup");

  const modifyInput5 = document.getElementById("input5");
  const modifyInput6 = document.getElementById("input6");
  const modifyInput7 = document.getElementById("input7");
  const modifyInput8 = document.getElementById("input8");
  const modifyPopupTitle = document.getElementById("modifyPopup-title");

  openPopupButton.addEventListener("click", () => {
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  cancelPopupButton.addEventListener("click", () => {
    popup.style.display = "none";
    modifyPopup.style.display = "none";
    if (modifyPopup.style.display === "none" && modifyPopup.style.display === "none") {
      overlay.style.display = "none";
    }
  });

  submitPopupButton.addEventListener("click", () => {
    const formData = new FormData(popupForm);
    const inputValue5 = formData.get("input1");
    const inputValue6 = formData.get("input2");
    const inputValue7 = formData.get("input3");
    const inputValue8 = formData.get("input4");

    modifyInput5.value = inputValue5;
    modifyInput6.value = inputValue6;
    modifyInput7.value = inputValue7;
    modifyInput8.value = inputValue8;

    if (inputValue5) {
      modifyPopupTitle.innerHTML = `Изменить локацию ${inputValue5}`;
    } else {
      modifyPopupTitle.innerHTML = `Изменить локацию `;
    }

    modifyPopup.style.display = "block";
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  cancelModifyPopupButton.addEventListener("click", () => {
    modifyPopup.style.display = "none";
    if (popup.style.display === "none") {
      overlay.style.display = "none";
    }
  });

  submitModifyPopupButton.addEventListener("click", () => {
    modifyPopup.style.display = "none";
    if (popup.style.display === "none") {
      overlay.style.display = "none";
    }
  });

  saveModifyPopupButton.addEventListener("click", (event) => {
    event.preventDefault();
  });

  overlay.addEventListener("click", () => {
    popup.style.display = "none";
    modifyPopup.style.display = "none";
    overlay.style.display = "none";
  });

  displayNestedElements();
}
/**
 * Dispalys the nested elements in input field
 */
function displayNestedElements() {
  const input4 = document.getElementById("input4");
  const dropdownContent = document.getElementById("dropdownContent");

  input4.addEventListener("click", () => {
    if (dropdownContent.style.display === "none" || dropdownContent.style.display === "") {
      dropdownContent.style.display = "block";
    } else {
      dropdownContent.style.display = "none";
    }
  });

  document.addEventListener("click", (event) => {
    if (!event.target.matches("#input4") && !event.target.closest(".dropdown-content")) {
      dropdownContent.style.display = "none";
    }
  });

  dropdownContent.addEventListener("click", (event) => {
    if (event.target.classList.contains("dropdown-item") || event.target.classList.contains("sub-dropdown-item")) {
      input4.value = event.target.textContent.trim();
      dropdownContent.style.display = "none";
    }
  });
}
