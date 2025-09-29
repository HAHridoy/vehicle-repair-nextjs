"use server"
import bcrypt from "bcrypt"
import dbConnect, { collectionNameObj } from "@/lib/dbConnect"

export const registerUser = async(payload) =>{
    console.log("register user called", payload);
    const userCollection = dbConnect(collectionNameObj.userCollection);

    //validation
    const { name, email, password } = payload;
    if(!email || !password){
        return null;
    }
    const user = await userCollection.findOne({email: payload.email});

    if(!user){
        const hashedPassword = await bcrypt.hash(password, 10);
        payload.password = hashedPassword;
        //save user
        const newUser = await userCollection.insertOne(payload);
        newUser.insertedId = newUser.insertedId.toString();
        return newUser;
    }
    return null;
}