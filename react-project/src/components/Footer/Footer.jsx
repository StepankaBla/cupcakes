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
