import React, { Fragment } from 'react';

const Link = ({ isActive, children, handleLinkClick }) => {
    if(isActive) {
        return (
            <span>
                {children}
            {" "}
            </span>
        )
    }
    return (
        <span>
            <a
                onClick={handleLinkClick}    
                href=""
            >
                {children}
            </a>
            {" "}
        </span>
    );
}

export default Link;
