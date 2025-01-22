import { Link } from "react-router-dom";

export default function Header() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/shopping-list">Shopping List</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar</Link>
                </li>
                <li>
                    <Link to="/settings">Settings</Link>
                </li>
                <li>
                    <Link to="/auth">Auth</Link>
                </li>
            </ul>
        </nav>
    );
}
