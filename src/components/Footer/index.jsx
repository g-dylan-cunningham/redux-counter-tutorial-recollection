import React from 'react';
import FilterLink from '../../containers/FilterLink';

const Footer = () => {
    return (
        <div>
            <FilterLink>all</FilterLink>
            <FilterLink>active</FilterLink>
            <FilterLink>completed</FilterLink>
        </div>
    );
}

export default Footer;
