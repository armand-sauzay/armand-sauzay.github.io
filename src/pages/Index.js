import React from 'react';
import ContactIcons from '../components/Template/ContactIcons';
import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => {
    return (
        <Main>
            <article className='post' id='index'>
                <header>
                    <div className="title">
                        <h2 data-testid="heading">Hi, I&#39;m Armand 👋<span id="fancy">.</span></h2>
                        <p>
                            This website is a work in progress. Tutorials and projects are coming soon.
                        </p>
                        <ContactIcons />
                    </div>
                </header>
            </article>
        </Main >
    );
}



export default Index;