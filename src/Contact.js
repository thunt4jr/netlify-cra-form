import { Button } from "bootstrap";
import React from "react";
import { Container, Form } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
      <Form method='POST' name='contact'>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type='name' placeholder='John/Jane Doe' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='email'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type='email' placeholder='name@email.com' />
        </Form.Group>
        <Form.Group className='mb-3' controlId='message'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' rows={3} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
