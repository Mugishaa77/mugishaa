import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAnglesLeft } from "@fortawesome/free-solid-svg-icons";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";
import ReactWeather from './ReactWeather';
import Vanilla from './Vanilla';

export default function Weather () {
      const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    <div><ReactWeather /></div>,
    <div><Vanilla /></div>
    

    // Add more pages as needed
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

    return (
        <div className="weather">
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
                <Link to="/weather">
                    <span className="next">
                        <FontAwesomeIcon icon={faAnglesRight} />
                    </span>
                </Link>
            </div>
            <div className="weather-page">
                 {pages[currentPage]}
            </div>
             <div className="catalog-controls">
        <button onClick={prevPage} disabled={currentPage === 0}><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M8.354 1.646a.5.5 0 0 1 0 .708L2.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
  <path fill-rule="evenodd" d="M12.354 1.646a.5.5 0 0 1 0 .708L6.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg>Previous</button>
        <span>{`Page ${currentPage + 1} of ${pages.length}`}</span> {/* Displays page number */}
        <button onClick={nextPage} disabled={currentPage === pages.length - 1}>Next<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-double-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M3.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L9.293 8 3.646 2.354a.5.5 0 0 1 0-.708z"/>
  <path fill-rule="evenodd" d="M7.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L13.293 8 7.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></button>
      </div>
        </div>
    )
}