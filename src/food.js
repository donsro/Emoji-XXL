import React from "react";
import Template from "./template.js";
import lazyStyle, { emo } from "./styles/food.lazy.css";
const linkData = [
    {
        emoji: "\u{1f34b}",
        title: "Lemon"
    },
    {
        emoji: "\u{1f34f}",
        title: "Apple"
    },
    {
        emoji: "\u{1f347}",
        title: "Grapes"
    }
];
const props = { lazyStyle, emo, linkData }

function Food() {
    return (
        <Template {...props} />
    );
};

export default Food;