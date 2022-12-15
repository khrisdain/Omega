import express from "express";
import { getUser, getUserFriends, addRemoveFriends }from "../controllers/user.js";
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

/* READ ROUTES */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends)

/*UPDATE ROUTES */
router.patch("/:id/:friendsId", verifyToken, addRemoveFriends);

export default router;