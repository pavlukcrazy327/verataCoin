"use client";
import React, { useEffect } from 'react';
import Image from "next/image"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { faInstagram } from '@fortawesome/free-brands-svg-icons';
// import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import '@fortawesome/fontawesome-svg-core/styles.css'

export default function RootFooter() {
  useEffect(() => {
    // Create script elements
    // const script0 = document.createElement('script');
    // script0.src = "/js/jquery.min.js";
    // script0.async = true;

    const script1 = document.createElement('script');
    script1.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js";
    script1.async = true;

    const script2 = document.createElement('script');
    script2.src = "/js/main.js";
    script2.async = true;

    // Append the scripts to the body
    // document.body.appendChild(script0);
    document.body.appendChild(script1);

    // Once jQuery is loaded, load Bootstrap and main.js
    script1.onload = () => {
      document.body.appendChild(script1);

      // script1.onload = () => {
      //   document.body.appendChild(script2);
      // };

      script1.onerror = () => {
        console.error("Failed to load Bootstrap");
      };
    };

    // script0.onerror = () => {
    //   console.error("Failed to load jQuery");
    // };
    script1.onerror = () => {
      console.error("Failed to load jQuery");
    };

    // Cleanup function to remove the scripts when the component unmounts
    return () => {
      // if (document.body.contains(script0)) {
      //   document.body.removeChild(script0);
      // }
      if (document.body.contains(script1)) {
        document.body.removeChild(script1);
      }
      if (document.body.contains(script2)) {
        document.body.removeChild(script2);
      }
    };
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <footer className="ft-row">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ft-left">
            <ul className="">
              <li><a href="/"><Image src="/images/logos/WOMLOGO.svg" alt="" className="img-fluid" width={52} height={52}/></a></li>
              <li><a href="#">Privacy</a></li>
              <li><a href="#">Legal</a></li>
            </ul>
          </div>
          <div className="col-md-2">
            <div className="pt-1">
              <div>All Rights Reserved</div>
            </div>
          </div>
          <div className="col-md-4 ft-social-icon">
            <ul className="pt-1">
              <li><a href="https://x.com/alteredverse_" target="_blank"><Image src="/images/X Icon.png" alt="" className="img-fluid" width={20} height={20}/></a></li>
              <li><a href="https://discord.gg/alteredverse" target="_blank"><Image src="/images/Discord logo.png" alt="" className="img-fluid" width={20} height={20}/></a></li>
              <li><a href="https://t.me/Altered_group" target="_blank"><Image src="/images/Telegram icon.png" alt="" className="img-fluid" width={20} height={20}/></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}