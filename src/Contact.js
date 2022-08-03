import React from "react";
import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container>
      <Form method='POST' name='contact'>
        <input type='hidden' name='form-name' value='contact' />
        <Form.Group className='mb-3'>
          <Form.Label>Full Name</Form.Label>
          <Form.Control type='text' name='name' placeholder='John/Jane Doe' />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Email Address</Form.Label>
          <Form.Control
            type='email'
            name='email'
            placeholder='name@email.com'
          />
        </Form.Group>
        <Form.Group className='mb-3'>
          <Form.Label>Message</Form.Label>
          <Form.Control as='textarea' name='message' rows={3} />
        </Form.Group>

        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  );
}
