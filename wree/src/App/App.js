import Header from '../Header/Header';
import Navigation from '../Navigation/NAvigation';
import Main from '../Main/Main';
import Footer from '../Footer/Footer';
import TaskDay from '../TaskDay/TaskDay';
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


                </Routes>
            </Router>



        </div >
    );

}

export default App;