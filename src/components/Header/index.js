import React from 'react';
import { FaHome, FaSignInAlt, FaUserAlt } from 'react-icons/fa'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Nav } from './styeled';
import { Container } from '../../styles/GlobalStyles';
export default function Header() {

    return (
        <Container>
        <Nav>
           
            <div>
            <Link to="/">
                < FaHome size={24} />
            </Link>
            <Link to="/login">
                <FaUserAlt size={24} />
            </Link>
            <Link to="/42">
                <FaSignInAlt size={24} />
            </Link>
            </div>
            
        </Nav>
        </Container>
    );

}