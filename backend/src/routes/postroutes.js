import express, { Router } from "express";
const router = express.Router();
import { createPost, getPosts, getSinglePost, updatePost, deletePost } from "../controller/postcontroller.js";



router.get("/post/:id",getSinglePost);
router.get("/posts",getPosts);
router.post("/createPost",createPost);
router.put("/updatePost/:id",updatePost);
router.delete("/deletePost/:id",deletePost);

export default router;