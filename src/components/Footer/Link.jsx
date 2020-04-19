import React from 'react';

const Link = ({ activeFilter, children, handleLinkClick }) => {

    const isActive = activeFilter === children;
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
            <button
                onClick={() => handleLinkClick(children)}    
                href=""
            >
                {children}
            </button>
            {" "}
        </span>
    );
}

export default Link;
