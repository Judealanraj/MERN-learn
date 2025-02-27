// import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card"; // ✅ Import Card
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";
// import Spinner from "react-bootstrap/Spinner";
// import { BsPlusCircleFill } from "react-icons/bs";
// import { AiFillDelete } from "react-icons/ai";
// import { AiOutlineEdit } from "react-icons/ai";
// import { Link } from "react-router-dom";

// const dataSet = [
//   { _id: 1, title: "afadvsd", description: "zcdasdca" },
//   { _id: 2, title: "lorem ipsum", description: "sample description 1" },
//   { _id: 3, title: "test title", description: "random text here" },
//   { _id: 4, title: "another title", description: "another description" },
//   { _id: 5, title: "example", description: "this is an example" },
//   { _id: 6, title: "hello world", description: "basic programming phrase" },
//   { _id: 7, title: "coding", description: "description about coding" },
//   { _id: 8, title: "javascript", description: "popular programming language" },
//   { _id: 9, title: "frontend", description: "UI/UX related development" },
//   { _id: 10, title: "backend", description: "server-side development" },
//   { _id: 11, title: "database", description: "storing and managing data" },
// ];

// function PostList() {
//   return (
//     <Container className="mt-5">
//       <Button size="lg" variant="success">
//         <Link to={"/create"} style={{textDecoration:"none", color:"white"}}>
//           Create Post <BsPlusCircleFill />
//         </Link>
//       </Button>

//       <Row className="mt-3" sm={1} md={3}>
//         {dataSet.map((post) => (
//           <Col key={post._id}>
//             <Card className="mb-2">
//               <Card.Body>
//                 <Row className="mb-2">
//                   <Col xs={8} md={7} lg={8}>
//                     <Card.Title>{post.title}</Card.Title>
//                   </Col>
//                   <Col>
//                     <Link to={`/update/${post._id}`}><AiOutlineEdit className="text-primary" role="button" /></Link>
//                   </Col>
//                   <Col>
//                     <AiFillDelete
//                       className="text-danger"
//                       onClick={() => {}}
//                       role="button"
//                     />
//                   </Col>
//                 </Row>
//                 <Card.Text>{post.description}</Card.Text>
//               </Card.Body>
//             </Card>
//           </Col>
//         ))}
//       </Row>
//     </Container>
//   );
// }

// export default PostList;

import React, { useState, useEffect, use } from "react";
import { Link, useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { BsPlusCircleFill } from "react-icons/bs";
import { AiFillDelete, AiOutlineEdit } from "react-icons/ai";

function PostList() {
  const [posts, setPosts] = useState([]); // ✅ Initialize posts as an empty array
  const [loading, setLoading] = useState(true); // ✅ Add loading state
  const [error, setError] = useState(null); // ✅ Add error state
  const deletePost = async (id) => {
    const confirmation = window.confirm("Are you sure to delete");
    console.log(confirmation);
    if (confirmation) {
      try {
        const response = await fetch(
          `http://localhost:5000/api/deletePost/${id}`,
          { method: "DELETE" }
        );
        if (!response.ok) {
          throw new Error("Failed to delete");
        } else {
          await getPosts();
        }
      } catch (err) {
        console.error("Error deleting post:", err);
        setError(err.message);
      } finally {
        setLoading(false); // ✅ Stop loading after fetching
      }
    }
  };
  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/posts");
      if (!response.ok) {
        throw new Error("Failed to fetch posts"); // ✅ Handle HTTP errors
      }
      const data = await response.json();
      console.log(data);

      setPosts(data); // ✅ Store posts in state
    } catch (err) {
      console.error("Error fetching posts:", err);
      setError(err.message);
    } finally {
      setLoading(false); // ✅ Stop loading after fetching
    }
  };
  useEffect(() => {
    getPosts();
  }, []); // ✅ Empty dependency array to run only on mount

  return (
    <Container className="mt-5">
      <Button size="lg" variant="success">
        <Link to={"/create"} style={{ textDecoration: "none", color: "white" }}>
          Create Post <BsPlusCircleFill />
        </Link>
      </Button>

      {loading ? (
        <div className="text-center mt-4">
          <Spinner animation="border" />
        </div>
      ) : error ? (
        <div className="text-danger mt-4">Error: {error}</div> // ✅ Display error message
      ) : (
        <Row className="mt-3" sm={1} md={3}>
          {posts.length >0 &&
          posts.map((post) => (
            <Col key={post._id}>
              <Card className="mb-2">
                <Card.Body>
                  <Row className="mb-2">
                    <Col xs={8} md={7} lg={8}>
                      <Card.Title>{post.title}</Card.Title>
                    </Col>
                    <Col>
                      <Link to={`/update/${post._id}`}>
                        <AiOutlineEdit className="text-primary" role="button" />
                      </Link>
                    </Col>
                    <Col>
                      <AiFillDelete
                        className="text-danger"
                        onClick={() => deletePost(post._id)}
                        role="button"
                      />
                    </Col>
                  </Row>
                  <Card.Text>{post.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
          {posts.length === 0 && <h1 className="text-center display-6 ">No posts to display</h1>}
        </Row>
      )}
    </Container>
  );
}

export default PostList;
