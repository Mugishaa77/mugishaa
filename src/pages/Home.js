 import { Link } from 'react-router-dom';
 import React, { useState, useEffect } from 'react';
 import '../App.css';

export default function Home () {
    const [text, setText] = useState('');
  const phrases = ['Web Developer', 'Front-End Developer', 'UI/UX Designer']; // Add your phrases here
  const typingSpeed = 100; // Speed in milliseconds
  const delayBetweenPhrases = 1500; // Delay between phrases in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    let charIndex = 0;

    const typingInterval = setInterval(() => {
      if (charIndex < phrases[currentIndex].length) {
        setText(phrases[currentIndex].substring(0, charIndex + 1));
        charIndex++;
      } else {
        setTimeout(() => {
          charIndex = 0;
          currentIndex = (currentIndex + 1) % phrases.length;
          setText('');
        }, delayBetweenPhrases);
      }
    }, typingSpeed);

    return () => clearInterval(typingInterval);
  }, []);
    

    return (
        <div className="home">
            <div className="content">
<h1>Sally Mugisha Wanga</h1>
            <h2 className="typewriter">
                  <span>{text}</span>
                  <span className="cursor"></span></h2>
            <ul>

                <li>
                   <Link to="/">
                    About Me</Link> 
                </li>
                <li>
                    <Link to="/">
                        Projects</Link>
                    </li>
                    <li>
                        <Link to="/">
                            Contact Me</Link>
                    </li>
            </ul>
            </div>
            

            </div>
    );

}