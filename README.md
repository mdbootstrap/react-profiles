
Responsive Profiles built with Bootstrap 5. Lots of templates such as card profile, user profile, profile form, with followers, avatars, comments, stats, social media and many more

Check out [React Profiles Documentation](https://mdbootstrap.com/docs/react/extended/profiles/) for detailed instructions & even more examples.

## Basic example

![React Profiles](https://mdbootstrap.com/img/Marketing/github/profiles/basic.png)

```js
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardTitle, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn } from 'mdb-react-ui-kit';

export default function Basic() {
  return (
    <div className="vh-100" style={{ backgroundColor: '#9de2ff' }}>
      <MDBContainer>
        <MDBRow className="justify-content-center">
          <MDBCol md="9" lg="7" xl="5" className="mt-5">
            <MDBCard style={{ borderRadius: '15px' }}>
              <MDBCardBody className="p-4">
                <div className="d-flex text-black">
                  <div className="flex-shrink-0">
                    <MDBCardImage
                      style={{ width: '180px', borderRadius: '10px' }}
                      src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-profiles/avatar-1.webp'
                      alt='Generic placeholder image'
                      fluid />
                  </div>
                  <div className="flex-grow-1 ms-3">
                    <MDBCardTitle>Danny McLoan</MDBCardTitle>
                    <MDBCardText>Senior Journalist</MDBCardText>

                    <div className="d-flex justify-content-start rounded-3 p-2 mb-2"
                      style={{ backgroundColor: '#efefef' }}>
                      <div>
                        <p className="small text-muted mb-1">Articles</p>
                        <p className="mb-0">41</p>
                      </div>
                      <div className="px-3">
                        <p className="small text-muted mb-1">Followers</p>
                        <p className="mb-0">976</p>
                      </div>
                      <div>
                        <p className="small text-muted mb-1">Rating</p>
                        <p className="mb-0">8.5</p>
                      </div>
                    </div>
                    <div className="d-flex pt-1">
                      <MDBBtn outline className="me-1 flex-grow-1">Chat</MDBBtn>
                      <MDBBtn className="flex-grow-1">Follow</MDBBtn>
                    </div>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}
```

## How to use?

1. Download MDB React - free UI KIT

2. Choose your favourite customized component and click on the image

3. Copy & paste the code into your MDB project

[▶️ Subscribe to YouTube channel for web development tutorials & resources](https://www.youtube.com/MDBootstrap?sub_confirmation=1)

## More examples

[React Profiles #2:
![React Profiles](https://mdbootstrap.com/img/Marketing/github/profiles/section-2.png)](https://mdbootstrap.com/docs/react/extended/profiles/#section-2)

[React Profiles #3:
![React Profiles](https://mdbootstrap.com/img/Marketing/github/profiles/section-3.png)](https://mdbootstrap.com/docs/react/extended/profiles/#section-3)

[React Profiles #4:
![React Profiles](https://mdbootstrap.com/img/Marketing/github/profiles/section-4.png)](https://mdbootstrap.com/docs/react/extended/profiles/#section-4)

[React Profiles #5:
![React Profiles](https://mdbootstrap.com/img/Marketing/github/profiles/section-5.png)](https://mdbootstrap.com/docs/react/extended/profiles/#section-5)

[React Profiles #6:
![React Profiles](https://mdbootstrap.com/img/Marketing/github/profiles/section-6.png)](https://mdbootstrap.com/docs/react/extended/profiles/#section-6)

[React Profiles #7:
![React Profiles](https://mdbootstrap.com/img/Marketing/github/profiles/section-7.png)](https://mdbootstrap.com/docs/react/extended/profiles/#section-7)

___

## More React documentation

<ul>
<li><a href="https://mdbootstrap.com/docs/react/components/buttons/">React buttons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/carousel/">React carousel</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/cards/">React cards</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/colors/">React colors</a></li>
<li><a href="https://mdbootstrap.com/docs/react/components/progress/">React progress</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/icons/">React icons</a></li>
<li><a href="https://mdbootstrap.com/docs/react/content-styles/typography/">React typography</a></li>
</ul>
