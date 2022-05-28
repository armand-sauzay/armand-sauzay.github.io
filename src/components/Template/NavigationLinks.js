import { Link } from 'react-router-dom';
import routes from '../../data/routes';

const NavigationLinks = (props) => {
    return (
        <ul>
            {routes.map((l) => (
                <li
                    key={l.label}
                    onClick={() => props.closeMenu()}
                >
                    <Link to={l.path}>
                        <div>{l.label}</div>
                    </Link>
                </li>
            ))
            }
        </ul >
    );
}

export default NavigationLinks;

