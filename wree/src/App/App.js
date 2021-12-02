import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import TaskDay from '../TaskDay/TaskDay';
import Events from '../Events/Events';
//import State from '../State/State';
import State1 from '../State/State';

import './App.css';



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//import Cl from '../State/State';




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
                    <Route path="*" element={<Main />} />


                </Routes>
            </Router>



        </div >
    );

}

export default App;