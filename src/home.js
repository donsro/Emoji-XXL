import React, { useEffect } from "react";
import lazyStyle, { emo } from "./styles/home.lazy.css";

function Home() {
    useEffect(() => {
        lazyStyle.use();
        return () => lazyStyle.unuse();
    });
    return (
        <span className={emo}>&#134826;</span>
    );
};

export default Home;