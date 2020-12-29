import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import lazyStyle, { emo } from "./styles/faces.lazy.css";

function Item() {
    const { emoji, title } = useParams();
    return (
        <span className={emo} title={title}>
            {emoji}
        </span>
    );
}

function Faces() {    
    const { url, path } = useRouteMatch();
    useEffect(() => {
        lazyStyle.use();
        return () => { lazyStyle.unuse(); console.log('Faces CSS unused!'); };
    });    
    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <ul className="list-unstyled text-end">
                    <li>
                        <Link to={`${url}/\u{1f607}/Saint`}>Saint</Link>
                    </li>
                    <li>
                        <Link to={`${url}/\u{1f608}/Devil`}>Devil</Link>
                    </li>
                    <li>
                        <Link to={`${url}/\u{1f61c}/Crazy`}>Crazy</Link>
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

export default Faces;