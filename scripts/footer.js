/**
 * Displays footer element
 * regarding choosen section (loaclisation or settings)
 */
export function displayFooter() {
  const sidebarLinks = document.querySelectorAll(".sidebar__link");
  const footer = document.querySelector(".footer");
  const iconSettings = document.getElementById("settings__icon");

  /**
   * Function to set footer content based on target type
   * @param {String} target data-content of the sidebar's link
   */
  function setFooterContent(target) {
    // Removes any existing footer sections if they exist
    const existingSections = footer.querySelectorAll(".footer__section");
    existingSections.forEach((section) => {
      if (footer.contains(section)) {
        footer.removeChild(section);
      }
    });

    if (target === "localisation") {
      const container = document.createElement("div");
      container.classList.add("footer__section");
      document.querySelector(".main-content").style.height = ""; // Remove height style
      document.querySelector(".main-content").style.minHeight = "100vh";
      container.innerHTML = `
          <p class="footer__content">
            Последний приём 20.09.2021 18:36:21
          </p>
          <p class="footer__content">
            Последняя передача 20.09.2021 18:38:21
          </p>
          <div class="footer__section footer__documentation">
            <img src="./assets/doc_icon.png" alt="Документация иконка" class="footer__icon">
            <p class="footer__text">Документация</p>
          </div>`;
      footer.appendChild(container);
      footer.style.display = "flex";
      footer.style.paddingLeft = "";
      footer.style.justifyContent = "center";
      iconSettings.style.filter = "";
    } else if (target === "settings") {
      const otherContainer = document.createElement("div");
      iconSettings.style.filter = "brightness(0) invert(1)";
      otherContainer.classList.add("footer__section");
      footer.style.justifyContent = "start";
      footer.style.paddingLeft = "340px";
      document.querySelector(".main-content").style.height = "";
      document.querySelector(".main-content").style.minHeight = "";
      otherContainer.innerHTML = `
            <button class="btn btn-save-footer">
              <img src="./assets/save_icon.png" alt="" />
              Добавить поле
            </button>
            <button class="btn btn-cancel-footer">
              Отменить
            </button>
            <div class="footer__section footer__documentation">
              <img src="./assets/doc_icon.png" alt="Документация иконка" class="footer__icon">
              <p class="footer__text">Документация</p>
            </div>`;
      footer.appendChild(otherContainer);
      footer.style.display = "flex";
    } else {
      document.querySelector(".main-content").style.height = "100vh";
      footer.style.display = "none";
      iconSettings.style.filter = "";
    }
  }

  // Initial footer content
  setFooterContent("localisation");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const target = event.currentTarget.dataset.content;
      setFooterContent(target);
      event.preventDefault();
    });
  });
}
