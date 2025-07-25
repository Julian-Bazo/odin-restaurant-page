import mainImg from "./restaurant.jpg";

export default function createWebpage() {
    const contentContainer = document.querySelector("#content");


    const header = document.createElement("header");
    header.classList.add("top-type")
    header.textContent = "Jbaz's Italian Cuisine"
    contentContainer.appendChild(header);

    const titleImg = document.createElement("img");
    titleImg.src = mainImg;
    titleImg.alt = "A photo of our fine restaurant";
    contentContainer.appendChild(titleImg);

    const titleText= document.createElement("p");
    titleText.textContent = "Here is a photo of our great restaurant. We take pride in serving home-cooked meals with the freshest ingredients sourced from local farms. Come dine with us, you won't regret it!";
    titleText.classList.add("descriptive-text")
    contentContainer.appendChild(titleText);

}
