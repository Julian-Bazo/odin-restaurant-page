import "./styles.css";
console.log("hello World");
import createHome from "./home";
import createMenu from "./menu";

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

    // menuButton.disabled = "true";

    // if (homeButton.disabled === "true") {
    //     homeButton.disabled = "false";
    // }
    // if (aboutButton.disabled === "true") {
    //     aboutButton.disabled = "false";
    // }
});

homeButton.addEventListener("click", () => {
    clearWebpage();
    createHome();

    // homeButton.disabled = "true";

    

})

createHome();