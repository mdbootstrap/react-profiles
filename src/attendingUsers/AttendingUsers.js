import React from 'react';
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function AttendingUsers() {
  return (
    <section className="vh-100" style={{ backgroundColor: '#5f59f7' }}>
      <MDBContainer className="py-5 h-100">
        <MDBRow className="justify-content-center align-items-center h-100">
          <MDBCol xl="10">
            <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <MDBTypography tag='h3'>Program Title</MDBTypography>
                <MDBCardText className="small">
                  <MDBIcon far icon="star" size="lg" />
                  <span className="mx-2">|</span> Created by <strong>MDBootstrap</strong> on 11 April , 2021
                </MDBCardText>
                <hr className="my-4" />
                <div className="d-flex justify-content-start align-items-center">
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="cog me-2" /> <span className="text-muted small">settings</span>
                  </MDBCardText>
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="link ms-4 me-2" /> <span className="text-muted small">program link</span>
                  </MDBCardText>
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="ellipsis-h ms-4 me-2" /> <span className="text-muted small">program link</span> <span className="ms-3 me-4">|</span>
                  </MDBCardText>
                  <a href="#!">
                    <MDBCardImage 
                      width="35"
                      src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp"
                      alt="avatar"
                      className="rounded-circle me-3"
                      fluid />
                  </a>
                  <MDBBtn outline color="dark" floating size="sm">
                    <MDBIcon fas icon="plus" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>

            <MDBCard className="mb-5" style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <MDBTypography tag='h3'>Company Culture</MDBTypography>
                <MDBCardText className="small">
                  <MDBIcon fas icon="star text-warning" size="lg" />
                  <span className="mx-2">|</span> Public <span className="mx-2">|</span> Updated by <strong>MDBootstrap</strong> on 11 April , 2021
                </MDBCardText>
                <hr className="my-4" />
                <div className="d-flex justify-content-start align-items-center">
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="cog me-2" /> <span className="text-muted small">settings</span>
                  </MDBCardText>
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="link ms-4 me-2" /> <span className="text-muted small">program link</span>
                  </MDBCardText>
                  <MDBCardText className="text-uppercase mb-0">
                    <MDBIcon fas icon="ellipsis-h ms-4 me-2" /> <span className="text-muted small">program link</span> <span className="ms-3 me-4">|</span>
                  </MDBCardText>
                  <a href="#!">
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-2.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-3.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-4.webp" alt="avatar" className="rounded-circle me-1" fluid />
                    <MDBCardImage width="35" src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-5.webp" alt="avatar" className="rounded-circle me-3" fluid />
                  </a>
                  <MDBBtn outline color="dark" floating size="sm">
                    <MDBIcon fas icon="plus" />
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}