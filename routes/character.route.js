import { Router } from "express";
import { getCharacters,getCharactersById } from "../controllers/character.controller.js";

const router = Router();

 router.route('/getCharacters').get(getCharacters)
 router.route('/getCharacters/:id').get(getCharactersById)
export default router