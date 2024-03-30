import slugify from "slugify";
import teamCatModel from "../models/teamCategory.js";
import teamSubCatModel from "../models/teamSubCategory.js"

//1.  Category controller
//create category
export const teamCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({
                success: true,
                message: "Category field is required"
            })
        }
        const existingCategory = await teamCatModel.findOne({ name })
        if (existingCategory) {
            return res.status(401).send({
                success: true,
                message: "Category already exists"
            })
        }
        const teamCategory = await new teamCatModel({ name, slug: slugify(name) }).save()
        res.status(201).send({
            success: true,
            message: "Category created",
            teamCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while creating category",
            error
        })
    }
}

// Update category
export const updateCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const { id } = req.params;
        const category = await teamCatModel.findByIdAndUpdate(id, { name, slug: slugify(name) }, { new: true })
        res.status(200).send({
            success: true,
            message: "Category updated successfully",
            category
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error while Updating category",
            error
        })
    }
}



//2. Sub category controller
export const teamSubCategoryController = async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(401).send({
                success: true,
                message: "Sub category field is required"
            })
        }
        const existingSubCategory = await teamSubCatModel.findOne({ name })
        if (existingSubCategory) {
            return res.status(401).send({
                success: true,
                message: "Sub category already exists"
            })
        }
        const teamSubCategory = await new teamSubCatModel({ name, slug: slugify(name) }).save()
        res.status(201).send({
            success: true,
            message: "Category created",
            teamSubCategory
        })
    } catch (error) {
        console.log(error)
        res.status(500).send({
            success: false,
            message: "Internal server error occured",
            error
        })
    }
}

// add a new member
