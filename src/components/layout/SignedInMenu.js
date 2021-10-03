import React from 'react'

const SignedInMenu = ({ logout }) => {
    return (
        <li onClick={logout}><a href="/">Salir</a></li>
    )
}

export default SignedInMenu