import { template } from "../pages/index.js";

customElements.define(
    "about-page",
    class extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: "open" });
            this.shadowRoot.appendChild(template.content.cloneNode(true));
            this.titleElement = this.shadowRoot.querySelector("#title");
        }

        static get observedAttributes() {
            return ["title"];
        }

        connectedCallback() {
            this.render();
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue === newValue) return;

            if (name === "title") {
                this.render();
            }
        }

        render() {
            this.titleElement.textContent =
                this.getAttribute("title") || "Welcome to about page..!!!";
        }
    },
);
