import Header from '../components/Header/Header';
import Navigation from '../components/Navigation/Navigation';
import Main from '../components/Main/Main';
import Footer from '../components/Footer/Footer';
import TaskDay from '../components/TaskDay/TaskDay';
import Events from '../components/Events/Events';
import State1 from '../components/State/State';
import State2 from '../components/State2/State2';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {
    return (
        <div className="App">

            <Router>
                <Header />
                <Navigation />
                <Footer />
                <Main />
                <Routes>

                    <Route path="/taskDay" element={<TaskDay />} />
                    <Route path="/Events" element={<Events />} />
                    <Route path="/State1" element={<State1 />} />
                    <Route path="/State2" element={<State2 />} />
                    <Route path="*" element={<Main />} />


                </Routes>
            </Router>



        </div >
    );

}

export default App;