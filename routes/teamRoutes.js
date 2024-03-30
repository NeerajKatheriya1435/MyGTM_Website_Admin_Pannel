import express from "express"
import { requireSignIn, } from "../middlewares/authMiddleware.js"
import {
    teamCategoryController, teamSubCategoryController, updateCategory
} from "../controllers/teamController.js"


const router = express.Router()

// create team routing

// create category
router.post("/add-new-category", requireSignIn, teamCategoryController)
// update category
router.put("/update-new-category/:id", requireSignIn, updateCategory)

//create subcategory
router.post("/add-new-subcategory", requireSignIn, teamSubCategoryController)

export default router
