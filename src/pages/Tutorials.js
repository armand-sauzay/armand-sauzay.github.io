import React from 'react';
import { Link } from 'react-router-dom';
import tutorials from '../data/tutorials';
import Main from '../layouts/Main';

const Tutorials = () => {
    return (
        <Main>
            <article className='post' id='tutorials'>
                <p>
                    In my engineering/DS journey, I have really benefited from best practices. This is why I try to keep best practices in <a href="https://github.com/armand-sauzay/best-practices">here</a> and document them along the way.

                    <ul>
                        {tutorials.map(l =>

                            <li>
                                <Link to={l.path}>{l.label}</Link>
                            </li>

                        )}
                    </ul>
                </p>

            </article>
        </Main >
    );
}



export default Tutorials;