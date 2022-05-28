import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import NavigationLinks from "./NavigationLinks";



const NavigationBar = () => {

    const [open, setOpen] = useState(false);

    const hamburgerIcon = <FontAwesomeIcon
        icon={faBars}
        className='hamburger'
        onClick={() => setOpen(!open)}
    />
    const closeIcon = <FontAwesomeIcon
        icon={faX}
        className='hamburger'
        onClick={() => setOpen(!open)}
    />

    const closeMenu = () => setOpen(false)

    return (
        <div className='navigation-bar'>
            {open ? closeIcon : hamburgerIcon}

            {open && <NavigationLinks closeMenu={closeMenu} />}

        </div>
    );
}

export default NavigationBar;

// import React, { Suspense, lazy, useState } from 'react';
// const Burger = () => {
//     const [open, setOpen] = useState(false);

//     return (
//         <div className="burger-container">
//             <nav className="main" id="buger-nav">
//                 <ul>
//                     {open ? (
//                         <li className="menu close-menu">
//                             <div onClick={() => setOpen(!open)} className="menu-hover">&#10005;</div>
//                         </li>
//                     ) : (
//                         <li className="menu open-menu">
//                             <div onClick={() => setOpen(!open)} className="menu-hover">&#9776;</div>
//                         </li>
//                     )}
//                 </ul>
//             </nav>
//             <Suspense fallback={<></>}>
//                 <Menu right isOpen={open}>
//                     <ul className="burger-ul">
//                         {routes.map((l) => (
//                             <li key={l.label}>
//                                 <Link to={l.path} onClick={() => setOpen(!open)}>
//                                     <h3 className={l.index && 'index-li'}>{l.label}</h3>
//                                 </Link>
//                             </li>
//                         ))}
//                     </ul>
//                 </Menu>
//             </Suspense>
//         </div>
//     );
// };

// export default Burger;