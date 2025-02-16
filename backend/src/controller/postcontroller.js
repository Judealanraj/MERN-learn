import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "../dataBaseConnect.js";
import Post from "../model/postmodel.js";

// ✅ Create a new post
export const createPost = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res.status(400).json({ error: "Title and description are required" });
    }

    const newPost = new Post({ title, description });
    await newPost.save();

    res.status(201).json({ message: "Post created successfully", post: newPost });
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get all posts
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Get a single post by ID
export const getSinglePost = async (req, res) => {
  try {
    const {id} = req.params;
    const post = await Post.findById(id);
    
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({post});
  } catch (error) {
    console.error("Error fetching post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Update a post by ID
export const updatePost = async (req, res) => {
  try {
    const { title, description } = req.body;
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      { title, description },
      { new: true } // Returns updated document
    );

    if (!updatedPost) {
      return res.status(404).json({ error: "Post not found" });
    }

    res.status(200).json({ message: "Post updated successfully", post: updatedPost });
  } catch (error) {
    console.error("Error updating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// ✅ Delete a post by ID
export const deletePost = async (req, res) => {
  try {
    const deletedPost = await Post.findByIdAndDelete(req.params.id);
    if (!deletedPost) {
      return res.status(404).json({ error: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error("Error deleting post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};


