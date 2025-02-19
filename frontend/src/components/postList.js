import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"; // ✅ Import Card
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillDelete } from "react-icons/ai";
import { AiOutlineEdit } from "react-icons/ai";

const dataSet = [
  { _id: 1, title: "afadvsd", description: "zcdasdca" },
  { _id: 2, title: "lorem ipsum", description: "sample description 1" },
  { _id: 3, title: "test title", description: "random text here" },
  { _id: 4, title: "another title", description: "another description" },
  { _id: 5, title: "example", description: "this is an example" },
  { _id: 6, title: "hello world", description: "basic programming phrase" },
  { _id: 7, title: "coding", description: "description about coding" },
  { _id: 8, title: "javascript", description: "popular programming language" },
  { _id: 9, title: "frontend", description: "UI/UX related development" },
  { _id: 10, title: "backend", description: "server-side development" },
  { _id: 11, title: "database", description: "storing and managing data" },
];

function PostList() {
  return (
    <Container className="mt-5">
      <Button size="lg" variant="success">
        Create Post <BsPlusCircleFill />
      </Button>

      <Row className="mt-3" sm={1} md={3}>
        {dataSet.map((post) => (
          <Col key={post._id}>
            <Card className="mb-2">
              <Card.Body>
                <Row className="mb-2">
                  <Col xs={8} md={7} lg={8}>
                    <Card.Title>{post.title}</Card.Title>
                  </Col>
                  <Col>
                    <AiOutlineEdit className="text-primary" role="button" />
                  </Col>
                  <Col>
                    <AiFillDelete
                      className="text-danger"
                      onClick={() => {}}
                      role="button"
                    />
                  </Col>
                </Row>
                <Card.Text>{post.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default PostList;
