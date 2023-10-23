import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Mock () {
    return (
        <div className="mock-website">
            <div className="navs">
                <Link to ="/projects">
                    <span className="back">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </span>
                </Link>
                <Link to="/">
                <span className="middle">
                    <FontAwesomeIcon icon={faHouse} />
                </span>
                </Link>
                <Link to="/contact">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
            </div>
    )
}