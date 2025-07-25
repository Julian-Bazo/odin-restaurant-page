import mainImg from "./aboutus.jpg"

export default function createAbout() {
    const contentContainer = document.querySelector("#content");
    
    const header = document.createElement("h1");
    header.classList.add("top-type");
    header.textContent = "About Us";
    contentContainer.appendChild(header);

    const img = document.createElement("img");
    img.src = mainImg;
    img.alt = "A photo of the old country."
    contentContainer.appendChild(img);

    const aboutUs = document.createElement("p");
    aboutUs.classList.add("descriptive-text")
    aboutUs.textContent = "Our story revolves around generations of talented Italian chefs. Cooking is in our blood. We aim to share our passion through our flavors, aiming to inspire others through the experience of fresh taste."
    contentContainer.appendChild(aboutUs);

}