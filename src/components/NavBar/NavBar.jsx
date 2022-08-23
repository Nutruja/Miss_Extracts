import './NavBar.css';
import { Link } from 'react-router-dom';

export default function NavBar() {
    const isSignIn = true;
    const isHome = false;

    let navElements;
    if (isSignIn) {
        navElements = [
            <Link to='/dashboard'>Dashboard</Link>,
            <Link to='/activities'>My Activity</Link>,
            <Link to='/community'>Community</Link>,
            <Link to='/setting'>Setting</Link>
        ]
    } else {
        navElements = [
            <Link to='/signin'>Sign In</Link>
        ]
    }

    if (isHome) {
        navElements.push(<Link to='registration'><p>Get Started</p></Link>)
    }

    return (
        <div className="navbar">
            <Link to='/' className="logo">
            <img src='/logo.png' alt="logo" />
                <h1>EXTRACKS</h1>
            </Link>
            <nav>
                {navElements}
            </nav>
        </div>
  )
}