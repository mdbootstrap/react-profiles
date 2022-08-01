import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography, MDBIcon } from 'mdb-react-ui-kit';

export default function ECommerce() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#eee' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px', backgroundColor: '#93e2bb' }}>
              <MDBCardBody className="p-4 text-black">
                <div>
                  <MDBTypography tag='h6'>Exquisite hand henna tattoo</MDBTypography>
                  <div className="d-flex align-items-center justify-content-between mb-3">
                    <p className="small mb-0"><MDBIcon far icon="clock me-2" />3 hrs</p>
                    <p className="fw-bold mb-0">$90</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-4">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '70px' }}
                      className="img-fluid rounded-circle border border-dark border-3"
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-2.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <div className="d-flex flex-row align-items-center mb-2">
                      <p className="mb-0 me-2">@sheisme</p>
                      <ul className="mb-0 list-unstyled d-flex flex-row" style={{ color: '#1B7B2C' }}>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                        <li>
                          <MDBIcon fas icon="star fa-xs" />
                        </li>
                      </ul>

                    </div>
                    <div>
                      <MDBBtn outline color="dark" rounded size="sm">+ Follow</MDBBtn>
                      <MDBBtn outline color="dark" rounded size="sm" className="mx-1">See profile</MDBBtn>
                      <MDBBtn outline color="dark" floating size="sm"><MDBIcon fas icon="comment" /></MDBBtn>
                    </div>
                  </div>
                </div>
                <hr />
                <MDBCardText>52 comments</MDBCardText>
                <MDBBtn color="success" rounded block size="lg">
                  <MDBIcon far icon="clock me-2" /> Book now
                </MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}