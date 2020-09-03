import React from "react";

import { MDBRow, MDBCol, MDBContainer } from "mdbreact";

const Footer = () => {
  return (
    <MDBContainer
      className="container-fluid"
      style={{ backgroundColor: "tramsparent" }}
    >
      <MDBRow className="py-4">
        <MDBCol xl="12" className="text-center">
          <p style={{ margin: "auto" }}>
            © 2020 . All Rights Reserved. Designed by Stamos Kantarakis and
            Adonis Agelis
          </p>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default Footer;
