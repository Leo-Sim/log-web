
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faBook } from "@fortawesome/free-solid-svg-icons";


export const LeftMenu = () => {

    return (
        <>
            <div className="area"></div>
            <nav className="main-menu">
                <ul>
                    <li>
                        <a href="http://justinfarrow.com">

                            <FontAwesomeIcon className={"img"} icon={ faCookie } />
                            <span className="nav-text">
                            Log Choco
                        </span>
                        </a>

                    </li>
                    <li className="has-subnav">
                        <a href="#">

                            <FontAwesomeIcon className={"img"} icon={ faBook } />
                            <span className="nav-text">
                            Log Reader
                        </span>
                        </a>
                    </li>
                </ul>
            </nav>

        </>
    );
}
