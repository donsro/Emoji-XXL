import React from "react";
import Template from "./template.js";
import lazyStyle, { emo } from "./styles/time.lazy.css";
const linkData = [
    {
        emoji: "\u{1f550}",
        title: "1:00",
        label: "One"
    },
    {
        emoji: "\u{1f551}",
        title: "2:00",
        label: "Two"
    },
    {
        emoji: "\u{1f552}",
        title: "3:00",
        label: "Three"
    }
];
const props = { lazyStyle, emo, linkData }

function Time() {
    return (
        <Template {...props} />
    );
};

export default Time;