export default function createMenu() {
    const contentContainer = document.querySelector("#content");

    const menuHeader = document.createElement("h1");
    menuHeader.classList.add("top-type");
    menuHeader.textContent = "Specialty Menu";
    contentContainer.appendChild(menuHeader);

    const menuDiv = document.createElement("div");
    menuDiv.classList.add("menu-div");
    contentContainer.appendChild(menuDiv);

    class Item{
        constructor(name, price, description) {
            this.name = name;
            this.price = price;
            this.description = description;
        }

        addItem() {
            const menuItem = document.createElement("p");
            menuItem.textContent = `${this.name} -- $${this.price}`;
            menuItem.classList.add("bold");
            
            const menuDesc = document.createElement("p");
            menuDesc.textContent = `${this.description}`;
            menuDesc.classList.add("description");

            menuDiv.appendChild(menuItem);
            menuDiv.appendChild(menuDesc);
        }
    }

    const item1 = new Item("Smoked Salmon", "16.99","Wild caught salmon straight from sea to table");
    item1.addItem();

    const item2 = new Item("Creamy Chicken Mushroom Soup", "17.99", "Our famous recipe, made fresh daily")
    item2.addItem();

    const item3 = new Item("Picadillo", "15.99", "Salted ground beef and rice seasoned with chili powder, cumin, paprika, and pepper");
    item3.addItem();

    const item4 = new Item("House Salad", "12.99", "Chopped tomatoes, carrots, spinach and arugula mix. Topped with balsamic vinaigrette a hard-boiled egg");
    item4.addItem();

    const item5 = new Item("Ice Cream Sundae", "6.99", "Three scoops of ice cream. Vanilla, Chocolate, and Strawberry.");
    item5.addItem();
}