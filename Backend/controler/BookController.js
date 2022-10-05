import Book from "../models/bookmodels.js";

export const getBooks = async(req,res) =>{
    try{
        const response = await Book.findAll();
        res.status(200).json(response);

    } catch (error){
        console.log(error.message);
    }
}

export const getBooksby = async(req,res) =>{
    try{
        const response = await Book.findOne({
            where:{
                id:req.params.id
            }
        });
        res.status(200).json(response);

    } catch (error){
        console.log(error.message);
    }
}

export const createBook = async(req,res) =>{
    try{
        await Book.create(req.body);
        res.status(201).json({msg:"User Created"});

    } catch (error){
        console.log(error.message);
    }
}
