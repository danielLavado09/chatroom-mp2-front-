import React from 'react'

const Navbar = () => {
    return (
        <>
            <nav className="teal darken-4">
                <div className="nav-wrapper">
                    <a href="/" className="brand-logo center"><img src='/logo-dove-chat.png' height='50px' ></img>Dovechat</a>
                    <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><a href="#">Ingresar</a></li>
                        <li><a href="#">Registrarse</a></li>
                        <li><a href="#">Salir</a></li>
                    </ul>
                </div>
            </nav>
            <ul className="sidenav" id="mobile-demo">
                <li><a href="sass.html">Ingresar</a></li>
                <li><a href="badges.html">Registrarse</a></li>
                <li><a href="collapsible.html">Salir</a></li>
            </ul>
        </>

    )
}

export default Navbar