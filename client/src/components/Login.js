
import  Button  from 'react-bootstrap/Button'
import React from 'react'
import Card  from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'


function Login () {
    return(
        <div className="login" style={{marginLeft:"40%",marginRight:"50%",marginTop:"10%",backgroundColor:"ghostwhite"}}>
            <Card style={{ width: '35rem' }}>
                  <h4 style={{fontFamily:"monospace",color:"blue",fontSize:"20px"}}>Hemail.in</h4>
                  <h5  style={{fontFamily:"monospace",color:"black",fontSize:"15px"}}>Signin with Hemail</h5><br/>
                  <Form>
                  <Col  style={{marginLeft:"40px"}} sm={2} md={6}>
                          <Form.Control type="name" placeholder="phno" /><br/><br/>
                          <Form.Control type="password" placeholder="password" /><br/><br/>
                          <Button variant="info">Signin</Button>
                         
                         </Col>
                  </Form>
            </Card>

        </div>
    )
}
export default Login
