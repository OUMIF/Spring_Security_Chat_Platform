import React from 'react'
import "./Footer.css"; 

const FooterComponent = () => {
return (
    <div className="footer-dark footer-compact">
      <footer>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4">
              <h3>Employee Management System</h3>
            </div>
            <div className="col-md-4 text-center">
              <p className="mb-0">Gestion efficace des employés</p>
            </div>
            <div className="col-md-4 text-end">
              <div className="item social">
                <a href="#"><i className="icon ion-social-facebook"></i></a>
                <a href="#"><i className="icon ion-social-twitter"></i></a>
                <a href="#"><i className="icon ion-social-instagram"></i></a>
              </div>
            </div>
          </div>
          <p className="copyright">Employee Management System © 2025</p>
        </div>
      </footer>
    </div>
  )
}

export default FooterComponent