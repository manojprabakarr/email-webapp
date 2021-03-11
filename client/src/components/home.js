import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'
import Jumbotron from 'react-bootstrap/Jumbotron'
import{Image,Container,Row,Col,Form} from 'react-bootstrap'
import {FiFacebook} from 'react-icons/fi'

function Home() {
    return(
        <div className="content" style={{backgroundColor:"ghostwhite"}}>
            <div className="header">
           <Navbar style={{backgroundColor:"ghostwhite"}}>
                   <Navbar.Brand href="/" style={{color:"blue",fontFamily:"monospace",fontSize:"20px",fontWeight:"invert"}}>Hemail</Navbar.Brand>
                   <Navbar.Toggle />
                       <Navbar.Collapse className="justify-content-end">
                           <Navbar.Text>
                              <Button variant="info">Signin</Button>
                            </Navbar.Text>
                      </Navbar.Collapse>  
            </Navbar>
            </div>

            <div className="menu">
                 <Jumbotron style={{backgroundColor:"ghostwhite",lineHeight:"4em"}}>
                      <h5 style={{fontFamily:"monospace",fontSize:"20px"}}>Hemail Services!</h5>
                         <h6  style={{fontFamily:"monospace",fontSize:"20px"}}> send a secure and fast Emails </h6>
                          <p>
                             <Button variant="info">Create An Account ....</Button>
                          </p>
                  </Jumbotron>

            </div>


            <div  className="footer">
            <Container  >
                  <Row>

                 <Col sm={2} md={6}>
                       <h4 style={{fontFamily:"monospace"}}>Contact us!</h4><br/>
                           <Form>
                                <Form.Control  type="name" placeholder="name" /><br/><br/>
                                 <Form.Control type="email" placeholder="email" /><br/><br/>
                                 <Form.Control as="textarea" rows={3} placeholder="subject"/><br/><br/>
                                     <Button variant="info"> Submit</Button>
                           </Form>
                  </Col>
                      <Col sm={2} md={6}>
                          <Image src="/Assets/iamge1.jpg" thumbnail/>
                       </Col>
                  </Row>
           </Container>


            </div>

        </div>
    )
}
export default Home