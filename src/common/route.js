customElements.define(
    "route-element",
    class extends HTMLElement {
        static get observedAttributes() {
            return ["path"];
        }

        constructor() {
            super();
            this.path = "/";
        }

        attributeChangedCallback(name, oldValue, newValue) {
            if (oldValue === newValue) return;
            this[name] = newValue;
        }
    },
);
