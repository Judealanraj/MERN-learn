import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

function AddPost() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log({ title, description });
      setLoading(false);
      setTitle('');
      setDescription('');
      alert('Post submitted successfully!');
    }, 1500);
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-4">
        <Col md={6}>
          <h2 className="mb-3">Add Post</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Enter title" 
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                required 
              />
            </Form.Group>
            
            <Form.Group controlId="formDescription" className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Enter description" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                required 
              />
            </Form.Group>
            
            <Button variant="primary" type="submit" disabled={loading} className="me-2">
              {loading ? <Spinner as="span" animation="border" size="sm" /> : 'Submit'}
            </Button>
            <Button variant="secondary" type="button" onClick={handleCancel}>Cancel</Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default AddPost;
