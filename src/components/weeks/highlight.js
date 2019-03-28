import PropTypes from "prop-types";
import {DanielUrl, ImageWithClass, PamelaUrl} from "../image";
import React from "react";
import {Weeks} from "./week-data";

const section = "section";

export const Highlights = ({weekNum}) => {
    const items = [];
    const highlights = Weeks[weekNum].highlights;

    items.push(highlights.map((item, key) =>
        <OneHighlightItem key={key} item={item} />
    ))

    return items;
}

Highlights.propTypes = {
    weekNum: PropTypes.integers,
}

const OneHighlightItem = ({item}) => {
    let className = "";
    if(item.imageUrl === DanielUrl || item.imageUrl === PamelaUrl) {
        className = "circle";
    }
    return (
        <div className="highlight-item">
            <ImageWithClass classname={className} url={item.imageUrl}/>
            <h3>{item.name}</h3>
        </div>
    );
}

OneHighlightItem.propTypes = {
    item: PropTypes.node,
    className: PropTypes.String,
}


export const Highlight = ({children}) => (
    <div className={section}>
        <div className="highlight">
            <h1>Highlights</h1>
            <div>
                {children}
            </div>
        </div>

    </div>

)

Highlight.propTypes = {
    children: PropTypes.node.isRequired,
}
