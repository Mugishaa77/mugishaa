import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faPhone} from "@fortawesome/free-solid-svg-icons";
import { faEnvelope} from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";


export default function Contact () {
    return(
        <div className="contact">
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
                <Link to="/">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
            <div className="contact-body">
                <h2>Contact Information</h2>
                <p>Feel free to contact to me on:</p>

           <h3 className="phone">
                <FontAwesomeIcon icon={faPhone} /> 
                <a
                href="tel:+254707720597"
                target="_blank"
                title="Call"
                rel="noopener noreferrer"
            > +254 707 720 597
              </a></h3>
           

            <h3 className="email">
            
                <FontAwesomeIcon icon={faEnvelope} /></h3>
                 <a
                href="mailto:sallywanga2016@gmail.com"
                title= "Email"
                target="_blank"
                rel="noopener noreferrer"
                className="email-link"
              > Sallywanga2016@gmail.com</a>
            <p className="regards">I look foward to connecting with you.
            <br/>
            <span>Regards.</span>
                
            </p>
            <hr/>
            </div>
            
           
        </div>
    )
}