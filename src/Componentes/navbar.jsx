import { Link } from "react-router-dom"
import "./navbar.css";

function NavButton({ href, text }) {
    return (
        <Link className="nav-btn" to={href}>
            {text}
        </Link>
    );
}

function Navbar({ links }) {
    console.log(links);
    const title = "Space App";

    return (
        <nav>
            <div>
                <h1> {title} </h1>
            </div>
            {links.map((link, idx) => (
                <NavButton href={link.href} text={link.text} key={idx} />
            ))}
        </nav>
    );
}

export default Navbar;
