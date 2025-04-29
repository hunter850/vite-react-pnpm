import { Fragment } from "react";
import { Link } from "react-router-dom";

function Header(): React.JSX.Element {
    return (
        <Fragment>
            <header className="relative z-1 shadow-md">
                <nav className="flex h-12 justify-center gap-8">
                    <Link to="/" className="content-center px-4 hover:text-black hover:underline">
                        Home
                    </Link>
                    <Link to="/greeting" className="content-center px-4 hover:text-black hover:underline">
                        Greeting
                    </Link>
                </nav>
            </header>
        </Fragment>
    );
}

export default Header;
