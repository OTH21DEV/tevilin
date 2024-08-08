export function displayFooter() {
    const sidebarLinks = document.querySelectorAll(".sidebar__link");
    const footer = document.querySelector(".footer");
  
    // Function to set footer content based on target type
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
      } else {
        const otherContainer = document.createElement("div");
        otherContainer.classList.add("footer__section");
        otherContainer.innerHTML = `
          <p class="footer__content">
            Альтернативный содержимый футер.
          </p>
          <div class="footer__section footer__documentation">
            <img src="./assets/doc_icon.png" alt="Документация иконка" class="footer__icon">
            <p class="footer__text">Документация</p>
          </div>`;
        footer.appendChild(otherContainer);
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