import "../../about/components/about.js";
import "../../common/route.js";
import "../../contact/components/contact.js";
import "../../home/components/home.js";

export const template = document.createElement("template");
template.innerHTML = `
    <route-element path="/">
        <home-page></home-page>
    </route-element>
    <route-element path="/about">
        <about-page></about-page>
    </route-element>
    <route-element path="/contact">
        <contact-page></contact-page>
    </route-element>
`;
