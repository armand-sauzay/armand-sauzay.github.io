import React, { Component, Suspense } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Index from './pages/Index'; // fallback for lazy pages
import Projects from './pages/Projects';
import Tutorials from './pages/Tutorials';
import CondaEnvironmentTutorial from './pages/tutorials/CondaEnvironmentTutorial';
import './static/css/main.scss';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <Suspense fallback={<Index />}>
                    <Routes>
                        <Route exact path='/' element={<Index />} />
                        <Route path='tutorials' element={<Tutorials />} />
                        <Route path='projects' element={<Projects />} />
                        <Route path='about' element={<About />} />
                        <Route path='tutorials/conda-env' element={<CondaEnvironmentTutorial />} />
                    </Routes>
                </Suspense>
            </HashRouter >
        );
    }
}

export default App;