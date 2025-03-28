import { template } from "../pages/index.js";

customElements.define(
    "router-element",
    class extends HTMLElement {
        constructor() {
            super();

            this.attachShadow({ mode: "open" });
            this.handleNavigation = this.handleNavigation.bind(this);
            this.handlePopState = this.handlePopState.bind(this);
        }

        connectedCallback() {
            document.addEventListener(
                "app-link-clicked",
                this.handleNavigation,
            );
            window.addEventListener("popstate", this.handlePopState);
            this.render(window.location.pathname);
        }

        disconnectedCallback() {
            document.removeEventListener(
                "app-link-clicked",
                this.handleNavigation,
            );
            window.removeEventListener("popstate", this.handlePopState);
        }

        handleNavigation(event) {
            this.render(event.detail.path);
        }

        handlePopState() {
            this.render(window.location.pathname);
        }

        render(path) {
            const templateContent = template.content.cloneNode(true);
            const routeElements =
                templateContent.querySelectorAll("route-element");
            let routeNode = null;
            for (const route of routeElements) {
                const routePath = route.getAttribute("path");
                if (routePath === path) {
                    routeNode = route;
                    break;
                }
            }
            if (routeNode) {
                const routeContent =
                    routeNode.firstElementChild.cloneNode(true);
                this.shadowRoot.innerHTML = "";
                this.shadowRoot.appendChild(routeContent);
            }
        }
    },
);
