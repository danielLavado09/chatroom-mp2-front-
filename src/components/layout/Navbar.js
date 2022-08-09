import React, { useContext } from 'react'
import { UserContext } from '../../UserContext';
import SignedInMenu from './SignedInMenu';
import SignedOutMenu from './SignedOutMenu';

const Navbar = () => {
    const { user, setUser } = useContext(UserContext);

    const logout = async () => {
        try {
            const res = await fetch('https://chat-back-tertuapp.herokuapp.com/logout', {
                credentials: 'include',
            });
            const data = res.json();
            console.log('logout data', data);
            setUser(null)
        } catch (error) {
            console.log(error)
        }
    }
    const menu = user ? <SignedInMenu logout={logout} /> : <SignedOutMenu />
    return (
        <>
            <nav className="grey darken-4">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center"><img src='/logochat.png' height='50px' ></img>TertAPP</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        {menu}
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                {menu}
            </ul>
        </>

    )
}

export default Navbar