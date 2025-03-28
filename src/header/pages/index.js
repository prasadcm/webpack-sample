import "../../common/navlink.js";

export const template = document.createElement("template");
template.innerHTML = `
    <style>
        nav {
            padding: 10px;
            text-align: center;
        }
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
            display: flex;
        }

        li {
            margin: 0 15px;
        }
    </style>
    <nav>
        <ul>
            <li><nav-link path="/">Home</nav-link></li>
            <li><nav-link path="/about">About</nav-link></li>
            <li><nav-link path="/contact">Contact</nav-link></li>
        </ul>
    </nav>
`;
