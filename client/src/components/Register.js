import React from 'react'

import {Form,Button,Image} from 'react-bootstrap'




 function Register(){
    
        return( 
            <div className="account">
                 <h5 style={{fontFamily:"monospace",fontSize:"20px",color:"blue",marginTop:"5%"}}>Hemail Services!</h5>
                 <h6  style={{fontFamily:"monospace",fontSize:"20px"}}>We always with you</h6>
                 <div className="container" >
                     <div className="row">
                             
                              <div className="col-sm-5 col-md-6">
                              <Image src="Assets/login1.jpg" thumbnail roundedCircle/>
                                                             
                            </div>    <br/>
                            <div style={{marginTop:"8%"}}className="col-sm-6 col-md-6">   
                          
                                  <Form>
                               
                                      <Form.Control type="text"  placeholder="Username"/><br/>
                                      
                                      <Form.Control type="number" placeholder="Ph Number"/><br/>
                                      
                                      <Form.Control type="password" placeholder="password"/><br/>
                                      
                                      <Form.Control type="password" placeholder="confirm password"/><br/>
                                      <Button variant="info" >SIGNup</Button>
                       

                                  </Form></div>
                                
  
                              </div>
                        </div>
              </div>
                    
             
           
        )
    }

export default Register