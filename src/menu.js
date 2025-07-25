export default function createMenu() {
    const contentContainer = document.querySelector("#content");

    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("top-type");
    menuHeader.textContent = "Specialty Menu";
    contentContainer.appendChild(menuHeader);
}