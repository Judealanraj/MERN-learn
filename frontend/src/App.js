import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import { FaCirclePlus } from "react-icons/fa6";

import AddPost from "./components/addPost.js";
import LoadingSpinner from "./components/loadingSpinner.js";
import UpdatePost from "./components/updatePost.js";
import PostList from "./components/postList.js";
import NotFount from "./components/notFount.js";

function App() {
  //return addPost();
  //return < PostList />
  return < LoadingSpinner />
};

export default App;
