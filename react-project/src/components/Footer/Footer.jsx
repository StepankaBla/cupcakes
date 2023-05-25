import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";

const Footer = () => {
  return (
    <MDBFooter className='bg-none text-center text-white' style={{ background: '#d7aeb1' }}>
    <MDBContainer className='p-4 pb-0'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='http://localhost:3000/' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>
        <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/stepanka_bla/' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://cz.linkedin.com/in/%C5%A1t%C4%9Bp%C3%A1nka-bla%C5%BEkov%C3%A1-3b9733262?trk=people-guest_people_search-card' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='https://github.com/StepankaBla/cupcakes' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 
      <a className='text-white' href='https://mdbootstrap.com/'>
        <br></br>Susikcups.com
      </a>
    </div>
  </MDBFooter>
  );
};

export default Footer;
