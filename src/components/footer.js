import React from "react";
const Footer = () => {
  return (
    <div>
      <div className="row">
        <div className="col-md-12">
          <div className="footer p-3 mt-4 text-center bg-dark text-light">
            Made By
            <a
              href="https://www.instagram.com/surya__sv/?hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="text-warning font-weight-normal"> Surya </span>
            </a>
            using <i className="fab fa-react" /> React,Redux and OMDB-API
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
