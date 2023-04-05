import "./style.scss";
import { Link } from "react-router-dom";
import logo from "assets/icons/logo.svg";

export const Logo = () => {
    return (
        <Link to="/">
            <div className="logo-wrapper">
                <img src={logo} alt="logo" />
            </div>
        </Link>
    )
}
