import "./style.scss";
import { Link } from "react-router-dom";
import logo from "assets/icons/logo.svg";

export const Logo = () => {
    return (
        <div className="logo-wrapper">
            <Link to="/">
                <img src={logo} alt="logo" />
            </Link>
        </div >

    )
}
