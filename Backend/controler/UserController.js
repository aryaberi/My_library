import User from "../models/usermodels.js";

export const getUsers = async(req,res) =>{
    try{
        const response = await User.findAll();
        res.status(200).json(response);

    } catch (error){
        console.log(error.message);
    }
}

export const getUsersby = async(req,res) =>{
    try{
        const response = await User.findOne({
            where:{
                email:req.params.email
            }
        });
        res.status(200).json(response);

    } catch (error){
        console.log(error.message);
    }
}

export const createUser = async(req,res) =>{
    try{
        await User.create(req.body);
        res.status(201).json({msg:"User Created"});

    } catch (error){
        console.log(error.message);
    }
}
