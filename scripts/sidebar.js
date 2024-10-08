/**
 * Dispalys the localisation section initially
 */
export function initSidebarMenu() {
  const sidebarLinks = document.querySelectorAll(".sidebar__link");
  const contentSections = document.querySelectorAll(".main-content > section");

  sidebarLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      updateDisplayedContent(event.currentTarget);
    });
  });

  // Initialization by showing the localisation section as active
  contentSections.forEach((section) => {
    if (section.id === "localisation") {
      section.classList.add("active");
      section.style.display = "flex";
      section.style.flexDirection = "column";
      section.style.flexGrow = "1";
    } else {
      section.classList.remove("active");
      section.style.display = "none";
    }
  });
}
/**
 * Dispalys the sections (localisation or settings) while
 * navigate between the sidebar's link
 * @param {*} targetLink the data-content of sidebar's link
 */
function updateDisplayedContent(targetLink) {
  const contentId = targetLink.dataset.content;
  const contentSections = document.querySelectorAll(".main-content > section");
  const sidebarItems = document.querySelectorAll(".sidebar__item");

  // Hide all content sections and show the selected one
  contentSections.forEach((section) => {
    if (section.id === contentId) {
      section.classList.add("active");
      section.style.display = "flex";
      section.style.flexDirection = "column";
      section.style.flexGrow = "1";
    } else {
      section.classList.remove("active");
      section.style.display = "none";
    }
  });

  // Removes active class from all sidebar items and add to the current target link
  sidebarItems.forEach((item) => {
    const link = item.querySelector(".sidebar__link");
    if (link === targetLink) {
      item.classList.add("active");
    } else {
      item.classList.remove("active");
    }
  });
}
