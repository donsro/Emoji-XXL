import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import lazyStyle, { emo } from "./styles/time.lazy.css";

function Item() {
    const { emoji, title } = useParams();
    return (
        <span className={emo} title={title}>
            {emoji}
        </span>
    );
}

function Time() {    
    const { url, path } = useRouteMatch();
    useEffect(() => {
        lazyStyle.use();
        return () => { lazyStyle.unuse(); console.log('Time CSS unused!'); };
    });
    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <ul className="list-unstyled text-end">
                    <li>
                        <Link to={`${url}/\u{1f550}/1:00`}>One</Link>
                    </li>
                    <li>
                        <Link to={`${url}/\u{1f551}/2:00`}>Two</Link>
                    </li>
                    <li>
                        <Link to={`${url}/\u{1f552}/3:00`}>Three</Link>
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

export default Time;