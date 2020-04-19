import React from 'react';
import Link from './Link';

const Footer = ({ activeFilter = 'active'}) => {
    return (
        <div>
            <Link isActive={
                activeFilter === 'all'
            } >link 1</Link>
            <Link isActive={
                activeFilter === 'active'
            } >link 2</Link>
            <Link isActive={
                activeFilter === 'completed'
            } >link 3</Link>
        </div>
    );
}

export default Footer;
