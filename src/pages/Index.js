import React from 'react';
import { Link } from "react-router-dom";
import ContactIcons from '../components/Template/ContactIcons';
import Main from '../layouts/Main';

const { PUBLIC_URL } = process.env;

const Index = () => {
    return (
        <Main>
            <article className='post' id='index'>
                <header>
                    <div className="title">
                        <h2 data-testid="heading">Hi, I&#39;m Armand 👋 </h2>
                        <p>
                            This website is a work in progress. Tutorials and projects are coming soon.
                        </p>
                    </div>
                </header>
                <div id='description-me'>
                    <div id='description-image'>
                        <img src={`${PUBLIC_URL}/images/meCV.jpg`} alt='me' />
                    </div>
                    <div id='description-text'>
                        <p>
                            I'm a Research Scientist at Turo where I specialize in Data Science infrastructure for Machine Learning. Before this, I spent wonderful years at UC Berkeley and École Centrale Paris studying applied mathematics. I previously worked at Airbnb in Paris and at Amazon in Luxembourg where I had the chance to discover both Data Analytics and Data Engineering. On my free time, I am producing music and learning about art.
                        </p>
                        <p>
                            Please feel free to read more about my <Link to="/projects"> projects</Link>,
                            or you can check out my {' '}
                            <Link to="/tutorials">tutorials</Link>, {' '}
                        </p>
                        <p>
                            Source available <a href="https://github.com/armand-sauzay/armand-sauzay.github.io">here</a>.
                        </p>
                        <p>
                            Please feel free to reach out using the links below:
                            <ContactIcons />
                        </p>
                    </div>
                </div>
            </article>
        </Main >
    );
}



export default Index;