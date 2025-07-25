import mainImg from "./restaurant.jpg";

export default function createWebpage() {
    const contentContainer = document.querySelector("#content");


    const header = document.createElement("header");
    header.classList.add("home");
    header.classList.add("top-type")
    header.textContent = "Jbaz's Fine Dining"
    contentContainer.appendChild(header);

    const titleImg = document.createElement("img");
    titleImg.classList.add("home");
    titleImg.src = mainImg;
    titleImg.alt = "A photo of our fine restaurant";
    titleImg.style.height = "20rem";
    contentContainer.appendChild(titleImg);

    const titleText= document.createElement("p");
    titleText.classList.add("home");
    titleText.textContent = "Here is a photo of our great restaurant. We take pride in serving home-cooked meals with the freshest ingredients sourced from local farms. Come dine with us, you won't regret it!";
    titleText.style.fontSize = "1.5rem";
    titleText.style.width = "45ch";
    titleText.style.marginLeft = ".5rem"
    contentContainer.appendChild(titleText);

}
