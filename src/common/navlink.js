class NavLinkElement extends HTMLElement {
    static instances = [];

    static get observedAttributes() {
        return ["path"];
    }

    constructor() {
        super();
        this.path = "/";
        this.attachShadow({ mode: "open" });
        NavLinkElement.instances.push(this);
        this.clickEventHandle = this.clickEventHandle.bind(this);
        this.handlePopState = this.handlePopState.bind(this);
    }

    connectedCallback() {
        this.shadowRoot.innerHTML = `
                <style>
                    a {
                        text-decoration: none;
                        color: white;
                    }

                    a:hover {
                        color: rgb(170 231 170);
                    }

                    a.active {
                        color: green;
                        font-weight: bold;
                    }
                </style>
                <a href="${this.path}" class="nav-link ${this.path === window.location.pathname ? "active" : ""}">
                    <slot></slot>
                </a>
            `;
        this.link = this.shadowRoot.querySelector("a");
        this.link.addEventListener("click", this.clickEventHandle);
        window.addEventListener("popstate", this.handlePopState);
    }

    clickEventHandle(event) {
        event.preventDefault();
        window.history.pushState({}, "", this.path);
        this.updateActiveState();
        this.dispatchEvent(
            new CustomEvent("app-link-clicked", {
                detail: { path: this.path },
                bubbles: true,
                composed: true,
            }),
        );
    }
    disconnectedCallback() {
        NavLinkElement.instances = NavLinkElement.instances.filter(
            (instance) => instance !== this,
        );
        this.link.removeEventListener("click", this.clickEventHandle);
        window.removeEventListener("popstate", this.handlePopState);
    }

    handlePopState() {
        this.updateActiveState();
    }

    updateActiveState() {
        NavLinkElement.instances.forEach((link) => {
            const anchor = link.shadowRoot.querySelector("a");
            if (link.getAttribute("path") === window.location.pathname) {
                anchor.classList.add("active");
            } else {
                anchor.classList.remove("active");
            }
        });
    }

    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue === newValue) return;
        this[name] = newValue;
    }
}

customElements.define("nav-link", NavLinkElement);
