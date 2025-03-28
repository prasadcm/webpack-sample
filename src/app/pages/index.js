import "../../header/components/header.js";
import "../../router/components/router.js";

export const template = document.createElement("template");
template.innerHTML = `
    <style>
        header-view {
            font-family: Arial, sans-serif;
            background-color: #333;
            margin: 0;
            padding: 0;
            text-align: center;
            align-items: center;
            justify-content: center;
            display: flex;
        }
    </style>
    <header-view></header-view>
    <router-element></router-element>
`;
