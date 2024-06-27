import { addRoom,getAllRooms } from "../Controllers/roomController";
import express from "express"
const router=express.Router();
router.post("/addroom", addRoom);
router.post("/getroom", getAllRooms);

export default  router;