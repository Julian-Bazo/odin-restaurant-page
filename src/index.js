import "./styles.css";
console.log("hello World");
import createHome from "./home";
import createMenu from "./menu";
import createAbout from "./about";

const contentDiv = document.querySelector("#content");
const homeButton = document.querySelector("#home");
const menuButton = document.querySelector("#menu");
const aboutButton = document.querySelector("#about");

function clearWebpage() {
    while (contentDiv.firstChild){
        contentDiv.removeChild(contentDiv.lastChild);
    }
}

menuButton.addEventListener("click", () => {
    clearWebpage();
    createMenu();
});

homeButton.addEventListener("click", () => {
    clearWebpage();
    createHome();
})

aboutButton.addEventListener("click", () => {
    clearWebpage();
    createAbout();
})

createHome();