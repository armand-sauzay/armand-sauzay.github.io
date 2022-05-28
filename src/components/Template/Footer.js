import React from 'react';
import { Link } from 'react-router-dom';
import ContactIcons from './ContactIcons';

const Footer = () => (
    <section id="footer">
        <ContactIcons />
        <p className="copyright">&copy; Armand Sauzay <Link to="/">armand-sauzay.github.io</Link>.</p>
    </section>
);

export default Footer;