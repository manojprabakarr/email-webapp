import React from 'react'
import {Image, Form,Button} from 'react-bootstrap'







class Login extends React.Component{
    render(){
        return(
            <div className="Login">
               
               <h5 style={{fontFamily:"monospace",fontSize:"20px",color:"blue",marginTop:"5%"}}>Hemail Services!</h5>
                <h6  style={{fontFamily:"monospace",fontSize:"20px"}}>Stay Happy With Us</h6>
                
                <div className="container">
                    <div className="row">
                        <div  className="col-sm-5 col-md-5">
                            <Image src="Assets/login1.jpg" thumbnail roundedCircle/>
                        </div>
                        <div style={{marginTop:"12%"}}className=" ml-auto col-sm-5 col-md-5">
                            <Form> 
                              
                                <Form.Control type="email" placeholder="Email"/><br/>
                                <Form.Control type="password" placeholder="password"/><br/>
                                <Button variant="info">LOGIN</Button>
                               
                             
                            </Form>
                        </div>
                    </div>
                </div>
                       
              
            </div>
        )
    }
}
export default Login
