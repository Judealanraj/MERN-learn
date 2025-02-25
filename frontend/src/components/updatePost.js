import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { Link, useNavigate, useParams } from "react-router-dom";

function UpdatePost() {
  const params = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const getSinglePost = async () => {
    try {
      const response = await fetch(
        `http://localhost:5000/api/post/${params.post_id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      const { post } = data;
      setTitle(post.title);
      setDescription(post.description);
    } catch (error) {}
  };

  useEffect(() => {
    getSinglePost();
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if (!title) {
      alert("please enter title");
    }
    if (!description) {
      alert("please enter description");
    }
    try {
      setLoading(true);
      const response = await fetch(
        `http://localhost:5000/api/updatePost/${params.post_id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title: title, description: description }),
        }
      );
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    setTitle("");
    setDescription("");
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
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </Form.Group>

            <Button
              variant="success"
              type="submit"
              disabled={loading}
              className="me-2"
            >
              {loading ? (
                <Spinner as="span" animation="border" size="sm" />
              ) : (
                "Update"
              )}
            </Button>
            <Button variant="secondary" type="button" onClick={handleCancel}>
              <Link to={"/"} style={{ textDecoration: "none", color: "white" }}>
                Cancel
              </Link>
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}

export default UpdatePost;
