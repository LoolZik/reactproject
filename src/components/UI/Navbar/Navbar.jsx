import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)

    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }

    return (
        <div className="navbar">
            <div className="navbar__container">
                <span onClick={logout}>ВЫХОД</span>
                <div className="navbar__menu">
                    <Link className="pur" to={'/posts'}>ПОСТЫ</Link>
                    <Link className="pur" to={'/about'}>О НАС</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar;