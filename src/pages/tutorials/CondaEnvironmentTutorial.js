import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import Main from '../../layouts/Main';

const PageComponent = () => {
    const [content, setContent] = useState("");

    useEffect(() => {
        fetch("README.md")
            .then((res) => res.text())
            .then((text) => setContent(text));
    }, []);

    return (
        <div className="conda-env-post">
            <ReactMarkdown children={content} />
        </div>
    );
};


const CondaEnvironmentTutorial = () => {
    return (
        <Main>
            <article className='post' id='conda-env-tutorial'>
                <PageComponent />



            </article>
        </Main >
    );
}



export default CondaEnvironmentTutorial;

