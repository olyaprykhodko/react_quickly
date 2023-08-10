import {NavLink} from 'react-router-dom';

function Header() {

    return (
        <div>
            <nav className='nav-menu'>
                <ul className='menu-list'>
                    <li><NavLink className='' to='/'>HOME </NavLink></li>
                    <li><NavLink className='' to='/note'>SEARCH </NavLink></li>
                    <li><NavLink className='' to='/create'>CREATE </NavLink></li>
                    <li><NavLink className='' to='/about'>ABOUT</NavLink></li>
                </ul>
            </nav>
        </div>
    );
}

export default Header;