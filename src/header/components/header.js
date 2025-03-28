import { template } from "../pages/index.js";

customElements.define(
    "header-view",
    class extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: "open" });
        }

        connectedCallback() {
            this.shadowRoot.appendChild(template.content.cloneNode(true));
        }
    },
);
