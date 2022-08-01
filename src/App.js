import { MDBBtn, MDBContainer } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <MDBContainer>
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
      <Link to="/profile-page">
        <MDBBtn className="m-2">
          User profile page template
        </MDBBtn>
      </Link>
      <Link to="/attending-users">
        <MDBBtn className="m-2">
          Project cards with attending users
        </MDBBtn>
      </Link>
      <Link to="/personal-profile">
        <MDBBtn className="m-2">
          Personal profile with edit icon
        </MDBBtn>
      </Link>
      <Link to="/edit-button">
        <MDBBtn className="m-2">
          Edit button on profile page
        </MDBBtn>
      </Link>
      <Link to="/profile-statistics">
        <MDBBtn className="m-2">
          Profile card with statistics
        </MDBBtn>
      </Link>
    </MDBContainer>
  );
}