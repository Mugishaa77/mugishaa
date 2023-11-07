import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";



export default function Projects () {
    return (
        <div className="project">
            <div className="navs">
                <Link to ="/">
                    <span className="back">
                        <FontAwesomeIcon icon={faAnglesLeft} />
                    </span>
                </Link>
                <Link to="/">
                <span className="middle">
                    <FontAwesomeIcon icon={faHouse} />
                </span>
                </Link>
                <Link to="/evergreen">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
            <div className="projects-body">               
                <h1>My Projects</h1>
                <ul>
            <Link to="/evergreen">
                <li>Evergreen</li>
            </Link>
            <Link to="/weather">
                <li>Weather App</li>
            </Link>
            <Link to="/mock">
                <li>Practice Portfolio</li>
            </Link>
            
           </ul>

            <h3>I am Currently working on:</h3>
           <h4> <a href="https://atlas-omega.vercel.app/"
           target="_blank"
           rel="noopener noreferrer">Atlas - Corporate Website <sup><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
  <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
</svg></sup></a></h4>

            </div>
          
        </div>
    );
}