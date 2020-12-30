import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

function Item(props) {
    const { emoji, title } = useParams();
    return (
        <span className={props.emo} title={title}>
            {emoji}
        </span>
    );
}

function Template(props) {
    const { url, path } = useRouteMatch(),
    { linkData, lazyStyle, emo } = props,
    linkList = linkData.map((link, index) => {
        return (
            <li key={index}>
                <Link to={`${url}/${link.emoji}/${link.title}`}>
                    {link.label || link.title}
                </Link>
            </li>
        );
    });
    useEffect(() => {
        lazyStyle.use();
        return () => lazyStyle.unuse();
    });
    return (
        <div className="row justify-content-center">
            <div className="col-auto">
                <Route path={`${path}/:emoji/:title`}>
                    <Item emo={emo} />
                </Route>
            </div>
            <div className="col-auto">
                <ul className="list-unstyled">
                    {linkList}
                </ul>
            </div>
        </div>
    );
};

export default Template;