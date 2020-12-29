import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import lazyStyle, { emo } from "./styles/food.lazy.css";

function Item() {
    const { emoji, title } = useParams();
    return (
        <span className={emo} title={title}>
            {emoji}
        </span>
    );
}

function Food() {
    const { url, path } = useRouteMatch();
    useEffect(() => {
        lazyStyle.use();
        return () => { lazyStyle.unuse(); console.log('Food CSS unused!'); };
    });
    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <ul className="list-unstyled text-end">
                    <li>
                        <Link to={`${url}/\u{1f34b}/Lemon`}>Lemon</Link>
                    </li>
                    <li>
                        <Link to={`${url}/\u{1f34f}/Apple`}>Apple</Link>
                    </li>
                    <li>
                        <Link to={`${url}/\u{1f347}/Grapes`}>Grapes</Link>
                    </li>
                </ul>
            </div>
            <div className="col-auto">
                <Route path={`${path}/:emoji/:title`}>
                    <Item />
                </Route>
            </div>
        </div>
    );
};

export default Food;