import { Link } from 'react-router-dom';
import './Navigation.css';


function Navigation() {
    return (
        <div className="Navigation">
            <div className="navigationName">Users</div>
            <div className="userList">
                <ul>
                    <li><Link to="/">Main</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li>Завдання</li>
                    <ul>
                        <li><Link to="/taskDay">Завдання</Link></li>
                    </ul>
                </ul>
            </div>
        </div>
    );
}

export default Navigation;