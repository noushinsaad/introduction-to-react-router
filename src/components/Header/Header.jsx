import './Header.css'

import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <div>
            {/* <h1>Home Page</h1> */}
            <nav>
                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
                <span>My Website</span>
                {/* <Link to="/">Home</Link>
                <Link to='/users'>Users</Link>
                <Link to='/posts'>Posts</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link> */}


                <NavLink to='/'>Home</NavLink>
                <NavLink to='/users'>Users</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </nav>


        </div>
    );
};

export default Header;