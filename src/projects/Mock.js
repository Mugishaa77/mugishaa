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
            <div className="mock">
                 < div className="m-titles">
        <h1>Overview</h1>
        <h2>Project Name: Shecodes Responsive Portfolio</h2>
        <h3>Sally's Practice Portfolio Project</h3>
        <h4>Category: <span>Responsive Web Design</span></h4>
                <hr/>
</div>
 <div className="m-description">
                    <h3>Description</h3>
                    <p>This is a simple website showcasing various aspects of front-end web development which include:
                        <ul>
                            <li>Html + Css(Css Grid and Flexbox)</li>
                            <li>Bootstrap</li>
                            <li>UI/UX Design</li>
                            <li>Responsive web Design</li>
                        </ul>
                    </p>


            </div>
            </div>

            
            </div>
    )
}