import React from "react";
import Template from "./template.js";
import lazyStyle, { emo } from "./styles/faces.lazy.css";
const linkData = [
    {
        emoji: "\u{1f607}",
        title: "Saint"
    },
    {
        emoji: "\u{1f608}",
        title: "Devil"
    },
    {
        emoji: "\u{1f61c}",
        title: "Crazy"
    }
];
const props = { lazyStyle, emo, linkData }

function Faces() {
    return (
        <Template {...props} />
    );
};

export default Faces;