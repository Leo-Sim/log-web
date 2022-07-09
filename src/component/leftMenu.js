
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCookie, faBook } from "@fortawesome/free-solid-svg-icons";
import React, {useEffect} from 'react';
import { useRef } from 'react';


export const LeftMenu = React.forwardRef((props, ref) => {

        return (
            <>
                <div className="area"></div>
                <nav className="main-menu" ref={ ref }>
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
});
