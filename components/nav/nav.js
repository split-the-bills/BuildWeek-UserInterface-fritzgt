class Dropdown {
    constructor(element) {
        this.element = element;
        this.button = this.element.querySelector(".dropdown-button");
        this.content = this.element.querySelector(".dropdown-content");
        this.button.addEventListener("click", () => {
            this.toggleContent();
        });
    }

    toggleContent() {
        // show dropdown
        this.content.classList.toggle("dropdown-hidden");
        // Transform burger menu to an X
        this.button.classList.toggle("change");
    }
}

let dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach(dropdown => new Dropdown(dropdown));