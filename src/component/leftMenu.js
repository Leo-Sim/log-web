
import './../css/leftMenu.css'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faBook, faChartColumn } from "@fortawesome/free-solid-svg-icons";

export const LeftMenu = () => {

        return (
            <>
                <div className="area"></div>
                <nav className="main-menu" style={{ textAlign: 'center'}}>
                    <ul>
                        <li>
                            <a href="/logchoco/inbound">

                                <FontAwesomeIcon className={"img"} icon={ faCookie } />
                                <span className="nav-text">
                                    Inbound Log
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/logchoco/outbound">

                                <FontAwesomeIcon className={"img"} icon={ faCookie } />
                                <span className="nav-text">
                                    Outbound Log
                                </span>
                            </a>
                        </li>
                        <li>
                            <a href="/logChoco/monitor">
                                <FontAwesomeIcon className={"img"} icon={ faChartColumn } />
                                <span className="nav-text">
                                    Monitor
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
};
