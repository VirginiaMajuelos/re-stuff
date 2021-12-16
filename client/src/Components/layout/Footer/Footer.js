import React from "react";
import './footer.css';
import image01 from '../../../img/reuse.png'
import image02 from '../../../img/security.png'
import image03 from '../../../img/lifechange.png'


const Footer = () => (
  <div className="footer">
  <div style={{ display:'flex', flexDirection: 'row', flexWrap:'wrap', justifyContent: 'center'}}>
      <div>
        <img variant="top" className="imgFooter"  src={image01} alt="reuse"/>
        Reuse
      </div>

      <div>
        <img variant="top" className="imgFooter" src={image02} alt="security"/>
        Security
      </div>

      <div>
        <img variant="top"  className="imgFooter"  src={image03} alt="LifeChange"/>
        Life Change
      </div>
  </div>
    <p>
    Made by Vir & Eunice in Git Hub with MongoDB, Javascript, React & Express
    </p> 
  </div>
);

export default Footer;