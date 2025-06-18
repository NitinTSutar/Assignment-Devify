import React from "react";

const TableOfContents = ({data}) => {
    return (
        <ul>
            {data.map((x, i) => 
                <li key={i}><h1>{x.text}</h1></li>
            )}
        </ul>
    );
};

export default TableOfContents;
