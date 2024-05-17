import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
function Nav() {
  return (
    <div>
      <Navbar className="bg-info">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src="https://imgs.search.brave.com/kIfhZ2_NiKHMbSh2FTU3Ay2SFcclzRdBRrVhAYdhFWs/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9keW5h/bWljLmJyYW5kY3Jv/d2QuY29tL2Fzc2V0/L2xvZ28vNmNjMGZk/ZWYtM2ZlNy00ZDFk/LTkwMGQtZTdmODg0/YjdiYjhkL2xvZ28t/c2VhcmNoLWdyaWQt/MXg_bG9nb1RlbXBs/YXRlVmVyc2lvbj0x/JnY9NjM3OTM2MzA1/MjI5OTMwMDAw"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            React Bootstrap
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  )
}

export default Nav
