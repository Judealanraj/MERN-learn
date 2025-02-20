import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaCirclePlus } from "react-icons/fa6";

import AddPost from "./components/addPost.js";
import LoadingSpinner from "./components/loadingSpinner.js";
import UpdatePost from "./components/updatePost.js";
import PostList from "./components/postList.js";
import NotFount from "./components/notFount.js";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/", element: <PostList /> },
  { path: "/create", element: <AddPost /> },
  { path: "/update/:post_id", element: <UpdatePost /> },
  { path: "*", element: <NotFount /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
