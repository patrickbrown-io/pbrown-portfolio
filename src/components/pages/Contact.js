import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { Button } from 'react-bootstrap';
import {Form, Row, Col} from 'react-bootstrap';

const styles = {
  header:{
    textAlign: 'center',
    padding:'3%',
  },
  formStyle:{
    justifyContent:'center',
    alignContent:'center',
    marginLeft:'5%',
    marginRight:'5%'
  },
  buttonStyle:{
    alignSelf:'center'
  }
}

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_1fk7jfc", "template_y57t2gl", e.target, 'user_WqtYSk3J7sWCl8zK6WLaJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <>

    <h2 style={styles.header}>Connect with me:</h2>


    <Form ref={form} onSubmit={sendEmail} style={styles.formStyle}>
      <Form.Group as={Row} className="mb-3">
      <Form.Label column sm="2">Name</Form.Label>

      <Col sm="8">
      <input type="text" name="name" placeholder="Your Name"/>
      </Col>
      </Form.Group>

    <Form.Group as={Row} className="mb-3">

      <Form.Label column sm="2">Email</Form.Label>
      <Col sm="10">
      <input type="email" name="email" placeholder="Your email address"/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">

      <label>Message</label>
      <textarea style={{height:'100px'}} name="message" placeholder="Leave your message here and I will get back to you within 2 business days" />

    </Form.Group>
      <Button type="submit" value="Send" variant="dark" style={styles.buttonStyle}> Send </Button>
    </Form>
    </>
  );
};