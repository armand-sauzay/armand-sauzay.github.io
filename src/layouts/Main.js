import PropTypes from 'prop-types';
import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import Footer from '../components/Template/Footer';
import Header from '../components/Template/Header';



const Main = (props) => (
    <HelmetProvider>
        <Helmet titleTemplate="Armand Sauzay | %s " defaultTitle="Armand Sauzay">
            {props.title && <title>{props.title}</title>}
            <meta name="description" content={props.description} />
        </Helmet>
        {/* <div id="wrapper"> */}
        <Header />
        <div id="main">
            {props.children}
        </div>
        {props.fullPage ? null : <Footer />}
        {/* </div> */}
    </HelmetProvider>
);

Main.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]),
    fullPage: PropTypes.bool,
    title: PropTypes.string,
    description: PropTypes.string,
};

Main.defaultProps = {
    children: null,
    fullPage: false,
    title: null,
    description: "Armand Sauzay's personal website.",
};

export default Main;