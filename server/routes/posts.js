import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get('/', verifyToken, getFeedPosts) //get every posts in database 
router.get('/:userId/posts', verifyToken, getUserPosts) //get every post of a specific user

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost); //Like

export default router; 