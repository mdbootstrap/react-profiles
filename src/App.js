import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer className="d-flex justify-content-center">
      <Link to="/basic">
        <MDBBtn className="m-2">
          Basic
        </MDBBtn>
      </Link>
      <Link to="/ecommerce">
        <MDBBtn className="m-2">
          eCommerce profile card
        </MDBBtn>
      </Link>
      <Link to="/user-profile">
        <MDBBtn className="m-2">
          User profile page template
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}