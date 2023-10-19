import {Link} from 'react-router-dom';

export default function Projects () {
    return (
        <div className="project">
           <ul>
            <Link to="/evergreen">
                <li>Evergreen</li>
            </Link>
            <Link to="/weather">
                <li>Weather App</li>
            </Link>
            
           </ul>
        </div>
    );
}