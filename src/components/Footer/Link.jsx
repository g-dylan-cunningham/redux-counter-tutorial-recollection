import React, { Fragment } from 'react';

const Link = ({ active, children }) => {
    return (
        <Fragment>
            Link - {children}
        </Fragment>
    );
}

export default Link;
